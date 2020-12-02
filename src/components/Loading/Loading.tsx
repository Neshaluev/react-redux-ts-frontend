import React from 'react';

import './loading.scss';

const Loading = () => {
  return (
    <div className="content-loader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
