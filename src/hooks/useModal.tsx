import React from 'react';

export type TypeModal = 'AddCategory' | 'EditCategory' | 'DeleteCategory' | undefined;

export function useModal() {
  const [showModal, setShowModal] = React.useState<any>();

  const handleHideModal = () => {
    setShowModal(undefined);
  };
  const handleShowModal = (data: TypeModal) => {
    setShowModal(data);
  };

  return [handleHideModal, handleShowModal, showModal];
}
