import React, { useState, useMemo } from 'react';
import {
  htmlTags,
  domMethods,
  cssProperties,
} from '../data/reference';
import '../styles/catalogue.css';

type CatalogueTab = 'html' | 'dom' | 'css';
type FilterCategory = 'all' | string;

export const Catalogue: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CatalogueTab>('html');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<FilterCategory>('all');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // HTML Tags filtering
  const htmlTagCategories = Array.from(new Set(htmlTags.map((tag) => tag.category)));
  const filteredHTMLTags = useMemo(() => {
    return htmlTags.filter((tag) => {
      const matchesSearch =
        tag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tag.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || tag.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, filterCategory]);

  // DOM Methods filtering
  const domCategories = Array.from(new Set(domMethods.map((m) => m.category)));
  const filteredDOMMethods = useMemo(() => {
    return domMethods.filter((method) => {
      const matchesSearch =
        method.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        method.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || method.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, filterCategory]);

  // CSS Properties filtering
  const cssCategories = Array.from(new Set(cssProperties.map((prop) => prop.category)));
  const filteredCSSProperties = useMemo(() => {
    return cssProperties.filter((prop) => {
      const matchesSearch =
        prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || prop.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, filterCategory]);

  const getCategories = () => {
    switch (activeTab) {
      case 'html':
        return htmlTagCategories;
      case 'dom':
        return domCategories;
      case 'css':
        return cssCategories;
      default:
        return [];
    }
  };

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="catalogue-container">
      <div className="catalogue-header">
        <h2>📚 Reference Catalogue</h2>
        <p>Complete HTML tags, DOM methods, and CSS properties with definitions and examples</p>
      </div>

      {/* Tabs */}
      <div className="catalogue-tabs">
        <button
          className={`tab-button ${activeTab === 'html' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('html');
            setFilterCategory('all');
            setSearchTerm('');
          }}
        >
          HTML Tags ({htmlTags.length})
        </button>
        <button
          className={`tab-button ${activeTab === 'dom' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('dom');
            setFilterCategory('all');
            setSearchTerm('');
          }}
        >
          DOM Methods ({domMethods.length})
        </button>
        <button
          className={`tab-button ${activeTab === 'css' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('css');
            setFilterCategory('all');
            setSearchTerm('');
          }}
        >
          CSS Properties ({cssProperties.length})
        </button>
      </div>

      {/* Search & Filter */}
      <div className="catalogue-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder={`Search ${activeTab === 'html' ? 'tags' : activeTab === 'dom' ? 'methods' : 'properties'}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button
              className="clear-search"
              onClick={() => setSearchTerm('')}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className="filter-box">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Categories</option>
            {getCategories().map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Content */}
      <div className="catalogue-content">
        {activeTab === 'html' && (
          <div className="items-list">
            {filteredHTMLTags.length > 0 ? (
              filteredHTMLTags.map((tag) => (
                <div
                  key={tag.name}
                  className="item-card"
                  onClick={() => toggleItem(tag.name)}
                >
                  <div className="item-header">
                    <div className="item-title">
                      <code className="item-name">{tag.name}</code>
                      <span className="item-category">{tag.category}</span>
                    </div>
                    <span className={`item-toggle ${expandedItem === tag.name ? 'open' : ''}`}>
                      ▼
                    </span>
                  </div>

                  <p className="item-description">{tag.description}</p>

                  {expandedItem === tag.name && (
                    <div className="item-details">
                      <div className="detail-section">
                        <strong>Usage:</strong>
                        <p>{tag.usage}</p>
                      </div>

                      <div className="detail-section">
                        <strong>Example:</strong>
                        <pre className="code-example">{tag.example}</pre>
                      </div>

                      {tag.attributes && tag.attributes.length > 0 && (
                        <div className="detail-section">
                          <strong>Common Attributes:</strong>
                          <div className="attributes-list">
                            {tag.attributes.map((attr) => (
                              <code key={attr} className="attribute-tag">
                                {attr}
                              </code>
                            ))}
                          </div>
                        </div>
                      )}

                      {tag.deprecated && (
                        <div className="deprecated-notice">
                          ⚠️ This tag is deprecated and should not be used.
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No HTML tags found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'dom' && (
          <div className="items-list">
            {filteredDOMMethods.length > 0 ? (
              filteredDOMMethods.map((method) => (
                <div
                  key={method.name}
                  className="item-card"
                  onClick={() => toggleItem(method.name)}
                >
                  <div className="item-header">
                    <div className="item-title">
                      <code className="item-name">{method.name}</code>
                      <span className="item-category">{method.category}</span>
                    </div>
                    <span className={`item-toggle ${expandedItem === method.name ? 'open' : ''}`}>
                      ▼
                    </span>
                  </div>

                  <p className="item-description">{method.description}</p>

                  {expandedItem === method.name && (
                    <div className="item-details">
                      <div className="detail-section">
                        <strong>Syntax:</strong>
                        <pre className="code-example">{method.syntax}</pre>
                      </div>

                      <div className="detail-section">
                        <strong>Example:</strong>
                        <pre className="code-example">{method.example}</pre>
                      </div>

                      {method.returns && (
                        <div className="detail-section">
                          <strong>Returns:</strong>
                          <code className="return-type">{method.returns}</code>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No DOM methods found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'css' && (
          <div className="items-list">
            {filteredCSSProperties.length > 0 ? (
              filteredCSSProperties.map((prop) => (
                <div
                  key={prop.name}
                  className="item-card"
                  onClick={() => toggleItem(prop.name)}
                >
                  <div className="item-header">
                    <div className="item-title">
                      <code className="item-name">{prop.name}</code>
                      <span className="item-category">{prop.category}</span>
                    </div>
                    <span className={`item-toggle ${expandedItem === prop.name ? 'open' : ''}`}>
                      ▼
                    </span>
                  </div>

                  <p className="item-description">{prop.description}</p>

                  {expandedItem === prop.name && (
                    <div className="item-details">
                      <div className="detail-section">
                        <strong>Syntax:</strong>
                        <pre className="code-example">{prop.syntax}</pre>
                      </div>

                      {prop.values && prop.values.length > 0 && (
                        <div className="detail-section">
                          <strong>Common Values:</strong>
                          <div className="values-list">
                            {prop.values.map((val) => (
                              <code key={val} className="value-tag">
                                {val}
                              </code>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="detail-section">
                        <strong>Example:</strong>
                        <pre className="code-example">{prop.example}</pre>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No CSS properties found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Results Summary */}
      <div className="catalogue-footer">
        <p>
          {activeTab === 'html' &&
            `Showing ${filteredHTMLTags.length} of ${htmlTags.length} HTML tags`}
          {activeTab === 'dom' &&
            `Showing ${filteredDOMMethods.length} of ${domMethods.length} DOM methods`}
          {activeTab === 'css' &&
            `Showing ${filteredCSSProperties.length} of ${cssProperties.length} CSS properties`}
        </p>
      </div>
    </div>
  );
};
