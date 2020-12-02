import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../../components/Layout/Layout'
import BlockHead from "../../../components/Layout/BlockHead/BlockHead";
import BlockBody from '../../../components/Layout/BlockBody/BlockBody'
import Loading from '../../../components/Loading/Loading';
import CategoryInformation from './CategoryInformation/CategoryInformation';
import CategoryProductList from './CategoryProductList/CategoryProductList';
import Modal from '../../../components/Modal/Modal';
import AddEditCategory from '../AddEditCategories/AddEditCategory';
import DeleteCategory from '../DeleteCategory/DeleteCategory';

import { clearCategory, requestDeleteCategory, requestFindByIdCategory, requetsPutCategory } from '../../../redux/category/actions';
import { selectCategory, selectIsCategoryLoading } from '../../../redux/category/selectors';

import BlockHeadView from '../../../components/Layout/BlockHead/BlockHeadView/BlockHeadView';
import { useModal } from '../../../hooks/useModal';

import "./categoryView.scss"

function CategoryView() {
    const dispatch = useDispatch()
    let { id } = useParams<any>();
    let history = useHistory();
    let location = useLocation();
    let isLoading = useSelector(selectIsCategoryLoading)
    let category = useSelector(selectCategory)
    let {item, listProduct} = category

    // Modal
    const [ handleHideModal, handleShowModal, showModal ] = useModal()

    const handleBackLocation = () => {
        history.push('/categories')
    }

    const handleGetCategory = () => {
        dispatch(requestFindByIdCategory(id))
    }

    // Редактирование категории
    const handleEditCategory = (categoryData: any) => {
        const payload = {
            id,
            categoryData
        }
        dispatch(requetsPutCategory(payload))
        handleHideModal();
      }

    // удаление категории
    const handleDeleteCategory = () => {
        dispatch(requestDeleteCategory(id))
        handleBackLocation()
    } 

    React.useEffect( () => {
        handleGetCategory()
        return () => { 
            if(window.location.pathname !== location.pathname) {
                dispatch(clearCategory()) 
            }
        }
    }, [])

    return (
        <>
        <Layout>
            <BlockHead>
                <BlockHeadView 
                    handleBackLocation={handleBackLocation} 
                    title={item?.name} 
                    handleShowModal={handleShowModal}
                    viewTools={['edit', 'delete']}
                />
            </BlockHead>
            <BlockBody>
                {
                    isLoading ? <Loading /> : (
                        <>
                            <div className="category-view--container">
                                <CategoryInformation itemData={item}/>
                                <CategoryProductList listProduct={listProduct}/>
                            </div>
                        </>
                    )
                }
            </BlockBody>
        </Layout>
        <Modal
            title={"Edit Category"}
            isOpen={showModal === "EditCategory"}
            onCancel={handleHideModal}
        >
            <AddEditCategory item={category.item} handleCategory={handleEditCategory} handleHideModal={handleHideModal}/>
        </Modal>
        <Modal
            title={"Delete Category"}
            isOpen={showModal === "DeleteCategory"}
            onCancel={handleHideModal}
        >
            <DeleteCategory title={item?.name}  handleDeleteCategory={handleDeleteCategory} handleHideModal={handleHideModal}/>
        </Modal>
        </>
    )
}

export default CategoryView
