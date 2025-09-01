import { useState } from "react";
import "./App.css";

function App() {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="emoji-helper-popup">
      <div className="header">
        <h1>😀 Emoji Helper</h1>
        <p>Discord-style emoji picker for any website</p>
      </div>

      <div className="content">
        <div className="feature-status">
          <div className="status-item">
            <span className="status-indicator enabled"></span>
            <span>Extension Active</span>
          </div>
        </div>

        <div className="how-to-use">
          <h3>How to use:</h3>
          <ol>
            <li>Click on any input field or textarea</li>
            <li>
              Type <code>:</code> followed by emoji name
            </li>
            <li>Select emoji with arrow keys and Enter</li>
            <li>Or click on the emoji you want</li>
          </ol>
        </div>

        <div className="examples">
          <h3>Try these:</h3>
          <div className="example-grid">
            <div className="example-item">
              <code>:sob</code>
              <span>😭</span>
            </div>
            <div className="example-item">
              <code>:heart</code>
              <span>❤️</span>
            </div>
            <div className="example-item">
              <code>:fire</code>
              <span>🔥</span>
            </div>
            <div className="example-item">
              <code>:thinking</code>
              <span>🤔</span>
            </div>
            <div className="example-item">
              <code>:thumbs_up</code>
              <span>👍</span>
            </div>
            <div className="example-item">
              <code>:joy</code>
              <span>😂</span>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>Works on all websites with input fields!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
