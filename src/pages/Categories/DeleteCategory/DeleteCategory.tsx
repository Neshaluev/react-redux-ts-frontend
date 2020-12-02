import React from 'react';

import Button from '../../../components/Button/Button';

import './deleteCategory.scss';



function DeleteCategory({ title, handleDeleteCategory, handleHideModal }: any) {
  return (
    <div className="category--delete">
      <div className="category--delete__filed">
        <h3 className="category--delete__filed-text">
          Remove category {title} ?
        </h3>
      </div>
      <div className="category--delete__filed">
        <div className="category--delete__filed-button">
          <Button onClick={handleDeleteCategory} className={'accent'}>
            Delete
          </Button>
          <Button onClick={handleHideModal}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

DeleteCategory.defaultProps  = {
  title: '',
  handleDeleteCategory: () => {},
  handleHideModal: () => {}
}

export default DeleteCategory;
