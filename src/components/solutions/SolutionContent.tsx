// src/components/SolutionContent.tsx
import React from 'react';

type SolutionContentProps = {
  title: string;
  content: string;
};

const SolutionContent: React.FC<SolutionContentProps> = ({ title, content }) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

export default SolutionContent;
