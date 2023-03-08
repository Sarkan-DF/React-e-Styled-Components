import React from 'react';

interface TitleH3AppProps {
  text: string;
}

const TitleH3App: React.FC<TitleH3AppProps> = ({ text}) => {
  return (
    <>
      <h3>{text}</h3>
    </>
  );
};

export default TitleH3App;