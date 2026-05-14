import React, { useState, useCallback } from 'react';
import '../styles/color-picker.css';

interface ColorInfo {
  hex: string;
  rgb: string;
  hsl: string;
}

export const ColorPicker: React.FC = () => {
  const [color, setColor] = useState('#00d9ff');
  const [colorInfo, setColorInfo] = useState<ColorInfo>(getColorInfo('#00d9ff'));

  function hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  }

  function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  }

  function getColorInfo(hex: string): ColorInfo {
    const rgb = hexToRgb(hex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    return {
      hex: hex.toUpperCase(),
      rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
    };
  }

  const handleColorChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    setColorInfo(getColorInfo(newColor));
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="color-picker-container">
      <h3>Color Converter & Picker</h3>
      <div className="color-input-group">
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="color-input"
        />
        <div className="color-preview" style={{ backgroundColor: color }}></div>
      </div>

      <div className="color-values">
        <div className="color-value-item" onClick={() => copyToClipboard(colorInfo.hex)}>
          <label>HEX</label>
          <code>{colorInfo.hex}</code>
          <span className="copy-hint">Click to copy</span>
        </div>
        <div className="color-value-item" onClick={() => copyToClipboard(colorInfo.rgb)}>
          <label>RGB</label>
          <code>{colorInfo.rgb}</code>
          <span className="copy-hint">Click to copy</span>
        </div>
        <div className="color-value-item" onClick={() => copyToClipboard(colorInfo.hsl)}>
          <label>HSL</label>
          <code>{colorInfo.hsl}</code>
          <span className="copy-hint">Click to copy</span>
        </div>
      </div>

      <div className="color-palette">
        <h4>Palette Presets</h4>
        <div className="palette-grid">
          {['#00d9ff', '#ff006e', '#00ff88', '#667eea', '#764ba2', '#ffaa00', '#ff3333', '#ffffff'].map(
            (c) => (
              <button
                key={c}
                className="palette-button"
                style={{ backgroundColor: c }}
                onClick={() => {
                  setColor(c);
                  setColorInfo(getColorInfo(c));
                }}
                title={c}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
