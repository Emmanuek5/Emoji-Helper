# Privacy Policy — Emoji Helper

Effective date: 20 September 2025
Last updated: 20 September 2025

## Overview
Emoji Helper is a browser extension that provides Discord‑style emoji suggestions while you type in text boxes on websites. This policy explains what data the extension processes, stores, and shares. We designed Emoji Helper to work locally on your device and to minimize data processing.

## What the extension does
- **Core behavior**: Listens for the `:` trigger in focused editable fields (inputs, textareas, contenteditable) and shows emoji suggestions.
- **Local processing**: To generate suggestions, the extension reads only the small portion of text immediately around your typing caret. This processing happens in memory and is not persisted.
- **No remote code / network calls**: The extension’s scripts are packaged with the extension and run under a strict Content Security Policy (`script-src 'self'`). We do not fetch or execute code from remote servers.

## Data we collect
Emoji Helper does not collect personal information and does not transmit any data to external servers.

The extension stores only the following data locally via `chrome.storage`:
- **User settings**: enable/disable, per‑site preferences, keyboard shortcuts, preferred skin tone.
- **Personalization**: recent emojis, favorite emojis.
- **Local cache**: a small, read‑only emoji index for faster lookups.

This data remains on your device. If Chrome Sync is enabled, the data may sync across your own devices under your Google account subject to your Chrome settings.

## What we do not collect
- We do not collect or store the contents of webpages.
- We do not collect browsing history or URLs for analytics.
- We do not collect names, email addresses, or other personal identifiers.
- We do not use cookies.
- We do not share or sell any data to third parties.

## Permissions and how they are used
Emoji Helper declares the following permissions in its manifest (see `wxt.config.ts`):

- **activeTab**: Used to interact with the currently active page so the suggestion UI can appear inside the focused text field. Access is temporary and limited to user interaction; no page data is retained.
- **storage**: Used to save your preferences, favorites, and recent emojis locally (and optionally sync via Chrome if you enable it).
- **host permissions (`<all_urls>`)**: Required so the content script can run on sites where you type. We cannot predict which websites you will use for typing, so broad host access is necessary for core functionality. The content script only monitors editable fields for the `:` trigger and reads minimal surrounding text to match emoji shortcodes.

## Data retention and deletion
- Settings, favorites, and recents are stored until you remove them or uninstall the extension.
- You can clear stored data at any time by:
  - Removing and reinstalling the extension, or
  - Using the extension’s options/reset features (if provided), or
  - Clearing synced data via your Chrome settings if you use Chrome Sync.

## Security
- The extension runs with a restrictive Content Security Policy (`script-src 'self'; object-src 'self'`).
- No remote code execution is used.
- Data is stored using browser‑provided storage APIs.

While we take reasonable steps to protect data handled by the extension, no software can guarantee perfect security.

## Children’s privacy
Emoji Helper is not directed to children under 13. We do not knowingly collect personal information from children.

## Your rights (GDPR/CCPA/UK GDPR)
Because Emoji Helper does not collect or transmit personal data to our servers, requests to access, delete, or port data generally pertain to information stored locally in your browser profile or synced via your own Google account. You can:
- Remove the extension to delete its local storage from your device.
- Manage or clear synced extension data via your Chrome settings.

If you have questions about how the extension works or how to manage your data, contact us using the email below.

## Third parties
Emoji Helper does not use third‑party analytics, advertising, or tracking services. No data is shared with third parties.

## Changes to this policy
We may update this Privacy Policy as the extension evolves. Material changes will be reflected by updating the “Last updated” date above. Continued use of the extension after an update constitutes acceptance of the revised policy.

## Contact
If you have any questions about this Privacy Policy or the extension’s data practices, contact:

- Email: blueobsidian196@gmail.com
- Project homepage: https://github.com/Emmanuek5/Emoji-Helper
