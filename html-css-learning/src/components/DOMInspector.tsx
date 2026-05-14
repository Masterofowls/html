import React, { useState } from 'react';
import type { JSX } from 'react';
import '../styles/dom-inspector.css';

interface DOMNode {
  tag: string;
  attributes: Record<string, string>;
  children: DOMNode[];
}

export const DOMInspector: React.FC<{ html: string }> = ({ html }) => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['root']));

  const parseHTML = (htmlString: string): DOMNode => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return parseDOMNode(doc.body);
  };

  const parseDOMNode = (node: Node): DOMNode => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      return {
        tag: element.tagName.toLowerCase(),
        attributes: Array.from(element.attributes).reduce(
          (acc, attr) => {
            acc[attr.name] = attr.value;
            return acc;
          },
          {} as Record<string, string>
        ),
        children: Array.from(node.childNodes)
          .filter((child) => child.nodeType === Node.ELEMENT_NODE)
          .map(parseDOMNode),
      };
    }
    return { tag: 'text', attributes: {}, children: [] };
  };

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const domTree = parseHTML(html);

  const renderNode = (node: DOMNode, id: string, level: number): JSX.Element => {
    const hasChildren = node.children.length > 0;
    const isExpanded = expandedNodes.has(id);

    return (
      <div key={id} className="dom-node" style={{ paddingLeft: `${level * 20}px` }}>
        <div
          className="dom-node-header"
          onClick={() => hasChildren && toggleNode(id)}
        >
          {hasChildren && (
            <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
              ▶
            </span>
          )}
          {!hasChildren && <span className="expand-icon placeholder">•</span>}
          <span className="tag-name">&lt;{node.tag}&gt;</span>
          {Object.entries(node.attributes).map(([key, value]) => (
            <span key={key} className="attribute">
              {' '}
              <span className="attr-name">{key}</span>="<span className="attr-value">{value}</span>"
            </span>
          ))}
        </div>
        {hasChildren && isExpanded && (
          <div className="dom-node-children">
            {node.children.map((child, idx) =>
              renderNode(child, `${id}-${idx}`, level + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="dom-inspector">
      <h3>DOM Tree</h3>
      <div className="dom-tree">{renderNode(domTree, 'root', 0)}</div>
    </div>
  );
};
