import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminLayout from "../components/admin";
import HomePageLayout from "../components/app";
import Dashboard from "../components/admin/Dashboard";
import Templates from "../components/admin/Templates";
import ProductList from "../components/admin/ProductList";
import ProductCreate from "../components/admin/ProductCreate";
import UsersList from "../components/admin/UsersList";
import Login from "../components/admin/Login";
const PreviewPages = React.lazy(() => import("./preview-route"));

export default function AdminPages() {
  return (
    <Switch>
      <AdminLayout>
        <Login />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin/products/create`}
          component={ProductCreate}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin/products/edit/:productId`}
          component={ProductCreate}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin/dashboard`}
          component={Dashboard}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin/templates`}
          component={Templates}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin/products`}
          component={ProductList}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin/users`}
          component={UsersList}
        />
      </AdminLayout>
      {/* <HomePageLayout>
                <Route exact path={ `${process.env.PUBLIC_URL}/admin/templates/preview/:id` } component={ PreviewPages } />
            </HomePageLayout> */}
    </Switch>
  );
}
