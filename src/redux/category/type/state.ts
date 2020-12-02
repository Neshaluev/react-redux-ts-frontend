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

export type CategoryState = {
  item: TypeCategory | null;
  listProduct: any;
  loadingState: LoadingState;
};
