```javascript
        <h3>Timeline</h3>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={time}
          onChange={(e) => videoRef.current.currentTime = e.target.value}
        />
      </div>

      {/* 🎨 KEYFRAMES (AE STYLE CONTROLS) */}
      <div style={{ marginTop: 20 }}>
        <h3>Effects (Keyframes)</h3>

        <label>Brightness</label>
        <input type="range" min="0.5" max="2" step="0.1"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
        />

        <label>Contrast</label>
        <input type="range" min="0.5" max="2" step="0.1"
          value={contrast}
          onChange={(e) => setContrast(e.target.value)}
        />

        <label>Zoom</label>
        <input type="range" min="0.5" max="2" step="0.1"
          value={zoom}
          onChange={(e) => setZoom(e.target.value)}
        />

        <label>Rotation</label>
        <input type="range" min="-180" max="180" step="1"
          value={rotation}
          onChange={(e) => setRotation(e.target.value)}
        />
      </div>

      {/* EXPORT */}
      <button
        onClick={exportVideo}
        style={{ marginTop: 20, padding: 10, background: "#00ffcc" }}
      >
        Export AE Video
      </button>

      <p style={{ marginTop: 10, color: "gray" }}>
        PRO version działa bez API (100% browser engine)
      </p>

    </div>
  );
}
```

