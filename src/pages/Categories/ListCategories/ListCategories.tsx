import React from 'react';

import Category from './Category/Category';

function ListCategories({ categories }: any) {
  return (
    <div className="categories">
      {categories.map((data: any, idx: any) => (
        <Category key={idx} {...data} />
      ))}
    </div>
  );
}

ListCategories.defaultProps = {
  categories: []
}

export default ListCategories;
