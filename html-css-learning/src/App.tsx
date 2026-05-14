import React, { useState, useCallback } from 'react';
import { CodeEditor } from './components/CodeEditor';
import { Preview } from './components/Preview';
import { ColorPicker } from './components/ColorPicker';
import { DOMInspector } from './components/DOMInspector';
import { LessonCard } from './components/LessonCard';
import { Catalogue } from './components/Catalogue';
import { htmlLessons, cssLessons, advancedLessons } from './data/lessons';
import './styles/app.css';
import './styles/globals.css';

type Tab = 'editor' | 'tools' | 'catalogue';

function App() {
  const [activeLessonId, setActiveLessonId] = useState<string>('semantic-html-1');
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [cssCode, setCssCode] = useState<string>('');
  const [activeTab, setActiveTab] = useState<Tab>('editor');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const allLessons = [...htmlLessons, ...cssLessons, ...advancedLessons];
  const activeLesson = allLessons.find((l) => l.id === activeLessonId) || allLessons[0];

  // Initialize codes from lesson
  React.useEffect(() => {
    if (activeLesson) {
      setHtmlCode(activeLesson.htmlCode);
      setCssCode(activeLesson.cssCode);
    }
  }, [activeLessonId, activeLesson]);

  const handleSelectLesson = useCallback((id: string) => {
    setActiveLessonId(id);
    setActiveTab('editor');
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo-section">
            <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </button>
            <h1 className="app-title">
              <span className="title-html">&lt;HTML</span>
              <span className="title-css"> CSS&gt;</span>
            </h1>
            <span className="subtitle">Advanced Learning Platform</span>
          </div>
          <div className="header-info">
            <span className="lesson-counter">
              {allLessons.findIndex((l) => l.id === activeLessonId) + 1} / {allLessons.length}
            </span>
          </div>
        </div>
      </header>

      <div className="app-body">
        {/* Sidebar - Lessons Navigation */}
        <aside className={`app-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-content">
            {/* HTML Lessons */}
            <section className="lesson-section">
              <h3 className="section-title">HTML Fundamentals</h3>
              <div className="lesson-list">
                {htmlLessons.map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    isActive={activeLessonId === lesson.id}
                    onClick={() => handleSelectLesson(lesson.id)}
                  />
                ))}
              </div>
            </section>

            {/* CSS Lessons */}
            <section className="lesson-section">
              <h3 className="section-title">CSS Styling</h3>
              <div className="lesson-list">
                {cssLessons.map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    isActive={activeLessonId === lesson.id}
                    onClick={() => handleSelectLesson(lesson.id)}
                  />
                ))}
              </div>
            </section>

            {/* Advanced Lessons */}
            <section className="lesson-section">
              <h3 className="section-title">Advanced Topics</h3>
              <div className="lesson-list">
                {advancedLessons.map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    isActive={activeLessonId === lesson.id}
                    onClick={() => handleSelectLesson(lesson.id)}
                  />
                ))}
              </div>
            </section>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="app-main">
          {/* Lesson Header */}
          {activeLesson && (
            <div className="lesson-header">
              <div>
                <h2>{activeLesson.title}</h2>
                <p className="lesson-explanation">{activeLesson.explanation}</p>
              </div>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button
              className={`tab-button ${activeTab === 'editor' ? 'active' : ''}`}
              onClick={() => setActiveTab('editor')}
            >
              Interactive Editor
            </button>
            <button
              className={`tab-button ${activeTab === 'tools' ? 'active' : ''}`}
              onClick={() => setActiveTab('tools')}
            >
              Tools & Inspector
            </button>
            <button
              className={`tab-button ${activeTab === 'catalogue' ? 'active' : ''}`}
              onClick={() => setActiveTab('catalogue')}
            >
              Reference Catalogue
            </button>
          </div>

          {/* Editor Tab */}
          {activeTab === 'editor' && (
            <div className="editor-grid">
              {/* HTML Editor */}
              <div className="editor-section">
                <CodeEditor
                  language="html"
                  value={htmlCode}
                  onChange={setHtmlCode}
                  height="400px"
                />
              </div>

              {/* CSS Editor */}
              <div className="editor-section">
                <CodeEditor
                  language="css"
                  value={cssCode}
                  onChange={setCssCode}
                  height="400px"
                />
              </div>

              {/* Preview */}
              <div className="preview-section">
                <Preview html={htmlCode} css={cssCode} title="Live Preview" />
              </div>
            </div>
          )}

          {/* Tools Tab */}
          {activeTab === 'tools' && (
            <div className="tools-grid">
              <div className="tool-section">
                <ColorPicker />
              </div>
              <div className="tool-section">
                <DOMInspector html={htmlCode} />
              </div>
            </div>
          )}

          {/* Catalogue Tab */}
          {activeTab === 'catalogue' && <Catalogue />}
        </main>
      </div>
    </div>
  );
}

export default App;
