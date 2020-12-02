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

export type ProductState = {
  item: TypeProduct | null;
  loadingState: LoadingState;
};
