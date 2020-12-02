export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export type TypeCategory = {
  _id?: string;
  name: string;
  imageSrc?: any;
  title: string;
  description: string;
};

export type TypeFiltersCategory = {
  search?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: string;
};

export type lenCategories = {
  totalLenCategory: number | null;
  currentLenCategory: number | null;
};

export type CategoriesState = {
  items: TypeCategory[];
  loadingState: LoadingState;
  filters: any;
  lengthCategories: lenCategories;
};
