import React from 'react';
import type { Lesson } from '../types/index';
import '../styles/lesson-card.css';

interface LessonCardProps {
  lesson: Lesson;
  isActive: boolean;
  onClick: () => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, isActive, onClick }) => {
  return (
    <div className={`lesson-card ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="lesson-card-header">
        <h4>{lesson.title}</h4>
        <span className={`level-badge ${lesson.level}`}>{lesson.level}</span>
      </div>
      <p className="lesson-description">{lesson.description}</p>
      <div className="lesson-tags">
        {lesson.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
