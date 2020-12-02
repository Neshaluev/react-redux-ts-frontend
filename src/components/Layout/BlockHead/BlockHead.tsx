import React from 'react';

type TBlockHead = {
  children: React.ReactNode
}

function BlockHead({ children }: TBlockHead) {
  return <div className="control-panel--header">{children}</div>;
}

export default BlockHead;
