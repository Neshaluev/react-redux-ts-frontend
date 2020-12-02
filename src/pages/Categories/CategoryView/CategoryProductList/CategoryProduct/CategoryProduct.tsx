import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../../../components/Icon/Icon'

import "./CategoryProduct.scss"

function CategoryProduct({_id, name, idx}: any) {
    return (
        <div  className="category-view--item" >
            <div className="category-view--item__inform">
                <div className="category-view--item__index">{idx}.</div>
                <div className="category-view--item__title">{name}</div> 
            </div>
            <div className="category-view--item__controller">
                <div className="category-view--item__controller-item"> <Link to={`/product/${_id}`}><Icon name={"pencil"} size={18}/></Link> </div>
            </div> 
        </div>
    )
}

export default CategoryProduct
