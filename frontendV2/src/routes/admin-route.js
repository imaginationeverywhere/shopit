import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from "../components/admin";
import Dashboard from '../components/admin/Dashboard';
import Templates from '../components/admin/Templates';



export default function AdminPages() {
    return (
        <Switch> 
            <Layout>
                <Route exact path={ `${process.env.PUBLIC_URL}/admin/dashboard` } component={ Dashboard } />
                <Route exact path={ `${process.env.PUBLIC_URL}/admin/templates` } component={ Templates } />
            </Layout>
        </Switch>
    );
};