import axios from '../api/axios';
import { CategoriesState, TypeCategory, TypeFiltersCategory } from '../redux/categories/type/state';

export const CategoriesApi = {
  fetchCategories(payload: TypeFiltersCategory): Promise<CategoriesState['items']>  {
    const { search, limit, page, order, sort } = payload;
    return axios
      .get<any>(
        `/api/categories/?search=${search}&page=${page}&limit=${limit}&sort=${sort}&order=${order}`,
      )
      .then(({ data }) => data);
  },
  fetchAllCategories(): Promise<CategoriesState['items']> {
    return axios.get('/api/categories/all/').then(({ data }) => data);
  },
  addCategories(data: TypeCategory): Promise<TypeCategory> {
    return axios.post('/api/categories', data).then(({ data }) => data);
  },
  putCategories({ id, data }: any): Promise<TypeCategory> {
    return axios.patch(`/api/categories/${id}`, data).then(({ data }) => data);
  },
  deleteCategories(id: string): Promise<void> {
    return axios.delete(`/api/categories/${id}`).then(({ data }) => data);
  },
  findByIdCategories(id: string): Promise<CategoriesState['items']> {
    return axios.get(`/api/categories/${id}`).then(({ data }) => data);
  },
};
