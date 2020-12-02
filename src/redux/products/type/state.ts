export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export type TypeProduct = {
  _id?: string;
  name: string;
  title: string;
  image: string;
  category?: string;
  price: number;
  height: number;
  width: number;
  comment: string;
  description: string;
};

export type TypeFiltersPorduct = {
  search?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: string;
};
export type lenProducts = {
  totalLenProduct: number | null;
  currentLenProduct: number | null;
};

export type ProductsState = {
  items: TypeProduct[];
  loadingState: LoadingState;
  filters: TypeFiltersPorduct;
  lengthProducts: lenProducts;
};
