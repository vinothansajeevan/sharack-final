import React from 'react';
import {browserHistory, Route, Router} from 'react-router';
import Profile from './Profile/components/Profile'
import create from './Profile/components/create'
import order from './Posts/components/order'
import {Provider} from 'react-redux';
import Post from './Posts/components/view'
import Login from './Main/components/Login'
import SignIn from './Main/components/Login2'
import SignUp from './Main/components/SignUp'
import SignUp2 from './Main/components/SignUp2'
import SignUp3 from './Main/components/SignUp3'
import App from './Nav/App'
import {Auth} from './Auth'
import store from './store';

export default (
        <Provider store={store}>

<div>
    {
        Auth.isUserAuthenticated() === true &&
    <App/>
    }
            <Router
                history={browserHistory}
                routes={
                    <Route>

                            // <Route name="SignUp" path="/signUp" component={SignUp}/>
                    {
                        Auth.isUserAuthenticated() !== true &&
                    < Route
name = "SignUp2"
path = "/signUp2"
component = {SignUp2}
/>
}
{
    Auth.isUserAuthenticated() !== true &&
    < Route
    name = "SignUp2"
    path = "/signUp3"
    component = {SignUp3}
    />
}

                            <Route name="login" path="/login" component={Login}/>
{
    Auth.isUserAuthenticated() !== true &&
    < Route
    name = "login"
    path = "/"
    component = {SignIn}
    />
}
                            <Route name="post" path="/post" component={Post}/>
                            <Route name="profile" path="/profile" component={Profile}/>
                            <Route name="create" path="/create" component={create}/>
                            <Route name="order" path="/order" component={order}/>

                    </Route>

                }/>
</div>
    </Provider>
);