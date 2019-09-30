import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import asyncComponent from './hoc/AsyncComponent/AsyncComponent';
import Layout from './components/Layout/Layout';

const asyncHome = asyncComponent(() => {
    return import('./containers/Home/Home');
})

class Routes extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={asyncHome} />
            </Switch>
        );
        return (
            <div>
                {
                    <Layout>
                        {routes}
                    </Layout>
                }
            </div>
        );
    }
}


export default Routes;
