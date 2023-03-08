import React from 'react';

interface ParagraphAppProps {
  text: string;
}

const ParagraphApp: React.FC<ParagraphAppProps> = ({ text }) => {
  return (
    <React.Fragment>
      <p>{text}</p>
    </React.Fragment>
  );
};

export default ParagraphApp;