import React from 'react';

import './layout.scss';

type TLayout = {
  children: React.ReactNode
}

function Layout({ children }: TLayout ) {
  return (
    <div className="container">
      <div className="control-panel">{children}</div>
    </div>
  );
}

export default Layout;
