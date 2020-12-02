import React, { useEffect } from 'react';
import { useState } from 'react';
import cn from 'classnames';

import './TabBar.scss';
import TabBarNav from './TabNav/TabBarNav';

type TPropsTabBar = {
  children: Element[];
  className: string,
  vertical: boolean,
  [x: string]: any
}

function TabBar({ children, className, vertical, ...attrs }: any) {
  const [activeTab, setActiveTab] = useState<string| null>(null);
  const classes = cn('tab-bar', className, { vertical });

  const getChildrenLabels = (children: any) => {
    return children.map(({ props }: any) => props.label);
  };

  const handleSetActiveTab = (currentTab: any) => {
    if (currentTab !== activeTab) {
      setActiveTab(currentTab);
    }
  };

  const renderTabs = () => {
    return getChildrenLabels(children).map((navLabel: any) => (
      <TabBarNav
        key={navLabel}
        navLabel={navLabel}
        className={cn({ active: activeTab === navLabel })}
        onChangeActiveTab={setActiveTab}
      />
    ));
  };

  useEffect(() => {
    handleSetActiveTab(getChildrenLabels(children)[0]);
  }, []);

  return (
    <div className={classes} {...attrs}>
      <div className="tab-bar-nav">{renderTabs()}</div>
      <div className="tab-container">
        {React.Children.map(children, (child: any) =>
          React.cloneElement(child, { activeTab }),
        )}
      </div>
    </div>
  );
}

TabBar.propTypes = {
  children: null,
  className: '',
  vertical: false,
};

export default TabBar;
