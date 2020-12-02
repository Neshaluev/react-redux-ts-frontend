import React from 'react';

import './textarea.scss';

type TPropsTextarea = {
  name?: string,
  inputRef?: any, 
  error?: any,
  label?: string,
  id?: string,
  required?: boolean,
  [x:string]: any
}

function Textarea({
  name,
  inputRef,
  error,
  label,
  id,
  required,
  ...attrs
}: TPropsTextarea) {
  return (
    <>
      {error && <span className="textaria-error">{error.message}</span>}
      <textarea
        {...attrs}
        id={id}
        ref={inputRef}
        name={name}
        className="textaria"
      ></textarea>
    </>
  );
}

Textarea.defaultProps = {
 name: '', 
 inputRef: null,
 error: undefined,
 label: '',
 id: null,
 required: false
}

export default Textarea;
