import React from 'react';
import cn from 'classnames';

import './icon.scss';

type TIcon = {
  name?: string;
  className?: string;
  size?: number;
  onClick?: any;
  disabled?: boolean;
  id?: string;
  [x: string]: any
};

const Icon = ({
  name,
  className,
  onClick,
  size,
  disabled,
  id,
  ...attrs
}: TIcon) => {
  const elemSize: any = size ? { fontSize: `${size}px` } : null;
  const classes = cn(
    `icon-${name}`,
    className,
    { func: onClick },
    { disabled },
  );
  return (
    <i
      {...attrs}
      id={id}
      style={elemSize}
      className={classes}
      onClick={disabled ? null : onClick}
    />
  );
};

Icon.defaultProps = {
  name: '',
  className: '',
  size: null,
  onClick: null,
  disabled: false,
};

export default Icon;
