import type { Lesson } from '../types/index';

export const htmlLessons: Lesson[] = [
  {
    id: 'semantic-html-1',
    title: 'Semantic HTML - Structure',
    category: 'html',
    description: 'Learn about semantic HTML tags and proper document structure',
    level: 'beginner',
    htmlCode: `<main>
  <header>
    <h1>Welcome to Learning</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
    </nav>
  </header>

  <article>
    <h2>Article Title</h2>
    <p>Article content here...</p>
  </article>

  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
    </ul>
  </aside>

  <footer>
    <p>&copy; 2024 Learning Platform</p>
  </footer>
</main>`,
    cssCode: `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
}

header {
  background: #2d3142;
  padding: 20px;
  border-bottom: 2px solid #00d9ff;
}

nav a {
  margin-right: 15px;
  color: #00d9ff;
}

article {
  padding: 20px 0;
  border-bottom: 1px solid #333;
}

aside {
  background: #1a1a1a;
  padding: 15px;
  border-left: 3px solid #00ff88;
  margin: 20px 0;
}

footer {
  text-align: center;
  padding: 20px;
  color: #a8a8a8;
}`,
    explanation: 'Semantic HTML provides meaning to web content. Tags like <main>, <header>, <article>, <aside>, and <footer> help both browsers and developers understand the structure and purpose of content.',
    tags: ['semantic', 'structure', 'accessibility'],
    examples: [
      {
        id: 'ex1',
        title: 'Header Example',
        html: `<header>
  <h1>Site Title</h1>
  <p>Subtitle here</p>
</header>`,
        css: `header {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}`,
        description: 'Basic header with gradient background'
      }
    ]
  },
  {
    id: 'html-forms-1',
    title: 'Form Elements & Inputs',
    category: 'html',
    description: 'Master form inputs, validation, and accessibility',
    level: 'intermediate',
    htmlCode: `<form>
  <fieldset>
    <legend>User Registration</legend>

    <label for="username">Username:</label>
    <input
      id="username"
      type="text"
      name="username"
      required
      placeholder="Enter username"
    />

    <label for="email">Email:</label>
    <input
      id="email"
      type="email"
      name="email"
      required
    />

    <label for="password">Password:</label>
    <input
      id="password"
      type="password"
      name="password"
      required
    />

    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="">Select a country</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
    </select>

    <label>
      <input type="checkbox" name="agree" required />
      I agree to terms
    </label>

    <button type="submit">Register</button>
  </fieldset>
</form>`,
    cssCode: `form {
  max-width: 400px;
  margin: 20px 0;
}

fieldset {
  border: 1px solid #333;
  padding: 20px;
  border-radius: 6px;
}

legend {
  padding: 0 10px;
  color: #00d9ff;
  font-weight: bold;
}

label {
  display: block;
  margin: 15px 0 5px 0;
  color: #e8e8e8;
}

input, select, textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  background: #1a1a1a;
  border: 1px solid #333;
  color: #e8e8e8;
  border-radius: 4px;
}

input:focus, select:focus {
  outline: none;
  border-color: #00d9ff;
  box-shadow: 0 0 0 2px rgba(0, 217, 255, 0.1);
}

button {
  padding: 10px 20px;
  background: #00d9ff;
  color: #0f0f0f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

button:hover {
  background: #00ff88;
  transform: translateY(-2px);
}`,
    explanation: 'Forms are essential for user input. Use proper labels, input types, and validation to create accessible and user-friendly forms.',
    tags: ['forms', 'input', 'accessibility', 'validation'],
    examples: []
  },
  {
    id: 'html-media-1',
    title: 'Media Elements - Images & Video',
    category: 'html',
    description: 'Working with images, video, and audio elements',
    level: 'intermediate',
    htmlCode: `<figure>
  <img
    src="https://via.placeholder.com/600x400"
    alt="Example image demonstrating responsive images"
    width="600"
    height="400"
    loading="lazy"
  />
  <figcaption>A sample image with figure and figcaption</figcaption>
</figure>

<video width="600" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser doesn't support HTML5 video.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser doesn't support HTML5 audio.
</audio>`,
    cssCode: `figure {
  margin: 20px 0;
  padding: 15px;
  background: #1a1a1a;
  border-left: 3px solid #ff006e;
  border-radius: 4px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
}

figcaption {
  color: #a8a8a8;
  font-size: 0.9rem;
  font-style: italic;
}

video, audio {
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
}`,
    explanation: 'HTML5 provides native support for media with <video> and <audio> elements. Use <figure> and <figcaption> for semantic image presentations.',
    tags: ['media', 'images', 'video', 'audio', 'responsive'],
    examples: []
  }
];

export const cssLessons: Lesson[] = [
  {
    id: 'css-flexbox-1',
    title: 'Flexbox Layout Basics',
    category: 'css',
    description: 'Master flexible box layout for responsive designs',
    level: 'intermediate',
    htmlCode: `<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>

<div class="flex-column">
  <div class="flex-item">Row 1</div>
  <div class="flex-item">Row 2</div>
  <div class="flex-item">Row 3</div>
</div>`,
    cssCode: `.flex-container {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 6px;
  flex-wrap: wrap;
}

.flex-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.flex-item {
  flex: 1;
  min-width: 100px;
  padding: 20px;
  background: #2d3142;
  border-left: 2px solid #00d9ff;
  color: #e8e8e8;
  text-align: center;
  border-radius: 4px;
  transition: all 0.3s;
}

.flex-item:hover {
  background: #333;
  transform: scale(1.05);
}`,
    explanation: 'Flexbox is a powerful layout tool for creating flexible, responsive designs. Use justify-content for horizontal alignment and align-items for vertical alignment.',
    tags: ['flexbox', 'layout', 'responsive'],
    examples: []
  },
  {
    id: 'css-grid-1',
    title: 'CSS Grid Layout',
    category: 'css',
    description: 'Create complex responsive layouts with CSS Grid',
    level: 'intermediate',
    htmlCode: `<div class="grid-container">
  <header class="grid-header">Header</header>
  <aside class="grid-sidebar">Sidebar</aside>
  <main class="grid-main">Main Content</main>
  <footer class="grid-footer">Footer</footer>
</div>`,
    cssCode: `.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 15px;
  min-height: 100vh;
  padding: 20px;
}

.grid-header {
  grid-column: 1 / -1;
  background: #2d3142;
  padding: 20px;
  border-bottom: 2px solid #00d9ff;
}

.grid-sidebar {
  background: #1a1a1a;
  padding: 20px;
  border-right: 2px solid #ff006e;
}

.grid-main {
  background: #1a1a1a;
  padding: 20px;
  border-left: 2px solid #00ff88;
}

.grid-footer {
  grid-column: 1 / -1;
  background: #2d3142;
  padding: 20px;
  text-align: center;
  border-top: 2px solid #ffaa00;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }

  .grid-sidebar {
    grid-column: 1 / -1;
  }
}`,
    explanation: 'CSS Grid allows 2D layout control. Define rows and columns with precise placement for complex page layouts.',
    tags: ['grid', 'layout', 'responsive', 'advanced'],
    examples: []
  },
  {
    id: 'css-animation-1',
    title: 'CSS Animations & Transitions',
    category: 'css',
    description: 'Create smooth animations and transitions',
    level: 'intermediate',
    htmlCode: `<div class="animation-container">
  <div class="fade-in">Fade In</div>
  <div class="slide-in">Slide In</div>
  <div class="bounce">Bounce</div>
  <div class="rotate">Rotate</div>
  <div class="pulse">Pulse</div>
</div>`,
    cssCode: `.animation-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px;
}

div[class*="animation"] div {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.fade-in {
  animation: fadeIn 2s ease-in-out infinite;
}

.slide-in {
  animation: slideIn 2s ease-in-out infinite;
}

.bounce {
  animation: bounce 1s ease-in-out infinite;
}

.rotate {
  animation: rotate 3s linear infinite;
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes fadeIn {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes slideIn {
  0% { transform: translateX(-100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}`,
    explanation: 'CSS animations create fluid, performant motion. Use @keyframes to define animation sequences and apply them with animation property.',
    tags: ['animation', 'transitions', 'keyframes', 'motion'],
    examples: []
  }
];

export const advancedLessons: Lesson[] = [
  {
    id: 'css-advanced-positioning',
    title: 'Advanced Positioning & Z-Index',
    category: 'advanced',
    description: 'Master positioning contexts and stacking order',
    level: 'advanced',
    htmlCode: `<div class="positioning-demo">
  <div class="static-box">Static</div>
  <div class="relative-box">Relative</div>
  <div class="absolute-box">Absolute</div>
  <div class="fixed-box">Fixed</div>
  <div class="sticky-box">Sticky</div>
</div>`,
    cssCode: `.positioning-demo {
  position: relative;
  height: 600px;
  background: #1a1a1a;
  border: 2px solid #333;
  overflow-y: auto;
}

div[class*="-box"] {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 4px;
  margin: 20px;
}

.static-box {
  position: static;
  background: #667eea;
}

.relative-box {
  position: relative;
  top: 20px;
  left: 30px;
  background: #764ba2;
  z-index: 1;
}

.absolute-box {
  position: absolute;
  top: 150px;
  right: 20px;
  background: #ff006e;
  z-index: 2;
}

.fixed-box {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #00d9ff;
  color: #0f0f0f;
  z-index: 10;
}

.sticky-box {
  position: sticky;
  top: 0;
  background: #00ff88;
  color: #0f0f0f;
  z-index: 5;
}`,
    explanation: 'Understanding positioning (static, relative, absolute, fixed, sticky) and z-index is crucial for complex layouts. Each position type creates a new stacking context.',
    tags: ['positioning', 'z-index', 'stacking', 'advanced'],
    examples: []
  },
  {
    id: 'css-transforms',
    title: 'CSS Transforms & Perspectives',
    category: 'advanced',
    description: '3D transforms, skew, and perspective effects',
    level: 'advanced',
    htmlCode: `<div class="transform-container">
  <div class="box rotate">Rotate</div>
  <div class="box scale">Scale</div>
  <div class="box skew">Skew</div>
  <div class="box translate">Translate</div>
  <div class="box-3d">3D Box</div>
</div>`,
    cssCode: `.transform-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 40px;
  perspective: 1000px;
}

.box {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.box:hover {
  transform: scale(1.1);
}

.rotate {
  transform: rotate(45deg);
}

.scale {
  transform: scale(1.5);
}

.skew {
  transform: skewX(20deg);
}

.translate {
  transform: translateY(-10px);
}

.box-3d {
  width: 100px;
  height: 100px;
  background: #ff006e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transform: rotateX(25deg) rotateY(25deg);
  transform-style: preserve-3d;
}`,
    explanation: 'CSS transforms allow 2D and 3D transformations without affecting document flow. Combine with perspective for impressive 3D effects.',
    tags: ['transform', '3d', 'perspective', 'rotation'],
    examples: []
  },
  {
    id: 'css-gradients',
    title: 'Advanced Gradients & Colors',
    category: 'advanced',
    description: 'Linear, radial, conic gradients and color functions',
    level: 'advanced',
    htmlCode: `<div class="gradient-showcase">
  <div class="linear">Linear</div>
  <div class="radial">Radial</div>
  <div class="conic">Conic</div>
  <div class="complex">Complex</div>
</div>`,
    cssCode: `.gradient-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 40px;
}

.gradient-showcase > div {
  height: 200px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.linear {
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 50%,
    #f093fb 100%
  );
}

.radial {
  background: radial-gradient(
    circle at 30% 70%,
    #ff006e 0%,
    #ffaa00 50%,
    #00d9ff 100%
  );
}

.conic {
  background: conic-gradient(
    from 0deg at 50% 50%,
    red, yellow, lime, cyan, blue, magenta, red
  );
}

.complex {
  background:
    linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1)),
    radial-gradient(circle at 20% 80%, #667eea, #764ba2);
}`,
    explanation: 'Modern CSS supports multiple gradient types and color functions. Layer gradients for complex, stunning backgrounds.',
    tags: ['gradient', 'color', 'background', 'advanced'],
    examples: []
  }
];
