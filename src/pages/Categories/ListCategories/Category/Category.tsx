import React from 'react';
import { Link } from 'react-router-dom';

import { TypeCategory } from '../../../../redux/categories/type/state';
import { formatLinkImg, lenStr } from '../../../../helpers/helpers';

import './category.scss';

type TPropsCategory = TypeCategory;

function Category({ _id, name, title, description, imageSrc }: TPropsCategory) {
  const img = formatLinkImg(imageSrc)

  return (
    <div className="category">
      <div className="category--header">
        <Link
          to={`/categories/category/${_id}`}
          className="category--link"
        ></Link>
        <h3 className="category--header__title">{lenStr(name, 20)}</h3>
        <div className="category--header__overlay">
          <h3 className="category--header__text">{lenStr(title, 70)}</h3>
          <p className="category--header__description">{lenStr(description)}</p>
        </div>
        <div className="category--header__controller">
          {/* <span className="category--header__controller-see">
            <Icon name={"pencil"} size={15} data-category-edit={id} />
          </span> */}
          {/* <span className="category--header__controller-delete">
            <Icon name={"trash"} size={15} data-category-delete={id} />
          </span> */}
        </div>
        <img
          // className="img-responsive category--header__img"
          className="category--header__img img-responsive"
          src={img}
          alt={name}
        />
      </div>
    </div>
  );
}

Category.defaultProps = {
  _id: '',
  name: '',
  title: '',
  description: '',
  imageSrc: '',
};

export default Category;
