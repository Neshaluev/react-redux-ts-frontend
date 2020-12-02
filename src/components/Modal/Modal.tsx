import React from 'react';

import Portal from './Portal/Portal';

import './Modal.scss';
import Icon from '../Icon/Icon';

type TPropsModal = {
  title: string,
  isOpen: boolean,
  onCancel?: () => void,
  onSubmit?: () => void,
  children: React.ReactNode,
}

const Modal = ({ title, isOpen, onCancel, children }: TPropsModal) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal-overlay">
            <div className="modal-window">
              <div className="modal-header">
                <div className="modal-title">{title}</div>
                <Icon name="close" onClick={onCancel} size={20} />
              </div>
              <div className="modal-body">{children}</div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => undefined,
  onSubmit: () => undefined,
  children: null,
};
export default Modal;
