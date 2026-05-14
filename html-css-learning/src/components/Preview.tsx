import React, { useMemo } from 'react';
import '../styles/preview.css';

interface PreviewProps {
  html: string;
  css: string;
  title?: string;
}

export const Preview: React.FC<PreviewProps> = ({ html, css, title = 'Preview' }) => {
  const iframeSrcDoc = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              background: #0f0f0f;
              color: #e8e8e8;
              padding: 20px;
              line-height: 1.6;
            }
            ${css}
          </style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `;
  }, [html, css]);

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h3>{title}</h3>
      </div>
      <iframe
        title="HTML/CSS Preview"
        srcDoc={iframeSrcDoc}
        className="preview-iframe"
        sandbox="allow-same-origin"
      />
    </div>
  );
};
