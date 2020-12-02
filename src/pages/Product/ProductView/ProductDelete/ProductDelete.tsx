import React from 'react';

import Button from '../../../../components/Button/Button';

import './ProductDelete.scss';

type TPropsProductDelete = {
  title: string | undefined| null,
  handleDeleteProduct: () => void,
  handleHideModal: (...args: any) => any[]
}

function ProductDelete({ handleDeleteProduct, handleHideModal, title }: TPropsProductDelete) {
  return (
    <div className="product-view--delete">
      <div className="product-view--delete__filed">
        <h3 className="product-view--delete__filed-text">
          Remove product {title} ?
        </h3>
      </div>
      <div className="product-view--delete__filed">
        <div className="product-view--delete__filed-button">
          <Button onClick={handleDeleteProduct} className={'accent'}>
            Delete
          </Button>
          <Button onClick={handleHideModal}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

ProductDelete.propTypes = {
  title: '',
  handleDeleteProduct: () => {},
  handleHideModal: () => {},
};

export default ProductDelete;
