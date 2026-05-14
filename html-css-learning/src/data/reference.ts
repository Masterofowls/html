export interface HTMLTag {
  name: string;
  category: 'semantic' | 'form' | 'media' | 'structure' | 'text' | 'interactive';
  description: string;
  usage: string;
  example: string;
  attributes?: string[];
  deprecated?: boolean;
}

export interface DOMMethod {
  name: string;
  category: 'element' | 'document' | 'node' | 'event';
  description: string;
  syntax: string;
  example: string;
  returns?: string;
}

export interface CSSProperty {
  name: string;
  category: 'layout' | 'styling' | 'animation' | 'positioning' | 'sizing' | 'color' | 'text' | 'border' | 'shadow' | 'transform';
  description: string;
  syntax: string;
  values?: string[];
  example: string;
}

/* ============================================
   HTML TAGS REFERENCE
   ============================================ */

export const htmlTags: HTMLTag[] = [
  // Semantic Tags
  {
    name: '<header>',
    category: 'semantic',
    description: 'Represents introductory content, typically containing navigation, branding, and headings.',
    usage: 'Use at the top of pages or sections to define header areas.',
    example: '<header><h1>Site Title</h1><nav>...</nav></header>',
    attributes: ['id', 'class', 'style'],
  },
  {
    name: '<nav>',
    category: 'semantic',
    description: 'Represents a section with navigation links.',
    usage: 'Wrap navigation menus and link lists.',
    example: '<nav><a href="#">Home</a><a href="#">About</a></nav>',
    attributes: ['id', 'class', 'style'],
  },
  {
    name: '<main>',
    category: 'semantic',
    description: 'Specifies the main content of the document. Should only appear once per page.',
    usage: 'Wrap the primary content area of your page.',
    example: '<main><article>...</article></main>',
    attributes: ['id', 'class', 'style'],
  },
  {
    name: '<article>',
    category: 'semantic',
    description: 'Represents independent, self-contained content like blog posts, news articles, or comments.',
    usage: 'Wrap individual pieces of content.',
    example: '<article><h2>Article Title</h2><p>Content...</p></article>',
    attributes: ['id', 'class', 'style'],
  },
  {
    name: '<section>',
    category: 'semantic',
    description: 'Defines a thematic grouping of content, typically with a heading.',
    usage: 'Group related content together logically.',
    example: '<section><h2>Features</h2><p>Feature description...</p></section>',
    attributes: ['id', 'class', 'style'],
  },
  {
    name: '<aside>',
    category: 'semantic',
    description: 'Represents content tangentially related to main content, like sidebars or callouts.',
    usage: 'Place supplementary content or sidebars.',
    example: '<aside><h3>Related</h3><ul>...</ul></aside>',
    attributes: ['id', 'class', 'style'],
  },
  {
    name: '<footer>',
    category: 'semantic',
    description: 'Represents footer content, typically containing copyright, links, or author info.',
    usage: 'Place at the bottom of pages or sections.',
    example: '<footer><p>&copy; 2024</p></footer>',
    attributes: ['id', 'class', 'style'],
  },
  {
    name: '<address>',
    category: 'semantic',
    description: 'Represents contact information for the author or owner of a document.',
    usage: 'Include author/business contact details.',
    example: '<address>Email: info@example.com</address>',
    attributes: ['id', 'class', 'style'],
  },
  {
    name: '<time>',
    category: 'semantic',
    description: 'Represents a specific time or date that can be encoded for machine reading.',
    usage: 'Mark dates and times with the datetime attribute.',
    example: '<time datetime="2024-05-14">May 14, 2024</time>',
    attributes: ['datetime', 'id', 'class'],
  },
  {
    name: '<mark>',
    category: 'text',
    description: 'Highlights or marks text for reference purposes.',
    usage: 'Highlight important text.',
    example: '<p>This is <mark>important</mark> text.</p>',
    attributes: ['id', 'class', 'style'],
  },

  // Form Tags
  {
    name: '<form>',
    category: 'form',
    description: 'Container for form elements used to collect user input.',
    usage: 'Wrap form controls and submit buttons.',
    example: '<form><input type="text"><button type="submit">Submit</button></form>',
    attributes: ['action', 'method', 'enctype', 'id', 'class'],
  },
  {
    name: '<input>',
    category: 'form',
    description: 'Interactive control for accepting user input (text, email, password, checkbox, radio, etc.).',
    usage: 'Collect various types of user input.',
    example: '<input type="email" placeholder="Enter email">',
    attributes: ['type', 'name', 'value', 'placeholder', 'required', 'disabled', 'readonly'],
  },
  {
    name: '<textarea>',
    category: 'form',
    description: 'Multi-line text input field for longer text entries.',
    usage: 'Collect multi-line user input like comments.',
    example: '<textarea rows="4" cols="50"></textarea>',
    attributes: ['name', 'rows', 'cols', 'placeholder', 'required', 'readonly'],
  },
  {
    name: '<select>',
    category: 'form',
    description: 'Dropdown list for selecting one or more options.',
    usage: 'Create dropdown menus.',
    example: '<select><option>Option 1</option><option>Option 2</option></select>',
    attributes: ['name', 'multiple', 'size', 'required'],
  },
  {
    name: '<option>',
    category: 'form',
    description: 'Individual option within a select dropdown.',
    usage: 'Define dropdown options.',
    example: '<option value="1">Choice 1</option>',
    attributes: ['value', 'selected', 'disabled'],
  },
  {
    name: '<label>',
    category: 'form',
    description: 'Associates text with form controls for better accessibility.',
    usage: 'Label form inputs.',
    example: '<label for="email">Email:</label><input id="email">',
    attributes: ['for', 'id', 'class'],
  },
  {
    name: '<button>',
    category: 'form',
    description: 'Clickable button that can submit forms or trigger actions.',
    usage: 'Create interactive buttons.',
    example: '<button type="submit">Click Me</button>',
    attributes: ['type', 'name', 'value', 'disabled', 'class'],
  },
  {
    name: '<fieldset>',
    category: 'form',
    description: 'Groups related form elements together.',
    usage: 'Organize form sections.',
    example: '<fieldset><legend>Contact</legend><input></fieldset>',
    attributes: ['id', 'class', 'disabled'],
  },
  {
    name: '<legend>',
    category: 'form',
    description: 'Provides a caption for fieldset elements.',
    usage: 'Label fieldset groups.',
    example: '<fieldset><legend>Preferences</legend>...</fieldset>',
    attributes: ['id', 'class'],
  },

  // Media Tags
  {
    name: '<img>',
    category: 'media',
    description: 'Embeds images in the page.',
    usage: 'Display images.',
    example: '<img src="image.jpg" alt="Description">',
    attributes: ['src', 'alt', 'width', 'height', 'srcset', 'sizes'],
  },
  {
    name: '<video>',
    category: 'media',
    description: 'Embeds video content with player controls.',
    usage: 'Play video files.',
    example: '<video controls><source src="video.mp4"></video>',
    attributes: ['src', 'controls', 'autoplay', 'loop', 'muted', 'width', 'height'],
  },
  {
    name: '<audio>',
    category: 'media',
    description: 'Embeds audio content with player controls.',
    usage: 'Play audio files.',
    example: '<audio controls><source src="audio.mp3"></audio>',
    attributes: ['src', 'controls', 'autoplay', 'loop', 'muted'],
  },
  {
    name: '<source>',
    category: 'media',
    description: 'Specifies media resources for video/audio elements.',
    usage: 'Provide multiple media formats.',
    example: '<video><source src="video.mp4" type="video/mp4"></video>',
    attributes: ['src', 'type', 'media'],
  },
  {
    name: '<canvas>',
    category: 'media',
    description: 'Container for graphics drawn with JavaScript.',
    usage: 'Draw graphics and animations.',
    example: '<canvas id="myCanvas" width="400" height="300"></canvas>',
    attributes: ['width', 'height', 'id', 'class'],
  },
  {
    name: '<svg>',
    category: 'media',
    description: 'Scalable vector graphics defined in XML.',
    usage: 'Display vector graphics.',
    example: '<svg><circle cx="50" cy="50" r="40"></circle></svg>',
    attributes: ['width', 'height', 'viewBox', 'id', 'class'],
  },
  {
    name: '<picture>',
    category: 'media',
    description: 'Container for multiple image sources for responsive images.',
    usage: 'Serve different images for different screens.',
    example: '<picture><source media="(max-width: 600px)" srcset="small.jpg"><img src="large.jpg"></picture>',
    attributes: ['id', 'class'],
  },

  // Structure Tags
  {
    name: '<div>',
    category: 'structure',
    description: 'Generic container for grouping content and applying styles.',
    usage: 'Group and style content blocks.',
    example: '<div class="container"><p>Content</p></div>',
    attributes: ['id', 'class', 'style', 'data-*'],
  },
  {
    name: '<span>',
    category: 'structure',
    description: 'Inline container for styling a portion of text or inline content.',
    usage: 'Style inline content.',
    example: '<p>This is <span class="highlight">important</span>.</p>',
    attributes: ['id', 'class', 'style'],
  },
  {
    name: '<h1>-<h6>',
    category: 'text',
    description: 'Heading levels from h1 (largest) to h6 (smallest).',
    usage: 'Structure document outline.',
    example: '<h1>Main Title</h1><h2>Subtitle</h2>',
    attributes: ['id', 'class', 'style'],
  },
  {
    name: '<p>',
    category: 'text',
    description: 'Paragraph of text.',
    usage: 'Wrap text content.',
    example: '<p>This is a paragraph.</p>',
    attributes: ['id', 'class', 'style'],
  },
  {
    name: '<ul>',
    category: 'structure',
    description: 'Unordered (bulleted) list.',
    usage: 'Create bulleted lists.',
    example: '<ul><li>Item 1</li><li>Item 2</li></ul>',
    attributes: ['id', 'class', 'style'],
  },
  {
    name: '<ol>',
    category: 'structure',
    description: 'Ordered (numbered) list.',
    usage: 'Create numbered lists.',
    example: '<ol><li>First</li><li>Second</li></ol>',
    attributes: ['id', 'class', 'start', 'reversed'],
  },
  {
    name: '<li>',
    category: 'structure',
    description: 'List item within ul or ol.',
    usage: 'Define list items.',
    example: '<ul><li>Item</li></ul>',
    attributes: ['id', 'class', 'style', 'value'],
  },
  {
    name: '<dl>',
    category: 'structure',
    description: 'Definition list for terms and definitions.',
    usage: 'Create definition lists.',
    example: '<dl><dt>Term</dt><dd>Definition</dd></dl>',
    attributes: ['id', 'class'],
  },
  {
    name: '<dt>',
    category: 'structure',
    description: 'Definition term in a definition list.',
    usage: 'Define term in definition list.',
    example: '<dl><dt>HTML</dt><dd>HyperText Markup Language</dd></dl>',
    attributes: ['id', 'class'],
  },
  {
    name: '<dd>',
    category: 'structure',
    description: 'Definition/description in a definition list.',
    usage: 'Define definition in definition list.',
    example: '<dl><dt>Web</dt><dd>Global information system</dd></dl>',
    attributes: ['id', 'class'],
  },
  {
    name: '<table>',
    category: 'structure',
    description: 'Displays data in rows and columns.',
    usage: 'Organize tabular data.',
    example: '<table><tr><td>Data</td></tr></table>',
    attributes: ['id', 'class', 'border'],
  },
  {
    name: '<tr>',
    category: 'structure',
    description: 'Table row.',
    usage: 'Define table rows.',
    example: '<tr><td>Cell</td></tr>',
    attributes: ['id', 'class'],
  },
  {
    name: '<td>',
    category: 'structure',
    description: 'Table data cell.',
    usage: 'Define table cells.',
    example: '<td>Data</td>',
    attributes: ['id', 'class', 'colspan', 'rowspan'],
  },
  {
    name: '<th>',
    category: 'structure',
    description: 'Table header cell (bold by default).',
    usage: 'Define table headers.',
    example: '<th>Header</th>',
    attributes: ['id', 'class', 'colspan', 'rowspan', 'scope'],
  },
  {
    name: '<thead>',
    category: 'structure',
    description: 'Groups header rows in a table.',
    usage: 'Organize table header.',
    example: '<table><thead><tr><th>Col</th></tr></thead></table>',
    attributes: ['id', 'class'],
  },
  {
    name: '<tbody>',
    category: 'structure',
    description: 'Groups body rows in a table.',
    usage: 'Organize table body.',
    example: '<table><tbody><tr><td>Data</td></tr></tbody></table>',
    attributes: ['id', 'class'],
  },
  {
    name: '<tfoot>',
    category: 'structure',
    description: 'Groups footer rows in a table.',
    usage: 'Organize table footer.',
    example: '<table><tfoot><tr><td>Total</td></tr></tfoot></table>',
    attributes: ['id', 'class'],
  },

  // Text Formatting
  {
    name: '<strong>',
    category: 'text',
    description: 'Indicates strong importance (renders as bold).',
    usage: 'Emphasize important text.',
    example: '<p>This is <strong>very important</strong>.</p>',
    attributes: ['id', 'class'],
  },
  {
    name: '<em>',
    category: 'text',
    description: 'Emphasis (renders as italic).',
    usage: 'Emphasize text.',
    example: '<p>This is <em>emphasized</em>.</p>',
    attributes: ['id', 'class'],
  },
  {
    name: '<code>',
    category: 'text',
    description: 'Represents computer code.',
    usage: 'Display code snippets.',
    example: '<p>Use <code>const x = 5;</code> to declare.</p>',
    attributes: ['id', 'class'],
  },
  {
    name: '<pre>',
    category: 'text',
    description: 'Preformatted text (preserves spaces and line breaks).',
    usage: 'Display code blocks.',
    example: '<pre><code>function hello() {\n  console.log("Hi");\n}</code></pre>',
    attributes: ['id', 'class'],
  },
  {
    name: '<a>',
    category: 'interactive',
    description: 'Hyperlink to another page or resource.',
    usage: 'Create links.',
    example: '<a href="https://example.com">Click here</a>',
    attributes: ['href', 'target', 'rel', 'title', 'id', 'class'],
  },
  {
    name: '<br>',
    category: 'text',
    description: 'Line break.',
    usage: 'Force line breaks.',
    example: '<p>Line 1<br>Line 2</p>',
    attributes: [],
  },
  {
    name: '<hr>',
    category: 'structure',
    description: 'Horizontal rule / thematic break.',
    usage: 'Separate content sections.',
    example: '<section>Content</section><hr><section>More</section>',
    attributes: ['id', 'class'],
  },
];

/* ============================================
   DOM METHODS REFERENCE
   ============================================ */

export const domMethods: DOMMethod[] = [
  // Element Selection
  {
    name: 'getElementById()',
    category: 'document',
    description: 'Returns the element with the specified ID.',
    syntax: 'document.getElementById(id)',
    example: 'const el = document.getElementById("myId");',
    returns: 'HTMLElement | null',
  },
  {
    name: 'querySelector()',
    category: 'document',
    description: 'Returns the first element matching a CSS selector.',
    syntax: 'element.querySelector(selector)',
    example: 'const el = document.querySelector(".myClass");',
    returns: 'HTMLElement | null',
  },
  {
    name: 'querySelectorAll()',
    category: 'document',
    description: 'Returns all elements matching a CSS selector.',
    syntax: 'element.querySelectorAll(selector)',
    example: 'const els = document.querySelectorAll(".item");',
    returns: 'NodeList',
  },
  {
    name: 'getElementsByClassName()',
    category: 'document',
    description: 'Returns all elements with the specified class name.',
    syntax: 'element.getElementsByClassName(className)',
    example: 'const els = document.getElementsByClassName("active");',
    returns: 'HTMLCollection',
  },
  {
    name: 'getElementsByTagName()',
    category: 'document',
    description: 'Returns all elements with the specified tag name.',
    syntax: 'element.getElementsByTagName(tagName)',
    example: 'const links = document.getElementsByTagName("a");',
    returns: 'HTMLCollection',
  },
  {
    name: 'getElementsByName()',
    category: 'document',
    description: 'Returns all elements with the specified name attribute.',
    syntax: 'document.getElementsByName(name)',
    example: 'const radios = document.getElementsByName("gender");',
    returns: 'NodeList',
  },

  // DOM Manipulation
  {
    name: 'createElement()',
    category: 'document',
    description: 'Creates a new HTML element.',
    syntax: 'document.createElement(tagName)',
    example: 'const div = document.createElement("div");',
    returns: 'HTMLElement',
  },
  {
    name: 'createTextNode()',
    category: 'document',
    description: 'Creates a new text node.',
    syntax: 'document.createTextNode(text)',
    example: 'const text = document.createTextNode("Hello");',
    returns: 'Text',
  },
  {
    name: 'appendChild()',
    category: 'node',
    description: 'Adds a child element to the end of the parent.',
    syntax: 'parent.appendChild(child)',
    example: 'document.body.appendChild(newDiv);',
    returns: 'HTMLElement',
  },
  {
    name: 'insertBefore()',
    category: 'node',
    description: 'Inserts a child element before a specified element.',
    syntax: 'parent.insertBefore(newChild, referenceChild)',
    example: 'parent.insertBefore(newEl, existingEl);',
    returns: 'HTMLElement',
  },
  {
    name: 'removeChild()',
    category: 'node',
    description: 'Removes a child element from the DOM.',
    syntax: 'parent.removeChild(child)',
    example: 'parent.removeChild(oldDiv);',
    returns: 'HTMLElement',
  },
  {
    name: 'replaceChild()',
    category: 'node',
    description: 'Replaces a child element with another.',
    syntax: 'parent.replaceChild(newChild, oldChild)',
    example: 'parent.replaceChild(newDiv, oldDiv);',
    returns: 'HTMLElement',
  },

  // Attribute Methods
  {
    name: 'getAttribute()',
    category: 'element',
    description: 'Gets the value of an attribute.',
    syntax: 'element.getAttribute(name)',
    example: 'const src = img.getAttribute("src");',
    returns: 'string | null',
  },
  {
    name: 'setAttribute()',
    category: 'element',
    description: 'Sets the value of an attribute.',
    syntax: 'element.setAttribute(name, value)',
    example: 'element.setAttribute("data-id", "123");',
    returns: 'undefined',
  },
  {
    name: 'removeAttribute()',
    category: 'element',
    description: 'Removes an attribute from an element.',
    syntax: 'element.removeAttribute(name)',
    example: 'element.removeAttribute("disabled");',
    returns: 'undefined',
  },
  {
    name: 'hasAttribute()',
    category: 'element',
    description: 'Checks if an element has an attribute.',
    syntax: 'element.hasAttribute(name)',
    example: 'if (input.hasAttribute("required")) { ... }',
    returns: 'boolean',
  },

  // Class Methods
  {
    name: 'classList.add()',
    category: 'element',
    description: 'Adds a class to an element.',
    syntax: 'element.classList.add(className)',
    example: 'element.classList.add("active", "highlighted");',
    returns: 'undefined',
  },
  {
    name: 'classList.remove()',
    category: 'element',
    description: 'Removes a class from an element.',
    syntax: 'element.classList.remove(className)',
    example: 'element.classList.remove("inactive");',
    returns: 'undefined',
  },
  {
    name: 'classList.toggle()',
    category: 'element',
    description: 'Toggles a class on/off.',
    syntax: 'element.classList.toggle(className)',
    example: 'element.classList.toggle("hidden");',
    returns: 'boolean',
  },
  {
    name: 'classList.contains()',
    category: 'element',
    description: 'Checks if element has a class.',
    syntax: 'element.classList.contains(className)',
    example: 'if (element.classList.contains("active")) { ... }',
    returns: 'boolean',
  },

  // Content Methods
  {
    name: 'innerHTML',
    category: 'element',
    description: 'Gets or sets the HTML content of an element.',
    syntax: 'element.innerHTML = "HTML content"',
    example: 'div.innerHTML = "<p>Hello <strong>World</strong></p>";',
    returns: 'string',
  },
  {
    name: 'textContent',
    category: 'element',
    description: 'Gets or sets the text content of an element.',
    syntax: 'element.textContent = "text"',
    example: 'paragraph.textContent = "New text";',
    returns: 'string',
  },
  {
    name: 'innerText',
    category: 'element',
    description: 'Gets or sets the rendered text content.',
    syntax: 'element.innerText = "text"',
    example: 'paragraph.innerText = "Visible text";',
    returns: 'string',
  },

  // Event Methods
  {
    name: 'addEventListener()',
    category: 'event',
    description: 'Attaches an event listener to an element.',
    syntax: 'element.addEventListener(event, callback)',
    example: 'button.addEventListener("click", (e) => { ... });',
    returns: 'undefined',
  },
  {
    name: 'removeEventListener()',
    category: 'event',
    description: 'Removes an event listener from an element.',
    syntax: 'element.removeEventListener(event, callback)',
    example: 'button.removeEventListener("click", handleClick);',
    returns: 'undefined',
  },
  {
    name: 'dispatchEvent()',
    category: 'event',
    description: 'Triggers a custom event on an element.',
    syntax: 'element.dispatchEvent(event)',
    example: 'element.dispatchEvent(new Event("customEvent"));',
    returns: 'boolean',
  },

  // Style Methods
  {
    name: 'getComputedStyle()',
    category: 'document',
    description: 'Gets the computed CSS styles of an element.',
    syntax: 'window.getComputedStyle(element)',
    example: 'const color = getComputedStyle(el).color;',
    returns: 'CSSStyleDeclaration',
  },
  {
    name: 'style property',
    category: 'element',
    description: 'Gets or sets inline styles.',
    syntax: 'element.style.propertyName = value',
    example: 'element.style.color = "red"; element.style.display = "none";',
    returns: 'CSSStyleDeclaration',
  },
];

/* ============================================
   CSS PROPERTIES REFERENCE
   ============================================ */

export const cssProperties: CSSProperty[] = [
  // Layout - Flexbox
  {
    name: 'display: flex',
    category: 'layout',
    description: 'Enables flexbox layout for flexible, responsive layouts.',
    syntax: 'display: flex;',
    values: ['flex', 'inline-flex'],
    example: '.container { display: flex; gap: 10px; }',
  },
  {
    name: 'flex-direction',
    category: 'layout',
    description: 'Defines the direction of flex items (row or column).',
    syntax: 'flex-direction: row | column | row-reverse | column-reverse;',
    values: ['row', 'column', 'row-reverse', 'column-reverse'],
    example: '.container { display: flex; flex-direction: column; }',
  },
  {
    name: 'justify-content',
    category: 'layout',
    description: 'Aligns flex items along the main axis.',
    syntax: 'justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly;',
    values: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    example: '.container { justify-content: center; }',
  },
  {
    name: 'align-items',
    category: 'layout',
    description: 'Aligns flex items along the cross axis.',
    syntax: 'align-items: flex-start | center | flex-end | stretch | baseline;',
    values: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    example: '.container { align-items: center; }',
  },
  {
    name: 'flex',
    category: 'layout',
    description: 'Shorthand for flex-grow, flex-shrink, and flex-basis.',
    syntax: 'flex: flex-grow flex-shrink flex-basis;',
    example: '.item { flex: 1; /* grows equally */ }',
  },
  {
    name: 'gap',
    category: 'layout',
    description: 'Sets the gap between flex/grid items.',
    syntax: 'gap: size;',
    example: '.container { display: flex; gap: 20px; }',
  },

  // Layout - Grid
  {
    name: 'display: grid',
    category: 'layout',
    description: 'Enables CSS grid layout for 2D layouts.',
    syntax: 'display: grid;',
    example: '.grid { display: grid; grid-template-columns: 1fr 1fr 1fr; }',
  },
  {
    name: 'grid-template-columns',
    category: 'layout',
    description: 'Defines the column tracks of a grid.',
    syntax: 'grid-template-columns: size | fr | repeat();',
    example: '.grid { grid-template-columns: 1fr 2fr 1fr; }',
  },
  {
    name: 'grid-template-rows',
    category: 'layout',
    description: 'Defines the row tracks of a grid.',
    syntax: 'grid-template-rows: size | fr;',
    example: '.grid { grid-template-rows: auto 1fr auto; }',
  },
  {
    name: 'grid-auto-flow',
    category: 'layout',
    description: 'Controls how grid items are placed automatically.',
    syntax: 'grid-auto-flow: row | column | dense;',
    values: ['row', 'column', 'dense'],
    example: '.grid { grid-auto-flow: column; }',
  },
  {
    name: 'grid-column / grid-row',
    category: 'layout',
    description: 'Positions grid items across columns or rows.',
    syntax: 'grid-column: start / end; grid-row: start / end;',
    example: '.item { grid-column: 1 / 3; /* spans 2 columns */ }',
  },

  // Positioning
  {
    name: 'position',
    category: 'positioning',
    description: 'Defines how an element is positioned in the document.',
    syntax: 'position: static | relative | absolute | fixed | sticky;',
    values: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    example: '.header { position: sticky; top: 0; }',
  },
  {
    name: 'top / right / bottom / left',
    category: 'positioning',
    description: 'Offsets positioned elements.',
    syntax: 'top: size; right: size; bottom: size; left: size;',
    example: '.absolute { position: absolute; top: 20px; right: 10px; }',
  },
  {
    name: 'z-index',
    category: 'positioning',
    description: 'Controls the stacking order of positioned elements.',
    syntax: 'z-index: number;',
    example: '.modal { position: fixed; z-index: 1000; }',
  },

  // Sizing
  {
    name: 'width / height',
    category: 'sizing',
    description: 'Sets the width and height of an element.',
    syntax: 'width: size; height: size;',
    example: '.box { width: 300px; height: 200px; }',
  },
  {
    name: 'max-width / max-height',
    category: 'sizing',
    description: 'Sets the maximum width/height.',
    syntax: 'max-width: size; max-height: size;',
    example: 'img { max-width: 100%; height: auto; }',
  },
  {
    name: 'min-width / min-height',
    category: 'sizing',
    description: 'Sets the minimum width/height.',
    syntax: 'min-width: size; min-height: size;',
    example: '.button { min-width: 100px; min-height: 40px; }',
  },
  {
    name: 'padding',
    category: 'sizing',
    description: 'Sets internal spacing (inside borders).',
    syntax: 'padding: top right bottom left;',
    example: '.box { padding: 20px; /* all sides */ }',
  },
  {
    name: 'margin',
    category: 'sizing',
    description: 'Sets external spacing (outside borders).',
    syntax: 'margin: top right bottom left;',
    example: '.box { margin: 10px 20px; /* vertical horizontal */ }',
  },
  {
    name: 'border',
    category: 'border',
    description: 'Sets border width, style, and color.',
    syntax: 'border: width style color;',
    example: '.box { border: 2px solid #333; }',
  },
  {
    name: 'border-radius',
    category: 'border',
    description: 'Rounds the corners of an element.',
    syntax: 'border-radius: size;',
    example: '.box { border-radius: 8px; }',
  },

  // Colors & Backgrounds
  {
    name: 'color',
    category: 'color',
    description: 'Sets the text color.',
    syntax: 'color: color-value;',
    example: '.text { color: #333; }',
  },
  {
    name: 'background-color',
    category: 'color',
    description: 'Sets the background color.',
    syntax: 'background-color: color-value;',
    example: '.box { background-color: rgba(255, 0, 0, 0.5); }',
  },
  {
    name: 'background-image',
    category: 'color',
    description: 'Sets a background image.',
    syntax: 'background-image: url();',
    example: '.hero { background-image: url("bg.jpg"); }',
  },
  {
    name: 'background: linear-gradient()',
    category: 'color',
    description: 'Creates a linear gradient background.',
    syntax: 'background: linear-gradient(direction, color1, color2);',
    example: '.gradient { background: linear-gradient(90deg, red, blue); }',
  },
  {
    name: 'background: radial-gradient()',
    category: 'color',
    description: 'Creates a radial gradient background.',
    syntax: 'background: radial-gradient(shape, color1, color2);',
    example: '.circle { background: radial-gradient(circle, yellow, red); }',
  },
  {
    name: 'opacity',
    category: 'color',
    description: 'Sets the transparency of an element (0-1).',
    syntax: 'opacity: 0-1;',
    example: '.transparent { opacity: 0.5; }',
  },

  // Text Styling
  {
    name: 'font-family',
    category: 'text',
    description: 'Sets the font typeface.',
    syntax: 'font-family: "Font Name", generic-family;',
    example: 'body { font-family: "Segoe UI", sans-serif; }',
  },
  {
    name: 'font-size',
    category: 'text',
    description: 'Sets the text size.',
    syntax: 'font-size: size;',
    example: '.heading { font-size: 32px; }',
  },
  {
    name: 'font-weight',
    category: 'text',
    description: 'Sets the text thickness (100-900).',
    syntax: 'font-weight: 100-900 | normal | bold;',
    example: '.bold { font-weight: 700; }',
  },
  {
    name: 'line-height',
    category: 'text',
    description: 'Sets the height of a text line.',
    syntax: 'line-height: size | number;',
    example: '.text { line-height: 1.6; }',
  },
  {
    name: 'letter-spacing',
    category: 'text',
    description: 'Sets space between characters.',
    syntax: 'letter-spacing: size;',
    example: '.spaced { letter-spacing: 2px; }',
  },
  {
    name: 'text-align',
    category: 'text',
    description: 'Aligns text horizontally.',
    syntax: 'text-align: left | center | right | justify;',
    example: '.center { text-align: center; }',
  },
  {
    name: 'text-decoration',
    category: 'text',
    description: 'Adds underline, overline, or line-through.',
    syntax: 'text-decoration: underline | overline | line-through;',
    example: '.underline { text-decoration: underline; }',
  },
  {
    name: 'text-transform',
    category: 'text',
    description: 'Transforms text case.',
    syntax: 'text-transform: uppercase | lowercase | capitalize;',
    example: '.uppercase { text-transform: uppercase; }',
  },

  // Shadows
  {
    name: 'box-shadow',
    category: 'shadow',
    description: 'Adds shadow effects around an element.',
    syntax: 'box-shadow: offsetX offsetY blurRadius spreadRadius color;',
    example: '.shadow { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); }',
  },
  {
    name: 'text-shadow',
    category: 'shadow',
    description: 'Adds shadow to text.',
    syntax: 'text-shadow: offsetX offsetY blurRadius color;',
    example: '.shadow-text { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); }',
  },

  // Transforms
  {
    name: 'transform: translate()',
    category: 'transform',
    description: 'Moves an element along X and Y axes.',
    syntax: 'transform: translate(x, y);',
    example: '.moved { transform: translate(20px, 10px); }',
  },
  {
    name: 'transform: rotate()',
    category: 'transform',
    description: 'Rotates an element by degrees or radians.',
    syntax: 'transform: rotate(angle);',
    example: '.rotated { transform: rotate(45deg); }',
  },
  {
    name: 'transform: scale()',
    category: 'transform',
    description: 'Scales an element.',
    syntax: 'transform: scale(x, y);',
    example: '.scaled { transform: scale(1.5); }',
  },
  {
    name: 'transform: skew()',
    category: 'transform',
    description: 'Skews an element.',
    syntax: 'transform: skew(x, y);',
    example: '.skewed { transform: skew(10deg, 5deg); }',
  },
  {
    name: 'transform-origin',
    category: 'transform',
    description: 'Sets the origin point for transforms.',
    syntax: 'transform-origin: x y;',
    example: '.origin { transform-origin: center; transform: rotate(45deg); }',
  },
  {
    name: 'perspective',
    category: 'transform',
    description: 'Creates 3D perspective for child elements.',
    syntax: 'perspective: depth;',
    example: '.container { perspective: 1000px; }',
  },

  // Animations & Transitions
  {
    name: 'transition',
    category: 'animation',
    description: 'Animates property changes smoothly.',
    syntax: 'transition: property duration timing-function delay;',
    example: '.button { transition: background 0.3s ease; }',
  },
  {
    name: 'animation',
    category: 'animation',
    description: 'Applies a keyframe animation.',
    syntax: 'animation: name duration timing-function delay iteration-count;',
    example: '.bounce { animation: bounce 1s ease-in-out infinite; }',
  },
  {
    name: '@keyframes',
    category: 'animation',
    description: 'Defines animation keyframes.',
    syntax: '@keyframes name { from {} to {} }',
    example: '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }',
  },

  // Responsive & Advanced
  {
    name: '@media',
    category: 'layout',
    description: 'Applies styles based on media query conditions.',
    syntax: '@media (condition) { /* styles */ }',
    example: '@media (max-width: 768px) { .container { flex-direction: column; } }',
  },
  {
    name: 'cursor',
    category: 'styling',
    description: 'Changes the cursor appearance.',
    syntax: 'cursor: pointer | default | text | wait | etc;',
    example: '.clickable { cursor: pointer; }',
  },
  {
    name: 'overflow',
    category: 'styling',
    description: 'Controls overflow content behavior.',
    syntax: 'overflow: visible | hidden | scroll | auto;',
    example: '.box { overflow: auto; height: 200px; }',
  },
  {
    name: 'filter',
    category: 'styling',
    description: 'Applies visual effects like blur, brightness, contrast.',
    syntax: 'filter: blur() | brightness() | contrast() | saturate();',
    example: '.blurred { filter: blur(5px); }',
  },
  {
    name: 'object-fit',
    category: 'sizing',
    description: 'Controls how media fills its container.',
    syntax: 'object-fit: fill | contain | cover | scale-down;',
    example: 'img { object-fit: cover; width: 300px; height: 300px; }',
  },
];
