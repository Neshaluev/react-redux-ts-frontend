import React from 'react';
import classnames from 'classnames';

import './button.scss';
import { SyntheticEvent } from 'react';

type TPropsButton = {
  children?: any,
  onClick?: () => void,
  className?: string,
  disabled?: boolean,
  active?: any,
  [x: string]: any
}

const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  ...attrs
}: TPropsButton) => {
  const onClickAction = (e: SyntheticEvent ) => {
    if (disabled) {
      e.preventDefault();
    } else {
       onClick();
    }
  };
  const classes = classnames('button', className, { active });
  const Tag = attrs.href ? 'a' : 'button';
  return (
    <Tag
      {...attrs}
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
    >
      {children}
    </Tag>
  );
};

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
  type: 'button',
};

export default Button;
