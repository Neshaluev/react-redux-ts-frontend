import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';

import ControlPanel from '../../components/HomeFilters/HomeFilters';
import BlockBody from '../../components/Layout/BlockBody/BlockBody';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal/Modal';
import AddEditCategory from './AddEditCategories/AddEditCategory';
import {
  clearCategories,
  fetchCategories,
  requestAddCategory,
  setCategoriesFilters,
} from '../../redux/categories/actions';

import {
  selectCategoriesFilters,
  selectCategoriesItems,
  selectCategoriesLength,
  selectIsCategoriesLoading,
} from '../../redux/categories/selectors';
import Loading from '../../components/Loading/Loading';
import ListCategories from './ListCategories/ListCategories';
import BlockHead from '../../components/Layout/BlockHead/BlockHead';
import Pagination from '../../components/Pagination/Pagination';
import { useModal } from '../../hooks/useModal';

import './categories.scss';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoriesItems);
  const { totalLenCategory, currentLenCategory } = useSelector(
    selectCategoriesLength,
  );
  const filters = useSelector(selectCategoriesFilters);
  const isLoading = useSelector(selectIsCategoriesLoading);
  const location = useLocation();

  const [handleHideModal, handleShowModal, showModal] = useModal();

  const { search, page, limit, sort, order } = filters;

  const handleFetchCategories = () => {
    dispatch(fetchCategories(filters));
  };

  const handleAddCategory = (data: any) => {
    dispatch(requestAddCategory(data));
    handleHideModal(undefined);
  };

  const handleCategoriesFilters = (payload: any) => {
    dispatch(setCategoriesFilters(payload));
  };

  const handleClearCategories = () => {
    dispatch(clearCategories());
  };

  useEffect(() => {
    handleFetchCategories();
    return () => {
      if (window.location.pathname !== location.pathname) {
        handleClearCategories();
      }
    };
  }, [filters]);

  return (
    <>
      <Layout>
        <BlockHead>
          {filters && (
            <ControlPanel
              title={'categories list'}
              onSubmit={() => handleShowModal('AddCategory')}
              handleFilter={handleCategoriesFilters}
            />
          )}
        </BlockHead>
        <BlockBody>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {totalLenCategory !== null && (
                <Pagination
                  maxPosts={
                    search === '' ? totalLenCategory : currentLenCategory
                  }
                  page={page}
                  limit={limit}
                  handlePaginate={handleCategoriesFilters}
                />
              )}
              <ListCategories categories={categories} />
            </>
          )}
        </BlockBody>
      </Layout>
      <Modal
        title={'Add Category'}
        isOpen={showModal === 'AddCategory'}
        onCancel={handleHideModal}
      >
        <AddEditCategory
          handleCategory={handleAddCategory}
        />
      </Modal>
    </>
  );
}

export default Categories;
