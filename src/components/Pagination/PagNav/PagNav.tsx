import React, { useState } from 'react';
import Icon from '../../Icon/Icon';

import './PagNav.scss';

type TPropsNav = {
  maxPosts: number | undefined | null,
  paginate: (...args: any) => any,
  currentPage: number,
  limitItemPage: number
}

const PagNav = ({ maxPosts, limitItemPage, paginate, currentPage }: TPropsNav) => {
  const [activeItem, setActiveItem] = useState<any>(currentPage);
  const itemsNav: any = [];
  //@ts-ignore
  const totalPosts = Math.ceil(maxPosts / limitItemPage);
  for (let i = 1; i <= totalPosts; i++) {
    itemsNav.push(i);
  }
  const handleActiveNavigate = (item: any) => {
    setActiveItem(item);
    paginate(item);
  };
  return (
    <ul className="pagination--list">
      <Icon
        className="pagination--list__button"
        onClick={() => paginate(currentPage !== 1 ? currentPage - 1 : 1)}
        name={'arrow-left'}
        size={20}
      />
      {itemsNav.map((item: any) => (
        <li className="pagination--list__item" key={item}>
          <span
            className={`pagination--list__item-number ${
              item === activeItem ? 'active' : ''
            } `}
            onClick={() => handleActiveNavigate(item)}
          >
            {item}
          </span>
        </li>
      ))}
      <Icon
        className="pagination--list__button"
        onClick={() =>
          paginate(currentPage !== totalPosts ? currentPage + 1 : totalPosts)
        }
        name={'arrow-right'}
        size={20}
      />
    </ul>
  );
};

PagNav.defaultProps = {
  maxPosts: 1,
  limitItemPage: 1,
  paginate: () => {},
  currentPage: 0
}

export default PagNav;
