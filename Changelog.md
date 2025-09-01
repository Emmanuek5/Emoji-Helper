# Changelog

All notable changes to the Emoji Helper Chrome Extension will be documented in this file.

## [0.1.2] - 2024-12-19

### Fixed

- Fixed support for search-type inputs (Google main page now works)
- Enhanced ProseMirror contenteditable support (ChatGPT, Notion, etc.)
- Improved emoji insertion for contenteditable elements with proper DOM manipulation
- Added comprehensive debugging for troubleshooting input detection
- Fixed type safety issues with mixed input element types

### Added

- Debug logging to console for troubleshooting (can be disabled in production)
- Enhanced event handling with keyup events for better contenteditable support
- Fallback positioning for contenteditable elements

## [0.1.1] - 2024-12-19

### Fixed

- Improved textarea support with better cursor positioning
- Enhanced contenteditable element support
- Better viewport boundary detection to prevent picker from going off-screen
- More robust input type filtering (excludes buttons, checkboxes, etc.)

### Changed

- Updated popup design to use Discord-style dark theme instead of gradient
- Improved visual consistency with Discord's color scheme

## [0.1.0] - 2024-12-19

### Added

- Initial release of Emoji Helper Chrome Extension
- Discord-style emoji picker that triggers with `:` followed by text
- Comprehensive emoji database with 100+ emojis and searchable keywords
- Real-time emoji search and filtering as you type
- Keyboard navigation support (arrow keys, Enter, Escape)
- Dynamic positioning of emoji picker near cursor
- Support for all input fields and textareas across all websites
- Modern Discord-inspired UI design
- Automatic emoji insertion with proper text replacement
- Support for dynamic content and Single Page Applications (SPAs)

### Features

- **Trigger Pattern**: Type `:` followed by letters (e.g., `:sob`, `:heart`, `:fire`)
- **Search**: Emojis are filtered in real-time as you type
- **Navigation**: Use arrow keys to navigate, Enter to select, Escape to close
- **Universal**: Works on any website with input fields or textareas
- **Smart Positioning**: Emoji picker appears near your cursor position
- **Framework Compatible**: Works with React, Vue, Angular, and vanilla JS sites

### Technical Details

- Built with WXT framework for Chrome extension development
- React-based emoji picker component
- TypeScript for type safety
- Content script injection for universal website support
- Efficient emoji search algorithm with keyword matching
- Proper event handling for modern web frameworks
