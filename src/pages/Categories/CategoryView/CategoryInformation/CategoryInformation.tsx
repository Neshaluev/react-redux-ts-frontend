import React from 'react'
import { formatLinkImg } from '../../../../helpers/helpers';
import { TypeCategory } from '../../../../redux/categories/type/state';

import "./CategoryInformation.scss";

type TPropsCategoryInf = {
    itemData: TypeCategory | null
}

function CategoryInformation({itemData}: TPropsCategoryInf) {
    const img = formatLinkImg(itemData?.imageSrc)
    return (
    <div className="category-view--info">
        <div className="category-view--info__title"><h2>Full Information category:</h2></div>
        <div className="category-view--field"> <span>Name:</span>  {itemData?.name}</div>
        <div className="category-view--field"><span>Title:</span>{itemData?.title}</div>
        <div className="category-view--field"><span>Img:</span>         
            <img
                className="img-responsive category-view--field__img"
                src={img}
                alt={itemData?.name}
                />
        </div>
        <span className="category-view--info__desc">Description: </span>
        <div className="category-view--field category-view--field__desc"> 
           {itemData?.description}
        </div>
    </div>
    )
}

CategoryInformation.defaultProps = {
    itemData: null
}

export default CategoryInformation
