import React from "react";
import ReactDOM from "react-dom/client";
import { EmojiPicker } from "../components/EmojiPicker";
import { searchEmojis } from "../utils/emojiData";
import "../components/EmojiPicker.css";

export default defineContentScript({
  matches: ["<all_urls>"],
  main() {
    let currentInput:
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLElement
      | null = null;
    let emojiTriggerStart: number = -1;
    let emojiQuery: string = "";
    let pickerVisible: boolean = false;
    let pickerRoot: ReactDOM.Root | null = null;
    let pickerContainer: HTMLDivElement | null = null;
    let selectedEmojiIndex: number = 0;
    let currentEmojis: any[] = [];
    let isUpdatingSelection: boolean = false;
    let triggerDisabledUntil: number = 0;

    // Create the picker container
    function createPickerContainer() {
      if (pickerContainer) return pickerContainer;

      pickerContainer = document.createElement("div");
      pickerContainer.id = "emoji-helper-picker";
      pickerContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 999999;
        width: 100%;
        height: 100%;
      `;
      document.body.appendChild(pickerContainer);

      pickerRoot = ReactDOM.createRoot(pickerContainer);
      return pickerContainer;
    }

    // Get cursor position in input field
    function getCaretCoordinates(
      element: HTMLInputElement | HTMLTextAreaElement | HTMLElement
    ): { x: number; y: number } {
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);

      // Handle contenteditable elements differently
      if (element.contentEditable === "true") {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const rects = range.getClientRects();
          if (rects.length > 0) {
            const lastRect = rects[rects.length - 1];
            return {
              x: lastRect.right + window.scrollX,
              y: lastRect.bottom + window.scrollY + 5,
            };
          }
        }
        // Fallback to element position
        return {
          x: rect.left + window.scrollX,
          y: rect.bottom + window.scrollY + 5,
        };
      }

      // For better textarea support, use a more robust approach
      const isTextarea = element.tagName === "TEXTAREA";

      // Create a mirror div to calculate text position
      const div = document.createElement("div");
      const properties = [
        "direction",
        "boxSizing",
        "width",
        "height",
        "overflowX",
        "overflowY",
        "borderTopWidth",
        "borderRightWidth",
        "borderBottomWidth",
        "borderLeftWidth",
        "borderStyle",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "fontStyle",
        "fontVariant",
        "fontWeight",
        "fontStretch",
        "fontSize",
        "fontSizeAdjust",
        "lineHeight",
        "fontFamily",
        "textAlign",
        "textTransform",
        "textIndent",
        "textDecoration",
        "letterSpacing",
        "wordSpacing",
        "tabSize",
        "MozTabSize",
        "whiteSpace",
        "wordBreak",
        "wordWrap",
        "color",
      ];

      properties.forEach((prop) => {
        div.style[prop as any] = style[prop as any];
      });

      div.style.position = "absolute";
      div.style.visibility = "hidden";
      div.style.whiteSpace = isTextarea ? "pre-wrap" : "nowrap";
      div.style.wordWrap = "break-word";
      div.style.top = "0px";
      div.style.left = "0px";
      div.style.overflow = "hidden";

      document.body.appendChild(div);

      const inputElement = element as HTMLInputElement | HTMLTextAreaElement;
      const text = inputElement.value.substring(
        0,
        inputElement.selectionStart || 0
      );
      div.textContent = text;

      const span = document.createElement("span");
      span.textContent = "|"; // Use a simple cursor marker
      div.appendChild(span);

      // Calculate position with better handling for textareas
      const lineHeight =
        parseInt(style.lineHeight) || parseInt(style.fontSize) * 1.2;

      let coordinates = {
        x: rect.left + span.offsetLeft + window.scrollX,
        y: rect.top + span.offsetTop + window.scrollY + lineHeight + 5,
      };

      // Ensure picker doesn't go off screen
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const pickerWidth = 320; // Approximate picker width
      const pickerHeight = 300; // Approximate picker height

      // Adjust horizontal position if too close to right edge
      if (coordinates.x + pickerWidth > viewportWidth) {
        coordinates.x = Math.max(10, viewportWidth - pickerWidth - 10);
      }

      // Adjust vertical position if too close to bottom edge
      if (coordinates.y + pickerHeight > viewportHeight) {
        coordinates.y = rect.top + window.scrollY - pickerHeight - 5;
      }

      document.body.removeChild(div);
      return coordinates;
    }

    // Store current picker position
    let currentPickerPosition = { x: 0, y: 0 };

    // Update picker selection
    function updatePickerSelection() {
      if (pickerRoot && pickerContainer && pickerVisible) {
        pickerRoot.render(
          React.createElement(EmojiPicker, {
            query: emojiQuery,
            position: currentPickerPosition,
            visible: true,
            selectedIndex: selectedEmojiIndex,
            onEmojiSelect: (emoji: string) => {
              insertEmoji(emoji);
              hideEmojiPicker();
            },
            onClose: hideEmojiPicker,
          })
        );
      }

      // Reset flag after rendering
      setTimeout(() => {
        isUpdatingSelection = false;
      }, 100);
    }

    // Show emoji picker
    function showEmojiPicker(
      query: string,
      position: { x: number; y: number }
    ) {
      createPickerContainer();
      pickerVisible = true;

      // Update emoji list and reset selection
      currentEmojis = searchEmojis(query, 8);
      selectedEmojiIndex = 0;
      currentPickerPosition = position;

      if (pickerRoot && pickerContainer) {
        pickerContainer.style.pointerEvents = "auto";

        pickerRoot.render(
          React.createElement(EmojiPicker, {
            query,
            position: position,
            visible: true,
            selectedIndex: selectedEmojiIndex,
            onEmojiSelect: (emoji: string) => {
              insertEmoji(emoji);
              hideEmojiPicker();
            },
            onClose: hideEmojiPicker,
          })
        );
      }
    }

    // Hide emoji picker
    function hideEmojiPicker() {
      pickerVisible = false;
      emojiTriggerStart = -1;
      emojiQuery = "";
      selectedEmojiIndex = 0;
      currentEmojis = [];
      isUpdatingSelection = false;

      if (pickerRoot && pickerContainer) {
        pickerContainer.style.pointerEvents = "none";
        pickerRoot.render(
          React.createElement(EmojiPicker, {
            query: "",
            position: { x: 0, y: 0 },
            visible: false,
            selectedIndex: 0,
            onEmojiSelect: () => {},
            onClose: () => {},
          })
        );
      }
    }

    // Insert emoji into contenteditable element
    function insertEmojiInContentEditable(element: HTMLElement, emoji: string) {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;

      const range = selection.getRangeAt(0);
      const textContent = element.textContent || "";
      const cursorPos = getContentEditableInfo(element).cursorPos;

      // Find the trigger position
      let colonPos = -1;
      for (let i = cursorPos - 1; i >= Math.max(0, cursorPos - 20); i--) {
        if (textContent[i] === ":") {
          colonPos = i;
          break;
        }
        if (textContent[i] === " " || textContent[i] === "\n") {
          break;
        }
      }

      if (colonPos === -1) return;

      // Create a new range to select the trigger text
      const triggerRange = document.createRange();
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null
      );

      let currentPos = 0;
      let startNode = null;
      let endNode = null;
      let startOffset = 0;
      let endOffset = 0;

      while (walker.nextNode()) {
        const node = walker.currentNode as Text;
        const nodeLength = node.textContent?.length || 0;

        if (currentPos <= colonPos && currentPos + nodeLength > colonPos) {
          startNode = node;
          startOffset = colonPos - currentPos;
        }

        if (currentPos <= cursorPos && currentPos + nodeLength >= cursorPos) {
          endNode = node;
          endOffset = cursorPos - currentPos;
          break;
        }

        currentPos += nodeLength;
      }

      if (startNode && endNode) {
        triggerRange.setStart(startNode, startOffset);
        triggerRange.setEnd(endNode, endOffset);
        triggerRange.deleteContents();

        const emojiNode = document.createTextNode(emoji + " ");
        triggerRange.insertNode(emojiNode);

        // Position cursor after emoji
        const newRange = document.createRange();
        newRange.setStartAfter(emojiNode);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
      }

      // Trigger input events for frameworks
      element.dispatchEvent(new Event("input", { bubbles: true }));
      element.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Insert emoji into the current input
    function insertEmoji(emoji: string) {
      if (!currentInput || emojiTriggerStart === -1) return;

      // Handle contenteditable elements differently
      if (currentInput.contentEditable === "true") {
        insertEmojiInContentEditable(currentInput as HTMLElement, emoji);
        return;
      }

      // Handle regular input/textarea elements
      const inputElement = currentInput as
        | HTMLInputElement
        | HTMLTextAreaElement;
      const value = inputElement.value;
      const start = emojiTriggerStart;
      const end = inputElement.selectionStart || 0;

      const newValue =
        value.substring(0, start) + emoji + " " + value.substring(end);
      inputElement.value = newValue;

      // Set cursor position after emoji
      const newCursorPos = start + emoji.length + 1;
      inputElement.setSelectionRange(newCursorPos, newCursorPos);

      // Trigger input event for React and other frameworks
      const inputEvent = new Event("input", { bubbles: true });
      inputElement.dispatchEvent(inputEvent);

      inputElement.focus();
    }

    // Clear the trigger text (when user cancels with Escape)
    function clearTriggerText() {
      if (!currentInput || emojiTriggerStart === -1) return;

      // Handle contenteditable elements
      if (currentInput.contentEditable === "true") {
        const element = currentInput as HTMLElement;
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return;

        const textContent = element.textContent || "";
        const cursorPos = getContentEditableInfo(element).cursorPos;

        // Find and remove the trigger text
        const triggerRange = document.createRange();
        const walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          null
        );

        let currentPos = 0;
        let startNode = null;
        let endNode = null;
        let startOffset = 0;
        let endOffset = 0;

        while (walker.nextNode()) {
          const node = walker.currentNode as Text;
          const nodeLength = node.textContent?.length || 0;

          if (
            currentPos <= emojiTriggerStart &&
            currentPos + nodeLength > emojiTriggerStart
          ) {
            startNode = node;
            startOffset = emojiTriggerStart - currentPos;
          }

          if (currentPos <= cursorPos && currentPos + nodeLength >= cursorPos) {
            endNode = node;
            endOffset = cursorPos - currentPos;
            break;
          }

          currentPos += nodeLength;
        }

        if (startNode && endNode) {
          triggerRange.setStart(startNode, startOffset);
          triggerRange.setEnd(endNode, endOffset);
          triggerRange.deleteContents();

          // Position cursor where trigger text was
          const newRange = document.createRange();
          newRange.setStart(startNode, startOffset);
          newRange.collapse(true);
          selection.removeAllRanges();
          selection.addRange(newRange);
        }

        element.dispatchEvent(new Event("input", { bubbles: true }));
        return;
      }

      // Handle regular input/textarea elements
      const inputElement = currentInput as
        | HTMLInputElement
        | HTMLTextAreaElement;
      const value = inputElement.value;
      const start = emojiTriggerStart;
      const end = inputElement.selectionStart || 0;

      const newValue = value.substring(0, start) + value.substring(end);
      inputElement.value = newValue;

      // Set cursor position where trigger text was
      inputElement.setSelectionRange(start, start);

      // Trigger input event
      const inputEvent = new Event("input", { bubbles: true });
      inputElement.dispatchEvent(inputEvent);

      inputElement.focus();
    }

    // Get text content and cursor position for contenteditable elements
    function getContentEditableInfo(element: HTMLElement): {
      text: string;
      cursorPos: number;
    } {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        return { text: element.textContent || "", cursorPos: 0 };
      }

      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);

      return {
        text: element.textContent || "",
        cursorPos: preCaretRange.toString().length,
      };
    }

    // Check if character triggers emoji search
    function checkEmojiTrigger(
      element: HTMLInputElement | HTMLTextAreaElement | HTMLElement
    ) {
      // Skip if trigger detection is temporarily disabled (after Escape)
      if (Date.now() < triggerDisabledUntil) {
        return;
      }

      let value: string;
      let cursorPos: number;

      // Handle different element types
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        const inputElement = element as HTMLInputElement | HTMLTextAreaElement;
        value = inputElement.value;
        cursorPos = inputElement.selectionStart || 0;
      } else if (element.contentEditable === "true") {
        const info = getContentEditableInfo(element);
        value = info.text;
        cursorPos = info.cursorPos;
      } else {
        return;
      }

      // Look for ':' followed by letters
      let colonPos = -1;
      for (let i = cursorPos - 1; i >= Math.max(0, cursorPos - 20); i--) {
        const char = value[i];
        if (char === ":") {
          colonPos = i;
          break;
        }
        if (char === " " || char === "\n" || char === "\t") {
          break;
        }
      }

      if (colonPos !== -1) {
        const query = value.substring(colonPos + 1, cursorPos);

        // Only trigger if we have at least one character after ':'
        if (query.length > 0 && /^[a-zA-Z_]+$/.test(query)) {
          emojiTriggerStart = colonPos;
          emojiQuery = query;

          // Update emoji list and reset selection when query changes
          currentEmojis = searchEmojis(query, 8);
          selectedEmojiIndex = 0;

          const position = getCaretCoordinates(element);
          showEmojiPicker(query, position);
          return;
        }
      }

      // Hide picker if no valid trigger found
      if (pickerVisible) {
        hideEmojiPicker();
      }
    }

    // Check if element is a valid input target
    function isValidInputElement(
      element: Element
    ): element is HTMLInputElement | HTMLTextAreaElement | HTMLElement {
      if (element.tagName === "INPUT") {
        const input = element as HTMLInputElement;
        // Include text-based input types (including search)
        const allowedTypes = [
          "text",
          "search",
          "url",
          "email",
          "password",
          "tel",
          "number",
        ];
        return allowedTypes.includes(input.type) || input.type === "";
      }
      if (element.tagName === "TEXTAREA") {
        return true;
      }
      // Check for contenteditable elements (like ProseMirror)
      const htmlElement = element as HTMLElement;
      return (
        htmlElement.contentEditable === "true" ||
        htmlElement.getAttribute("contenteditable") === "true"
      );
    }

    // Handle input events
    function handleInput(e: Event) {
      const target = e.target as HTMLElement;
      if (target && isValidInputElement(target)) {
        currentInput = target as
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLElement;
        checkEmojiTrigger(currentInput);
      }
    }

    // Handle focus events
    function handleFocus(e: Event) {
      const target = e.target as HTMLElement;
      if (target && isValidInputElement(target)) {
        currentInput = target as
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLElement;
      }
    }

    // Handle blur events
    function handleBlur(e: Event) {
      // Small delay to allow emoji selection
      setTimeout(() => {
        if (pickerVisible && document.activeElement !== currentInput) {
          hideEmojiPicker();
        }
      }, 150);
    }

    // Handle clicks outside
    function handleClick(e: Event) {
      const target = e.target as HTMLElement;
      if (pickerVisible && !target.closest("#emoji-helper-picker")) {
        hideEmojiPicker();
      }
    }

    // Debug function to log element info
    function debugElement(element: HTMLElement, eventType: string) {
      console.log(`[Emoji Helper] ${eventType}:`, {
        tagName: element.tagName,
        type: (element as HTMLInputElement).type,
        contentEditable: element.contentEditable,
        id: element.id,
        className: element.className,
        isValid: isValidInputElement(element),
      });
    }

    // Enhanced input handler with debugging
    function enhancedHandleInput(e: Event) {
      // Skip processing if we're in the middle of picker navigation
      if (pickerVisible && isUpdatingSelection) {
        console.log(
          `[Emoji Helper] Skipping ${e.type} during picker navigation`
        );
        return;
      }

      const target = e.target as HTMLElement;
      if (target) {
        debugElement(target, e.type);
        if (isValidInputElement(target)) {
          currentInput = target;
          checkEmojiTrigger(currentInput);
        }
      }
    }

    // Handle keydown events FIRST with highest priority to intercept keys when picker is visible
    const keydownHandler = (e: KeyboardEvent) => {
      if (pickerVisible) {
        // Intercept Enter, Escape, and Arrow keys when picker is visible
        switch (e.key) {
          case "Enter":
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            // Select the currently highlighted emoji
            if (currentEmojis[selectedEmojiIndex]) {
              insertEmoji(currentEmojis[selectedEmojiIndex].emoji);
              hideEmojiPicker();
            }
            return false;

          case "Escape":
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            // Clear the trigger text when user explicitly cancels
            clearTriggerText();

            // Disable trigger detection for a short time to prevent immediate reopening
            triggerDisabledUntil = Date.now() + 500;

            hideEmojiPicker();
            return false;

          case "ArrowUp":
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            if (selectedEmojiIndex > 0) {
              isUpdatingSelection = true; // Set flag BEFORE changing index
              selectedEmojiIndex--;
              console.log(`[Emoji Helper] ArrowUp: -> ${selectedEmojiIndex}`);
              updatePickerSelection();
            }
            return false;

          case "ArrowDown":
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            if (selectedEmojiIndex < currentEmojis.length - 1) {
              isUpdatingSelection = true; // Set flag BEFORE changing index
              selectedEmojiIndex++;
              console.log(`[Emoji Helper] ArrowDown: -> ${selectedEmojiIndex}`);
              updatePickerSelection();
            }
            return false;

          // Prevent any other keys from being processed while picker is visible
          default:
            if (e.key.length === 1 || e.key === "Backspace") {
              // Allow typing to continue emoji search, but prevent other processing
              setTimeout(() => {
                if (currentInput && pickerVisible) {
                  checkEmojiTrigger(currentInput);
                }
              }, 0);
            }
            break;
        }
      }

      // For contenteditable elements, update on every keystroke (only when picker not visible)
      if (!pickerVisible && currentInput?.contentEditable === "true") {
        setTimeout(() => {
          if (currentInput) {
            checkEmojiTrigger(currentInput);
          }
        }, 0);
      }
    };

    // Add event listeners with keydown having the highest priority
    document.addEventListener("keydown", keydownHandler, true);
    document.addEventListener("input", enhancedHandleInput, true);
    document.addEventListener("keyup", enhancedHandleInput, true); // For some contenteditable elements
    document.addEventListener("focus", handleFocus, true);
    document.addEventListener("blur", handleBlur, true);
    document.addEventListener("click", handleClick, true);

    // Handle dynamic content (for SPAs)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            // Include contenteditable elements as well
            const inputs = element.querySelectorAll(
              "input, textarea, [contenteditable='true']"
            );
            inputs.forEach((input) => {
              if (isValidInputElement(input)) {
                input.addEventListener("input", handleInput, true);
                input.addEventListener("focus", handleFocus, true);
                input.addEventListener("blur", handleBlur, true);
              }
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", keydownHandler, true);
      document.removeEventListener("input", enhancedHandleInput, true);
      document.removeEventListener("keyup", enhancedHandleInput, true);
      document.removeEventListener("focus", handleFocus, true);
      document.removeEventListener("blur", handleBlur, true);
      document.removeEventListener("click", handleClick, true);
      observer.disconnect();

      if (pickerContainer) {
        document.body.removeChild(pickerContainer);
      }
    };
  },
});
