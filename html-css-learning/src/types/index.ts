/* TypeScript types and interfaces */

export interface Lesson {
  id: string;
  title: string;
  category: 'html' | 'css' | 'advanced';
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  htmlCode: string;
  cssCode: string;
  explanation: string;
  tags: string[];
  examples: Example[];
}

export interface Example {
  id: string;
  title: string;
  html: string;
  css: string;
  description: string;
}

export interface EditorState {
  html: string;
  css: string;
  javascript: string;
}

export interface ColorInfo {
  hex: string;
  rgb: string;
  hsl: string;
  name?: string;
}

export interface DOMElement {
  tag: string;
  attributes?: Record<string, string>;
  children?: DOMElement[];
  text?: string;
}

export interface CodeSnippet {
  id: string;
  title: string;
  language: 'html' | 'css' | 'javascript';
  code: string;
  description: string;
  category: string;
}
