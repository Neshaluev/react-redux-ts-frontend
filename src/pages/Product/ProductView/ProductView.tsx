import React, { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BlockBody from '../../../components/Layout/BlockBody/BlockBody';
import BlockHead from '../../../components/Layout/BlockHead/BlockHead';
import BlockHeadView from '../../../components/Layout/BlockHead/BlockHeadView/BlockHeadView';
import Layout from '../../../components/Layout/Layout';
import ProductViewForm from './ProductViewForm/ProductViewForm';
import { useModal } from '../../../hooks/useModal';
import { selectCategoriesItems } from '../../../redux/categories/selectors';
import { clearCategories, fetchAllCategories } from '../../../redux/categories/actions';
import {
  clearProduct,
  requestCreateProduct,
  requestFindByIdProduct,
  requestPutProduct,
  requetsDeleteProduct,
} from '../../../redux/product/actions';
import {
  selectIsProductLoading,
  selectProductItem,
} from '../../../redux/product/selectors';
import Loading from '../../../components/Loading/Loading';
import Modal from '../../../components/Modal/Modal';
import ProductDelete from './ProductDelete/ProductDelete';

import './ProductView.scss';

function ProductView() {
  const { id } = useParams<any>();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const product = useSelector(selectProductItem);
  const categoriesData = useSelector(selectCategoriesItems);
  const isLoading = useSelector(selectIsProductLoading);

  const [handleHideModal, handleShowModal, showModal] = useModal();

  const handleFetchCategories = () => {
    dispatch(fetchAllCategories());
  };

  const handleFetchByIdProduct = () => {
    dispatch(requestFindByIdProduct(id));
  };

  const handleClearProduct = () => {
    dispatch(clearProduct());
    dispatch(clearCategories());
  };

  const handleCreateOrEditProduct = (productData: any) => {
    if (id) {
      dispatch(requestPutProduct(productData));
    } else {
      dispatch(requestCreateProduct({ productData, history }));
    }
  };

  const handleDeleteProduct = () => {
    const payload = {
      id,
      history,
    };
    dispatch(requetsDeleteProduct(payload));
    handleHideModal(undefined);
  };

  useEffect(() => {
    handleFetchCategories();
    if (id !== undefined) {
      handleFetchByIdProduct();
    }
    return () => {
      if (window.location.pathname !== location.pathname) {
        handleClearProduct();
      }
    };
  }, []);

  const handleBackLocation = () => {
    history.push('/home');
  };

  return (
    <>
      <Layout>
        <BlockHead>
          <BlockHeadView
            handleBackLocation={handleBackLocation}
            title={id ? product?.name : 'Create Product'}
            viewTools={id ? ['delete'] : []}
            handleShowModal={handleShowModal}
          />
        </BlockHead>
        <BlockBody>
          {!isLoading ? (
            <ProductViewForm
              product={product}
              categories={categoriesData}
              handleCreateOrEditProduct={handleCreateOrEditProduct}
            />
          ) : (
            <Loading />
          )}
        </BlockBody>
      </Layout>
      <Modal
        title={'Delete Category'}
        isOpen={showModal === 'DeleteCategory'}
        onCancel={handleHideModal}
      >
        <ProductDelete
          title={product?.name}
          handleDeleteProduct={handleDeleteProduct}
          handleHideModal={handleHideModal}
        />
      </Modal>
    </>
  );
}

export default ProductView;
