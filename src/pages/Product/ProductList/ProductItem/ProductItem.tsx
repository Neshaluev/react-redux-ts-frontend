import React from 'react';
import { Link } from 'react-router-dom';
import { formatLinkImg } from '../../../../helpers/helpers';

import image from '../../../../styles/images/helper/not_image.png';

import './ProductItem.scss';

function ProductItem({ _id, name, imageSrc, title }: any) {
  const img = formatLinkImg(imageSrc)
  return (
    <Link to={`product/${_id}`}>
      <div className="product--card">
        <h3 className="product--header">{name}</h3>
        <div className="product--card__img">
          <img
            className="img-responsive product--card__images"
            src={img === '' ? image : img}
            alt={name}
          />
        </div>
        <div className="product--card__text">
          <p className="product--card__p">{title}</p>
        </div>
      </div>
    </Link>
  );
}

ProductItem.defaultProps = {
  name: '',
  title: '',
  imageSrc: '',
};

export default ProductItem;
