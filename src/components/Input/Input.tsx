import React from 'react';
import cn from 'classnames';

import './input.scss';

type TPropsInput = {
  id?: string,
  className?: string,
  label?: string,
  inputRef?: any,
  error?: { [x: string]: any },
  [x: string]: any
}

const Input = ({ id, className, label, inputRef, error, ...attrs }: TPropsInput) => {
  const classes = cn('input', className, { error });
  return (
    <>
      <div className="input">
        <input
          name={id}
          id={id}
          className={classes}
          ref={inputRef}
          {...attrs}
          autoComplete="off"
          required
        />
        <label htmlFor={id} className="label-name">
          <span className="content-name">
            {label}
            {attrs.required && <span className="inputRequired">*</span>}
          </span>
        </label>
      </div>
      {error && <div className="error">{error.message}</div>}
    </>
  );
};

Input.defaultProps = {
  className: '',
  label: '',
  error: undefined,
  inputRef: null,
};

export default Input;
