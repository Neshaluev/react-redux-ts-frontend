import React from 'react'
import Icon from '../../../../components/Icon/Icon'

import "./CategoryViewHeader.scss"

type TPropsCategoryViewHeader = {
    title: string;
    handleBackLocation: () => void,
    handleShowModal: (...args: any) => any
}

function CategoryViewHeader({title ,handleBackLocation, handleShowModal}:TPropsCategoryViewHeader) {
    return (
        <div className="category-view">
            <div className="category-view--back" onClick={handleBackLocation}>
                <Icon name={"arrow-left"} size={40}/>
            </div>
            <div className="category-view--title">
                <h2 className="category-view--title__text">{title}</h2>
            </div>
            <div className="category-view--controller">
                <div className="category-view--edit" onClick={() => handleShowModal("EditCategory")}>
                    <Icon name={"pencil"} size={30} />
                </div>
                <div className="category-view--delete" onClick={() => handleShowModal("DeleteCategory")}>
                    <Icon name={"trash"} size={30}/>
                </div>
            </div>
        </div>
    )
}

CategoryViewHeader.defaultProps = {
    title: '',
    handleBackLocation: () => {},
    handleShowModal: () => {}
}

export default CategoryViewHeader
