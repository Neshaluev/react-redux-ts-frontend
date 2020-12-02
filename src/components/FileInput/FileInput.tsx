import React, { useState } from 'react';
import Icon from '../Icon/Icon';

import './FileInput.scss';

type TFileInput = {
  name: string,
  error?: any,
  inputRef?: any,
  [x: string]: any
}

function FileInput({ name, inputRef, error, ...attrs }: TFileInput) {
  const [state, setState] = useState<any>('Upload Image');

  const handleFileInput = () => {
    if (!error) {
      setState('Image Loaded');
    }
  };

  return (
    <div className="file-input">
      <label htmlFor="file-upload" className="custom-file-upload">
        <Icon name={'cloud-upload'} />
        <span className="custom-file-upload__text">{state}</span>
      </label>
      <input
        {...attrs}
        name={name}
        id="file-upload"
        type="file"
        ref={inputRef}
        onChange={handleFileInput}
      />
      {error && <span className="file-upload-error"> {error.message}</span>}
    </div>
  );
}

FileInput.defautProps = {
  error: undefined,
  inputRef: null,
};

export default FileInput;
