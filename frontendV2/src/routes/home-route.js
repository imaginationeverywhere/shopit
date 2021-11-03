import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/app';
import HomePage1 from '../components/home/home-1';
import HomePage2 from '../components/home/home-2';

export default function HomeRoute() {
    const getHomePage = (page) => {
        switch (page) {
            case 1:
                return HomePage1
            case 2:
                return HomePage2 
            default:
                return HomePage1 
        }
    }
    return (
        <Switch>
            <Layout>
                <Route exact path={ `${process.env.PUBLIC_URL}/` } component={ getHomePage(2) } />
            </Layout>
        </Switch>
    );
}