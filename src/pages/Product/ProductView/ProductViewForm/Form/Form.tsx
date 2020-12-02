import React from 'react'

import TabBar from '../../../../../components/Tabs/TabBar'
import TabBarItem from '../../../../../components/Tabs/TabBarItem/TabBarItem'
import Input from '../../../../../components/Input/Input'
import Select from '../../../../../components/Select/SelectComponent'
import FileInput from '../../../../../components/FileInput/FileInput'
import Textarea from '../../../../../components/Textarea/TextareaComponent'
import Editor from '../../../../../components/Editor/Editor'
import Button from '../../../../../components/Button/Button'

function Form({
    handleSubmit, 
    onSubmit, 
    register, 
    errors, 
    handleCategorySetProduct, 
    currentCategory, 
    options, 
    handleEditorSetProduct,
    descData,
    img
    }: any) {
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} className="category-modal">
            <div className="product-view--title">
                <h2>Product Information</h2>
            </div>
            <TabBar>
                <TabBarItem label="Main">
                    <div className="product-view--field ">
                        <Input
                            name="name"
                            id="ProductName"
                            label="Name"
                            type="text"
                            inputRef={register({ required: true })}
                            required
                            error={errors.name}
                        />
                    </div>
                    <div className="product-view--field ">
                        <Input
                            name="title"
                            id="ProductTitle"
                            label="Title"
                            type="text"
                            required
                            inputRef={register({ required: true })}
                            error={errors.title}
                        />
                    </div>
                    <div className="product-view--field product-view--field-inline">
                        <h4>Category:</h4>
                        <div className="product-view--select">
                            <Select 
                                handleCheckedSelect={handleCategorySetProduct}
                                titleSelect={ !currentCategory ? "Select category" : currentCategory?.name } 
                                options={options} 
                                iconSize={18}
                            />
                        </div>
                    </div>
                    
                    <div className="product-view--field">
                        <h4>File Image:</h4>
                        <img  className="img-responsive product-view--image" src={img} alt=""/>
                    </div>
                    <div className="product-view--field">
                        <FileInput 
                            name="image"
                            inputRef={register()}
                            error={errors.image}
                        />
                    </div>
                </TabBarItem>
                <TabBarItem label="Details">
                    <div className="product-view--field ">
                        <Input
                            name="price"
                            id="ProductPrice"
                            label="Price $"
                            type="number"
                            inputRef={register()}
                            error={errors.price}
                        />
                    </div>
                    <div className="product-view--field product-view--field-inline">
                        <Input
                            name="height"
                            id="ProductHeight"
                            label="Height"
                            type="number"
                            inputRef={register()}
                            error={errors.height}
                        />
                        <Input
                            name="width"
                            id="ProductWidth"
                            label="Width"
                            type="number"
                            inputRef={register()}
                            error={errors.width}
                        />
                    </div>
                    <div className="product-view--field">
                        <h4>Comment:</h4>
                        <Textarea 
                            name="comment" 
                            inputRef={register()}
                            error={errors.comment}
                        />
                    </div>
                </TabBarItem>
                <TabBarItem label="Description">
                    <Editor getValueEditor={handleEditorSetProduct} deascriptionData={descData}/>
                </TabBarItem>
            </TabBar>
            <div>
                <Button type="submit">Save</Button>
            </div>
        </form>
        </>
    )
}

Form.propTypes = {

}

export default Form

