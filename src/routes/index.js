import React from 'react';
import { Route } from 'react-router-dom';
import App from '../components/app';
import RequireAuth from '../components/auth/require_auth';
import Signin from '../components/auth/signin';
import Signout from '../components/auth/signout';
import Feature from '../components/feature';

const Routes = () => {
    return (
        <App>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signout" component={Signout} />
            <Route exact path="/" component={RequireAuth(Feature)} />
        </App>
    );
};

export default Routes;
