import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';


function Home(){
    return(
        <div>
            <h1>Home</h1>

            <div>
                <Link to='/signUp'>Sign Up</Link>
                <Link to='/login'>Login</Link>
            </div>
            <Switch>
                <Route path='/signUp' component={Signup} />
                <Route path='/login' component={Login} />
            </Switch>
        </div>
    )
}
export default Home