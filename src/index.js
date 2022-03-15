import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './i18n';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// ** Import custom components for redux **
import { Provider } from 'react-redux';
import store from './store';
import App from "./components/app";

// Import custom Components 
import Default from './components/dashboard/defaultCompo/default';
import Ecommerce from './components/dashboard/ecommerce';
import University from './components/dashboard/university';
import Server from './components/dashboard/server/serverComponent';
import EventsApp from './components/applications/events-app/eventsApp';
import CategoriesApp from './components/applications/categories-app/categoriesApp';
// import ServerComponent from './components/dashboard/server/server-component';
import Project from './components/dashboard/project/project';
// Pages
import loginWithVideo from './pages/loginWithVideo';


import SupportTicket from './components/support-ticket/supportTicket';

//config data
import configDB from './data/customizer/config'

const Root = () => {

    useEffect(() => {
        const abortController = new AbortController();
        const color = localStorage.getItem('color')
        const layout = localStorage.getItem('layout_version') || configDB.data.color.layout_version
        document.body.classList.add(layout);
        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        console.disableYellowBox = true;
        document.getElementById("color").setAttribute("href", `/assets/css/${color}.css`);

        return function cleanup() {
            abortController.abort();
        }
    }, []);

    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter basename={`/`}>
                    <Switch>
                        <Route exact path={`/`} render={() => {
                            return (<Redirect to={`/login`} />)
                        }} />
                        <Route path={`/login`} component={loginWithVideo} />
                        <App>
                            {/* dashboard menu */}
                            <Route path={`/dashboard`} component={Default} exact />
                            <Route path={`/dashboard/events`} component={EventsApp} />
                            <Route path={`/dashboard/categories`} component={CategoriesApp} />

                            {/* Support Ticket */}
                            <Route path={`/support-ticket/supportTicket`} component={SupportTicket} />
                        </App>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();