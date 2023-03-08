import React from 'react';

interface TitleAppProps {
  text: string;
}

const TitleApp: React.FC<TitleAppProps> = ({ text}) => {
  return (
      <>
        <h1>{text}</h1>
        <br></br>
      </>
  );
};

export default TitleApp;
