import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    name: "Emoji Helper",
    description:
      "Discord-style emoji picker for any website. Type :emoji_name to get instant emoji suggestions!",
    version: "0.1.2",
    author: {
      email: "blueobsidian196@gmail.com",
    },
    homepage_url: "https://github.com/emoji-helper/emoji-helper",

    // Extension permissions
    permissions: ["activeTab", "storage"],

    // Host permissions for all websites
    host_permissions: ["<all_urls>"],

    // Content script configuration
    content_scripts: [
      {
        matches: ["<all_urls>"],
        js: ["content-scripts/content.js"],
        run_at: "document_end",
        all_frames: true,
      },
    ],

    // Action (popup) configuration
    action: {
      default_popup: "popup.html",
      default_title: "Emoji Helper - Discord-style emoji picker",
      default_icon: {
        "16": "icon/16.png",
        "32": "icon/32.png",
        "48": "icon/48.png",
        "96": "icon/96.png",
        "128": "icon/128.png",
      },
    },

    // Extension icons
    icons: {
      "16": "icon/16.png",
      "32": "icon/32.png",
      "48": "icon/48.png",
      "96": "icon/96.png",
      "128": "icon/128.png",
    },

    // Manifest version
    manifest_version: 3,

    // Content Security Policy for React
    content_security_policy: {
      extension_pages: "script-src 'self'; object-src 'self'",
    },

    // Web accessible resources (if needed)
    web_accessible_resources: [
      {
        resources: ["icon/*.png"],
        matches: ["<all_urls>"],
      },
    ],
  },
});
