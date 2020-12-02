import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSelector } from 'react-redux';

import { FILE_SIZE, SUPPORTED_FORMATS } from '../../../../helpers/constans';
import { selectCategoriesById } from '../../../../redux/categories/selectors';
import { formatLinkImg } from '../../../../helpers/helpers';
import Form from './Form/Form';

export type TypeProductForm = {
    _id: string;
    name: string;
    title: string;
    image: object | string;
    category: string | null;
    price: number | null;
    height: number | null;
    width: number | null;
    comment: string,
    description: string ;
}

const Schema = yup.object().shape({
    _id: yup.string(),
    name: yup.string().required("This field is required."),
    title: yup.string().required("This field is required."),
    image: yup.mixed().required("You need provide file.").test('fileSize', "File upload error.", (value) => {
      return value[0] && value[0].size <= FILE_SIZE
    }).test(
      "fileFormat",
      "Unsupported Format",
      (value) => {
        return value[0] && SUPPORTED_FORMATS.includes(value[0].type)}
    ),
    category: yup.string(),
    price: yup.number(),
    height: yup.number(),
    width: yup.number(),
    comment: yup.string(),
    description: yup.string().required('This field is required.')
  });  

function ProductViewForm({categories, handleCreateOrEditProduct, product}: any) {
   const categoriesData = [...categories]
   const options = categoriesData.map( (item: any) => item.name )
   const [currentCategory] = useSelector(state => selectCategoriesById(state, product?.category))

   const { register, handleSubmit, errors, setValue, getValues  } = useForm<TypeProductForm>({
    defaultValues: {
        _id: product?._id || '',
        name: product?.name,
        title: product?.title,
        image: product?.image || '',
        category: product?.category,
        price: product?.price || null,
        height: product?.height || null,
        width: product?.width || null,
        comment: product?.comment || '',
        description: product?.description 
    },
    //@ts-ignore
    resolver: yupResolver(Schema)
  });

  const onSubmit = (data: TypeProductForm) => {
    handleCreateOrEditProduct(data)
  };

    const handleCategorySetProduct = (data: any) => {
        let {_id} = categoriesData.find( (item: any) => item.name === data )
        setValue('category', _id)
    }

    const handleEditorSetProduct = (description: any) => {
        setValue('description', description)
    }

    const handleSetPorductData = () => {   
        for(let [item, value] of Object.entries(product)) {
            setValue(item, value);
        }  
    }

    useEffect(() => {
        register("_id");
        register("description");
        register("category");
        if(product) {
            handleSetPorductData()
        }
    }, [product])

    const descData = getValues('description')

    const img = formatLinkImg(product?.imageSrc)

    return <Form 
        //@ts-ignore
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        handleCategorySetProduct={handleCategorySetProduct}
        currentCategory={currentCategory}
        options={options}
        handleEditorSetProduct={handleEditorSetProduct}
        descData={descData}
        img={img}
    />
}

ProductViewForm.defaultProps = {
    product: undefined,
    categories: [],
    handleCreateProduct: () => {}
}

export default ProductViewForm
