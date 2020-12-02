import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Categories from '../pages/Categories/Categories';
import CategoryView from '../pages/Categories/CategoryView/CategoryView';
import Product from '../pages/Product/Product';
import ProductView from '../pages/Product/ProductView/ProductView';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SingnIn/SignIn';
import withAuth from '../hoc/withAuthRedierct';
import NotFound from '../pages/NotFound/NotFound';

export const Router = () => {
  return (
    <Switch>
      <Route exact path={`/`} component={SignIn} />
      <Route exact path={`/register`} component={Register} />
      <Route exact path={`/home`} component={withAuth(Product)} />
      <Route exact path={`/product`} component={withAuth(ProductView)} />
      <Route exact path={`/product/:id`} component={withAuth(ProductView)} />
      <Route exact path={`/categories`} component={withAuth(Categories)} />
      <Route exact path={`/categories/category/:id`} component={withAuth(CategoryView)} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
