import React from 'react'
import { useHistory } from 'react-router-dom';

import Button from '../../../../components/Button/Button'
import { TypeProduct } from '../../../../redux/product/type/state';
import CategoryProduct from './CategoryProduct/CategoryProduct'

import "./CategoryProductList.scss";

type TPropsCategoryProductList = {
    listProduct: TypeProduct[]
}

function CategoryProductList({listProduct}: TPropsCategoryProductList) {
    const history = useHistory()
    const routeProduct = () => {
        history.push('/product')
    }
    return (
        <>
        <div className="category-view--items">
            {
                listProduct.length > 0 ? (
                    <>
                        <div className="category-view--items__create-product">
                            <Button onClick={routeProduct}>
                                Create Product
                            </Button>
                        </div>
                        <div className="category-view--items__title"><h2>List products:</h2> </div>
                        <div className="category-view--list">
                            {
                                listProduct.map( (item, idx: any) => (
                                    <CategoryProduct {...item} key={idx} idx={idx}/>
                                ))
                            }
   
                        </div>
                    </>
                ) : (
                    <div className="category-view--item__missing">
                        <div className="category-view--item-missing__title">Items is missing.</div>
                        <div className="category-view--item-missing__create-product">
                                <Button onClick={routeProduct}>
                                    Create Product
                                </Button>
                        </div>
                    </div>
                )
            }
        </div>
        </>
    )
}

CategoryProductList.defaultProps = {
    CategoryProductList: []
}

export default CategoryProductList
