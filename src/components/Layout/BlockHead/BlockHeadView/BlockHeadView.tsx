import React from 'react';

import Icon from '../../../../components/Icon/Icon';
import { TypeModal } from '../../../../hooks/useModal';

import './BlockHeadView.scss';

type TPropsBlockHeadView = {
  title?: string,
  handleBackLocation?: () => void,
  handleShowModal: (...args: any) => TypeModal,
  viewTools: string[]
}

function BlockHeadView({
  title,
  handleBackLocation,
  handleShowModal,
  viewTools,
}: TPropsBlockHeadView) {
  return (
    <div className="block-head-view">
      <div className="block-head-view--back" onClick={handleBackLocation}>
        <Icon name={'arrow-left'} size={40} />
      </div>
      <div className="block-head-view--title">
        <h2 className="block-head-view--title__text">{title}</h2>
      </div>
      <div className="block-head-view--controller">
        {viewTools.includes('edit') && (
          <div
            className="block-head-view--edit"
            onClick={() => handleShowModal('EditCategory')}
          >
            <Icon name={'pencil'} size={30} />
          </div>
        )}
        {viewTools.includes('delete') && (
          <div
            className="block-head-view--delete"
            onClick={() => handleShowModal('DeleteCategory')}
          >
            <Icon name={'trash'} size={30} />
          </div>
        )}
      </div>
    </div>
  );
}

BlockHeadView.propTypes = {
  title: '',
  handleBackLocation: () => undefined,
  handleShowModal: () => undefined,
  viewTools: [''],
};

export default BlockHeadView;
