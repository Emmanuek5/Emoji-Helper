# Emoji Helper - Discord-Style Emoji Picker

A Chrome extension that brings Discord-style emoji picking to any website. Simply type `:` followed by an emoji name to get an instant emoji picker!

## 🚀 Features

- **Universal**: Works on any website with input fields or textareas
- **Discord-Style**: Familiar `:emoji_name:` syntax
- **Real-time Search**: Emojis filter as you type
- **Keyboard Navigation**: Arrow keys, Enter, and Escape support
- **Smart Positioning**: Picker appears near your cursor
- **Framework Compatible**: Works with React, Vue, Angular, and vanilla JS sites

## 🎯 How to Use

1. Click on any input field or textarea on any website
2. Type `:` followed by an emoji name (e.g., `:sob`, `:heart`, `:fire`)
3. Use arrow keys to navigate or click to select
4. Press Enter to insert the emoji

## 📖 Examples

Try these emoji shortcuts:

- `:sob` → 😭
- `:heart` → ❤️
- `:fire` → 🔥
- `:thinking` → 🤔
- `:thumbs_up` → 👍
- `:joy` → 😂

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Package for Chrome Web Store
npm run zip
```

## 📦 Installation

### From Source

1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Open Chrome and go to `chrome://extensions/`
5. Enable "Developer mode"
6. Click "Load unpacked" and select the `dist` folder

### From Chrome Web Store

_Coming soon!_

## 🎨 Customization

The emoji database is located in `utils/emojiData.ts`. You can:

- Add new emojis
- Modify keywords for better search
- Customize emoji categories

## 🔧 Technical Details

- Built with [WXT](https://wxt.dev/) framework
- React-based emoji picker component
- TypeScript for type safety
- Content script injection for universal support
- Efficient search algorithm with keyword matching

## 📝 License

MIT License - feel free to use and modify!
