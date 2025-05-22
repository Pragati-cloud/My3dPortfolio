import React from 'react'

export const Button1 = ({ text, className }) => {
  return (
    <a
      href="/assest/FinalResume.pdf"  // Make sure this path matches your project structure
      download
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button1;
