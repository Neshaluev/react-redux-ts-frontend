import React from 'react';
import ReactQuill from 'react-quill';
import showdown from 'showdown';
import _ from 'lodash';

import EditorToolbar, { modules, formats } from './EditorToolbar';

import 'react-quill/dist/quill.snow.css';

import './Editor.scss';

type TPropsEditor = {
  deascriptionData?: string
  getValueEditor: (...arg: any) => any
}

export const Editor = ({ getValueEditor, deascriptionData }: TPropsEditor) => {
  const converter = new showdown.Converter();
  const [state, setState] = React.useState<any>({ value: null });

  const handleChange = _.debounce((value: any) => {
    setState({ value });
    getValueEditor(converter.makeMarkdown(value));
  }, 300);

  React.useEffect(() => {
    if (deascriptionData) {
      const value = converter.makeHtml(deascriptionData);
      setState({ value });
    }
  }, [deascriptionData]);

  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={'Enter text..'}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

Editor.defaultProps = {
  getValueEditor: () => {},
  deascriptionData: '',
};

export default Editor;
