import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/admin/Dashboard';


export default function AdminPages() {
    return (
        <Switch> 
                <Route exact path={ `${process.env.PUBLIC_URL}/admin/dashboard` } component={ Dashboard } /> 
        </Switch>
    );
}