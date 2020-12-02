import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './TabBarItem.scss';

const TabBarItem = ({ children, label, activeTab, ...attrs }: any) => {
  const classes = cn('tab-bar-item', { active: activeTab === label });
  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

TabBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  activeTab: PropTypes.string,
};

TabBarItem.defaultProps = {
  children: null,
  activeTab: null,
};

export default TabBarItem;
