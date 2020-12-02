import React, { useState } from 'react';
import Select from '../Select/SelectComponent';

import PagNav from './PagNav/PagNav';

import './Pagination.scss';

export type TPropsPagination = {
  maxPosts: number | undefined | null,
  handlePaginate: (...args: any) => void,
  page: number,
  limit: number,
}

function Pagination({ maxPosts, handlePaginate, page, limit }: TPropsPagination) {
  const handleSetPaginate = (name: string, value: number) => {
    handlePaginate({ name, value });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [limitItemPage, setLimitItemPage] = useState(limit);

  const lastIndexPage = currentPage * limitItemPage;
  const firstIndexPage = lastIndexPage - limitItemPage;

  const paginate = (num: any) => {
    handleSetPaginate('page', num);
    setCurrentPage(num);
  };

  const handlteLimitItemPage = (e: any) => {
    handleSetPaginate('limit', e);
    handleSetPaginate('page', 1);
    setLimitItemPage(e);
    setCurrentPage(1);
  };

  return (
    <div className="pagination">
      <div className="pagination--nav">
        {/* Реализовать карусель пагинации */}
        <PagNav
          paginate={paginate}
          limitItemPage={limit}
          maxPosts={maxPosts}
          currentPage={page}
        />
      </div>
      <div className="pagination--limit">
        <Select
          titleSelect={limit}
          options={['5', '10', '15']}
          handleCheckedSelect={handlteLimitItemPage}
          iconSize={15}
        />
      </div>
    </div>
  );
}

Pagination.defaultProps = {
  maxPosts: 0,
  page: 0,
  limit: 5
};

export default Pagination;
