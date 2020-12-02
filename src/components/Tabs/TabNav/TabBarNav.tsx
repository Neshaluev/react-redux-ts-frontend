import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './TabBarNav.scss';

const TabBarNav = ({ navLabel, className, onChangeActiveTab }: any) => {
  const classes = cn('nav-item', className);
  return (
    <button className={classes} onClick={() => onChangeActiveTab(navLabel)}>
      {navLabel}
    </button>
  );
};

TabBarNav.propTypes = {
  navLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeActiveTab: PropTypes.func,
};

TabBarNav.defaultProps = {
  navLabel: 'Tab',
  className: '',
  onChangeActiveTab: () => undefined,
};

export default TabBarNav;
