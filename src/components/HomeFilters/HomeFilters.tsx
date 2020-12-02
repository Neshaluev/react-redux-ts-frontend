import _ from 'lodash';
import React, { useCallback } from 'react';
import Icon from '../Icon/Icon';
import Search from '../Search/Search';
import Select from '../Select/SelectComponent';

import './HomeFilters.scss';

type TPropsHomeFilter = {
  title?: string,
  onSubmit?: () => void,
  handleFilter?: (...args: any) => void,
}

function HomeFilters({ title, onSubmit, handleFilter }: TPropsHomeFilter) {
  const sorting: string[] = ['name', 'title', 'description'];
  const order: string[] = ['asc', 'desc'];

  const handleSetFilters = (name: string, value: string) => {
    // @ts-ignore
    handleFilter({ name, value });
  };

  const handleSorting = (value: any) => {
    handleSetFilters('sort', value);
  };

  const handleOrder = (value: any) => {
    handleSetFilters('order', value);
  };

  const setTextFilter = (text: string) => handleSetFilters('search', text);

  const handleSearchDebounce = useCallback(
    _.debounce((text) => setTextFilter(text), 1000),
    [],
  );

  return (
    <>
      <div className="control-panel--top">
        <div className="control-panel--title">
          <h2 className="control-panel--title__text">{title}</h2>
        </div>
        <div className="control-panel--controller">
          <div className="controller--filter">
            <Select
              titleSelect={'Sorting'}
              options={sorting}
              handleCheckedSelect={handleSorting}
            />
          </div>
          <div className="controller--sort">
            <Select
              titleSelect={'Order'}
              options={order}
              handleCheckedSelect={handleOrder}
            />
          </div>
          <div className="controller--refresh">
            <span className="controller--refresh__text">RESET</span>
            <Icon
              className="controller--refresh__icon"
              name={'refresh'}
              size={22}
            />
          </div>
        </div>
      </div>
      <div className="control-panel--bottom">
        <div className="add-element" onClick={onSubmit}>
          <span className="add-element__decor"></span>
          <h2 className="add-element__title">Create</h2>
        </div>
        <div className="controller--search">
          <Search handleSearch={handleSearchDebounce} />
        </div>
      </div>
    </>
  );
}

HomeFilters.defaultProps = {
  title: '',
  onSubmit: () => {},
  handleFilter: () => {},
};

export default HomeFilters;
