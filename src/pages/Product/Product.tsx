import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import ControlPanel from '../../components/HomeFilters/HomeFilters';
import BlockBody from '../../components/Layout/BlockBody/BlockBody';
import BlockHead from '../../components/Layout/BlockHead/BlockHead';
import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import { clearCategories } from '../../redux/categories/actions';
import {
  clearProducts,
  requestGetProducts,
  setProductFilters,
} from '../../redux/products/actions';
import {
  selectProductsItems,
  selectIsProductsLoading,
  selectProductsFilters,
  selectProductsLength,
} from '../../redux/products/selectors';
import ProductList from './ProductList/ProductList';

import './product.scss';
import { TypeFiltersPorduct } from '../../redux/products/type/state';

function Product() {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsItems);
  const { totalLenProduct, currentLenProduct } = useSelector(
    selectProductsLength,
  );
  const filters = useSelector(selectProductsFilters);
  const isLoading = useSelector(selectIsProductsLoading);
  const history = useHistory();
  const location = useLocation();

  const { search, page, limit } = filters;

  const handleFetchProducs = () => {
    dispatch(requestGetProducts(filters));
  };

  const handleCreateProductButton = () => {
    history.push('/product');
  };

  const handleClearProduct = () => {
    dispatch(clearProducts());
    dispatch(clearCategories());
  };

  const handleProductsFilters = (payload: TypeFiltersPorduct) => {
    dispatch(setProductFilters(payload));
  };

  useEffect(() => {
    handleFetchProducs();
    return () => {
      if (window.location.pathname !== location.pathname) {
        handleClearProduct();
      }
    };
  }, [filters]);

  return (
    <Layout>
      <BlockHead>
        <ControlPanel
          onSubmit={handleCreateProductButton}
          title={'Products List'}
          handleFilter={handleProductsFilters}
        />
      </BlockHead>
      <BlockBody>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Pagination
              maxPosts={search === '' ? totalLenProduct : currentLenProduct}
              page={page}
              limit={limit}
              handlePaginate={handleProductsFilters}
            />
            <ProductList productsList={products} />
          </>
        )}
      </BlockBody>
    </Layout>
  );
}

export default Product;
