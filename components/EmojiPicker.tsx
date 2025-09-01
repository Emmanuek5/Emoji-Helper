import React, { useState, useEffect, useRef } from "react";
import { EmojiData, searchEmojis } from "../utils/emojiData";

interface EmojiPickerProps {
  query: string;
  position: { x: number; y: number };
  onEmojiSelect: (emoji: string) => void;
  onClose: () => void;
  visible: boolean;
  selectedIndex?: number;
}

export const EmojiPicker: React.FC<EmojiPickerProps> = ({
  query,
  position,
  onEmojiSelect,
  onClose,
  visible,
  selectedIndex: propSelectedIndex = 0,
}) => {
  const [emojis, setEmojis] = useState<EmojiData[]>([]);
  const selectedIndex = propSelectedIndex;
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      const results = searchEmojis(query, 8);
      setEmojis(results);
    }
  }, [query, visible]);

  // Remove keyboard handling from component - handled by content script

  if (!visible || emojis.length === 0) {
    return null;
  }

  return (
    <div
      ref={pickerRef}
      className="emoji-picker"
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 999999,
      }}
    >
      <div className="emoji-picker-container">
        <div className="emoji-picker-header">
          <span className="emoji-picker-title">
            {query ? `Emojis matching "${query}"` : "Popular emojis"}
          </span>
        </div>
        <div className="emoji-picker-grid">
          {emojis.map((emoji, index) => (
            <div
              key={emoji.name}
              className={`emoji-item ${
                index === selectedIndex ? "selected" : ""
              }`}
              onClick={() => onEmojiSelect(emoji.emoji)}
              title={`:${emoji.name}:`}
            >
              <span className="emoji-char">{emoji.emoji}</span>
              <span className="emoji-name">:{emoji.name}:</span>
            </div>
          ))}
        </div>
        <div className="emoji-picker-footer">
          <span className="emoji-picker-hint">
            Use ↑↓ to navigate, Enter to select, Esc to close
          </span>
        </div>
      </div>
    </div>
  );
};
