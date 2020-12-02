import { all } from 'redux-saga/effects';

import { categoriesAllSagas } from './categories/saga';
import { categoryAllSagas } from './category/saga';
import { productsAllSagas } from './products/saga';
import { productAllSagas } from './product/saga';
import { userAllSagas } from './user/saga';

export default function* rootSaga() {
  yield all([
    ...categoriesAllSagas,
    ...categoryAllSagas,
    ...productsAllSagas,
    ...productAllSagas,
    ...userAllSagas,
  ]);
}
