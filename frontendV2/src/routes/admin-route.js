import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminLayout from "../components/admin";
import HomePageLayout from "../components/app";
import Dashboard from "../components/admin/Dashboard";
import Templates from "../components/admin/Templates";
import ProductList from "../components/admin/ProductList";
import UsersList from "../components/admin/UsersList";
const PreviewPages = React.lazy(() => import("./preview-route"));

export default function AdminPages() {
  return (
    <Switch>
      <AdminLayout>
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
