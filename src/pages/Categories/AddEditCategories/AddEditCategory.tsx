import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import FileInput from '../../../components/FileInput/FileInput';
import Input from '../../../components/Input/Input';
import Textarea from '../../../components/Textarea/TextareaComponent';
import Button from '../../../components/Button/Button';

import './AddEditCategory.scss';
import { FILE_SIZE, SUPPORTED_FORMATS } from '../../../helpers/constans';
import { TypeCategory } from '../../../redux/category/type/state';

export type AddOrEditFormProps = {
  _id: string;
  name: string;
  title: string;
  description: string;
  image: string;
};

const Schema = yup.object().shape({
  _id: yup.string(),
  name: yup
    .string()
    .min(1, 'Min name length is 1 characters.')
    .required('This field name is required.'),
  title: yup
    .string()
    .min(1, 'Min title length is 1 characters.')
    .required('This field title is required.'),
  description: yup
    .string()
    .min(1, 'Min description length is 1 characters.')
    .required('This field description is required.'),
  image: yup
    .mixed()
    .test('fileSize', 'File upload error.', (value) => {
      return value[0] && value[0].size <= FILE_SIZE;
    })
    .test('fileFormat', 'Unsupported Format', (value) => {
      return value[0] && SUPPORTED_FORMATS.includes(value[0].type);
    }),
});

export type TPropsAddEditCategory = {
  item: TypeCategory | undefined;
  handleCategory: (...args: any) => any;
};

function AddEditCategory({ item, handleCategory }: any) {
  const { register, handleSubmit, errors } = useForm<AddOrEditFormProps>({
    defaultValues: {
      _id: item?._id || '',
      name: item?.name || '',
      title: item?.title || '',
      description: item?.description || '',
      image: '',
    },
    //@ts-ignore
    resolver: yupResolver(Schema),
  });

  const onSubmit = (data: AddOrEditFormProps) => {
    handleCategory(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="category-modal">
      <div className="category-modal__filed">
        <Input
          name="name"
          id="CategoryName"
          label="Name"
          type="text"
          required
          inputRef={register({ required: true })}
          error={errors.name}
        />
      </div>
      <div className="category-modal__filed">
        <Input
          name="title"
          id="CategoryTitle"
          label="Title"
          type="text"
          required
          inputRef={register({ required: true })}
          error={errors.title}
        />
      </div>
      <div className="category-modal__filed">
        <h4 className="category-modal__description-text">Description*:</h4>
        <Textarea
          name="description"
          label="Description"
          required
          inputRef={register({ required: true })}
          error={errors.description}
        />
      </div>
      <div className="category-modal__filed">
        <FileInput name="image" inputRef={register()} error={errors.image} />
      </div>
      <div className="category-modal__footer">
        <Button type={'submit'} className={'accent'}>
          Save
        </Button>
      </div>
    </form>
  );
}

// AddEditCategory.defaultProps = {
//   item: undefined,
//   handleCategory: () => {}
// }

export default AddEditCategory;
