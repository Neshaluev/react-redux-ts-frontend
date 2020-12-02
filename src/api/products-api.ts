import axios from '../api/axios';
import { ProductsState, TypeFiltersPorduct, TypeProduct } from '../redux/products/type/state';

export const ProductsApi = {
  findByIdProducts: (id: string): Promise<ProductsState['items']> => {
    return axios
      .get(`/api/products/all/?category=${id}`)
      .then(({ data }) => data);
  },
  findByIdProduct: (id: string): Promise<TypeProduct> => {
    return axios.get(`/api/products/${id}`).then(({ data }) => data);
  },
  fetchAllProducts: (): Promise<ProductsState['items']> => {
    return axios.get(`/api/products`).then(({ data }) => data);
  },
  createProduct: (data: TypeProduct): Promise<TypeProduct> => {
    return axios.post(`/api/products`, data).then(({ data }) => data);
  },
  deleteProduct: (id: string): Promise<void> => {
    return axios.delete(`/api/products/${id}`).then(({ data }) => data);
  },
  putProduct: ({ _id, data }: any): Promise<TypeProduct> => {
    return axios.put(`/api/products/${_id}`, data).then(({ data }) => data);
  },
  fetchProducts: (payload: TypeFiltersPorduct): Promise<ProductsState['items']>  => {
    const { search, limit, page, order, sort } = payload;
    return axios
      .get(
        `/api/products/?search=${search}&page=${page}&limit=${limit}&sort=${sort}&order=${order}`,
      )
      .then(({ data }) => data);
  },
};
