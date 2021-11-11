import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../components/admin/Dashboard";
import Layout from "../components/app";

export default function AdminRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={`${process.env.PUBLIC_URL}/admin/dashboard`} component={Dashboard}/>
            </Layout>
        </Switch>
    );
}
