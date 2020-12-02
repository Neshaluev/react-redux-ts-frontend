import { combineReducers } from 'redux';
import { categoriesReducer } from './categories/reducer';
import { categoryReducer } from './category/reducer';
import { productsReducer } from './products/reducer';
import { productReducer } from './product/reducer';
import { userReducer } from './user/reducer';
import { alertReducer } from './alert/reducer';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  category: categoryReducer,
  products: productsReducer,
  product: productReducer,
  user: userReducer,
  alert: alertReducer,
});

export type TypeStateRootReducer = ReturnType<typeof rootReducer>;
