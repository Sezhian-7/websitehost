import React from 'react';

interface ButtonProps {
  addclass?: string;
  btntext: string | undefined;
  OnClick?: any;
  onMouseOver?: any;
  onMouseOut?: any;
  onFocus?: any;
  onBlur?: any;
  datatipid?: string;
  datatitle?: string;
}

export const Button: React.FC<ButtonProps> = ({
  addclass,
  btntext,
  OnClick,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  datatipid,
  datatitle,
}) => {
  return (
    <>
      {btntext && (
        <button
          data-tip
          data-for={datatipid}
          onClick={OnClick}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`btn ${addclass}`}
          data-title={datatitle}
        >
          {btntext}
        </button>
      )}
    </>
  );
};
