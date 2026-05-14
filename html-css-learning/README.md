# 🎓 Advanced HTML & CSS Learning Platform

An interactive web-based learning platform for mastering HTML and CSS with live code editors, instant preview, and comprehensive lessons from beginner to advanced levels.

## 🌟 Features

### **Interactive Code Editors**
- **Monaco Editor** integration with syntax highlighting
- Live HTML and CSS editing side-by-side
- Real-time preview updates
- Minimap and line numbers
- Code formatting and auto-completion

### **Live Preview System**
- Instant HTML rendering in sandbox iframe
- Automatic CSS application to code
- No page refresh required
- Safe execution environment

### **Comprehensive Lessons**
- **9 Complete Lessons** across 3 levels
- HTML, CSS, and Advanced topics
- Code examples with explanations
- Interactive code snippets

### **Developer Tools**
- **Color Picker**: Convert between hex, RGB, HSL formats
- **DOM Inspector**: Visualize HTML structure as DOM tree
- **CSS Variable Viewer**: See applied styles
- **Responsive Design**: Test on mobile, tablet, desktop

### **Responsive Design**
- Mobile-first approach
- Adaptive sidebars and grids
- Breakpoints: 1400px, 1024px, 768px, 480px
- Touch-friendly interface

## 📚 Lessons Included

### HTML Fundamentals
1. **Semantic HTML Structure & Tags** - Master semantic markup with article, section, nav, header, footer, main, aside
2. **Form Elements & Input Handling** - Build forms with inputs, selects, textareas, and event handling
3. **Media Elements** - Work with img, video, audio, canvas, and SVG

### CSS Essentials
1. **Flexbox Layout** - Flexible layouts with flex containers and flex items
2. **CSS Grid Layout** - Powerful grid systems with auto-placement and named areas
3. **Animations & Transitions** - Smooth visual effects and keyframe animations

### Advanced Topics
1. **Advanced Positioning & Z-Index** - Master absolute, relative, fixed, sticky positioning
2. **CSS Transforms & Perspectives** - 2D/3D transforms, rotations, scales, and perspectives
3. **Advanced Gradients & Colors** - Linear, radial, conic gradients with color stops

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (https://nodejs.org/)
- npm or yarn
- Git (optional, for deployment)

### Installation

```bash
# Clone or navigate to the project directory
cd html-css-learning

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/html-css-learning/` in your browser.

## 🛠️ Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
# Or use the deployment script:
pwsh -File deploy.ps1

# Run linter
npm run lint
```

## 📦 Project Structure

```
src/
├── types/
│   └── index.ts              # TypeScript type definitions
├── data/
│   └── lessons.ts            # Lesson content database
├── components/
│   ├── App.tsx              # Main application component
│   ├── CodeEditor.tsx       # Monaco editor wrapper
│   ├── Preview.tsx          # Live HTML preview
│   ├── ColorPicker.tsx      # Color conversion tool
│   ├── DOMInspector.tsx     # DOM tree visualizer
│   └── LessonCard.tsx       # Lesson display card
├── styles/
│   ├── globals.css          # Design system and typography
│   ├── app.css              # Main layout styles
│   ├── code-editor.css      # Editor styling
│   ├── preview.css          # Preview styling
│   ├── color-picker.css     # Color picker styling
│   ├── dom-inspector.css    # DOM inspector styling
│   └── lesson-card.css      # Lesson card styling
├── App.tsx                  # Root component
├── main.tsx                 # Entry point
└── index.css               # Global CSS resets
```

## 🎨 Design System

### Color Palette
```css
--accent-primary: #00d9ff    /* Cyan */
--accent-secondary: #ff006e  /* Magenta */
--accent-tertiary: #00ff88   /* Lime */
--bg-primary: #0f0f0f        /* Dark background */
--bg-secondary: #1a1a1a      /* Secondary background */
--bg-tertiary: #252525       /* Tertiary background */
```

### Responsive Breakpoints
- **Desktop**: > 1400px
- **Laptop**: 1024px - 1400px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Phone**: < 480px

## 🌐 Deployment

### Deploy to GitHub Pages

#### Option 1: Using npm script
```bash
npm run deploy
```

#### Option 2: Using PowerShell deployment script
```powershell
pwsh -File deploy.ps1
```

#### Manual Deployment
```bash
npm run build
gh pages deploy dist
```

### GitHub Pages Configuration
- Base URL: `https://username.github.io/html-css-learning/`
- Branch: `gh-pages` (auto-created by `gh pages deploy`)
- Source: `dist/` directory

## 💻 Technology Stack

### Frontend Framework
- **React 19.2.6** - UI library with Strict Mode
- **React DOM 19.2.6** - DOM rendering
- **TypeScript** - Type-safe JavaScript

### Code Editors & Preview
- **@monaco-editor/react** - VS Code-like editor
- **Prism.js** - Syntax highlighting
- **Highlight.js** - Additional highlighting support
- **Markdown-it** - Markdown parsing
- **React Markdown** - Markdown rendering

### Build & Development
- **Vite 8.0.12** - Fast bundler
- **TypeScript 5.x** - Language
- **ESLint** - Code quality

### State Management
- **Zustand** - Lightweight state management
- React Hooks - Local state

### Visualization
- **reactflow** - Diagram rendering (optional)

## 🔧 Customization

### Adding New Lessons

Edit `src/data/lessons.ts`:

```typescript
export const customLessons: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Your Lesson Title',
    level: 'beginner',
    description: 'Brief description',
    htmlCode: '<div>Your HTML</div>',
    cssCode: 'div { color: blue; }',
    explanation: 'Detailed explanation...',
    tags: ['tag1', 'tag2'],
    examples: [],
  },
];
```

### Customizing Colors

Edit `src/styles/globals.css`:

```css
:root {
  --accent-primary: #your-color;
  --bg-primary: #your-bg-color;
  /* ... other variables */
}
```

### Changing Header Content

Edit `src/App.tsx` header section to customize logo, title, and info display.

## 🧪 Testing

The application includes:
- TypeScript strict mode for type safety
- ESLint configuration for code quality
- Responsive breakpoints testing

To test:
1. Run `npm run dev`
2. Open DevTools (F12)
3. Test responsive design (Ctrl+Shift+M)
4. Switch between different screen sizes

## 📈 Performance

- **Bundle Size**: ~228 KB gzipped (71 KB)
- **CSS Size**: ~15 KB (3.4 KB gzipped)
- **Initial Load**: < 2 seconds on 4G
- **Code Editor**: Lazy-loaded with Monaco
- **Optimizations**: Tree-shaking, CSS minification, terser minification

## 🐛 Known Issues

- Nested iframes may have CSP restrictions
- Very large code examples may impact preview performance
- Monaco editor autocomplete requires internet for CDN resources

## 📝 License

MIT License - Feel free to use, modify, and distribute

## 🤝 Contributing

To add lessons or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues or questions:
1. Check the lesson explanations
2. Review the code examples
3. Test in different browsers
4. Check browser console for errors

## 🎯 Future Enhancements

- [ ] Lesson search and filtering
- [ ] Code snippet save/load
- [ ] User progress tracking
- [ ] Dark/light theme toggle
- [ ] More advanced CSS lessons
- [ ] Interactive CSS box model visualizer
- [ ] Code challenge system
- [ ] User accounts and progress persistence
- [ ] Quiz/assessment system
- [ ] Video tutorials integration

## 📚 Additional Resources

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks - Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Web Standards](https://www.w3.org/standards/)

---

**Built with ❤️ for learning HTML & CSS**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
