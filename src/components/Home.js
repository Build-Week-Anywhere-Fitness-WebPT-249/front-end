import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';


function Home(){
    return(
        <div>
            <h1>Welcome to Anywhere Fitness!</h1>

            <h3>Our App</h3>
            <p>These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Our easy app connects clients and instructors</p> 
            
            
            
            <p> Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. </p>


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