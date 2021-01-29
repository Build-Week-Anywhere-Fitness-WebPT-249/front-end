import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import styled from 'styled-components'


function Home(){
    return(
        <div>
            <div>
                <h1>Welcome to Anywhere Fitness!</h1>
            </div>

            <div>
                <h3>Our App</h3>
                <img src='' alt='App Image'/>
                <p>These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Our easy app connects clients and instructors.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
            </div>

            <div>
                <h3>Clients</h3>
                <img src='' alt='Fitness Image' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div>
                <h3>Instructors</h3>
                <img src='' alt='image' />
                <p> Certified fitness instructors, do you  need an easy way to take the awkwardness out of attendance taking and client payment processing? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div>
                <h3>Sign Up!</h3>
                <img src='' alt='Image' />
                <p>Sign up is easy and free!  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                
                <Link to='/signUp'>Sign Up</Link>
                <Link to='/login'>Login</Link>

                <h4><em>Still not sure if you want to join?</em></h4>
                <p>View some of the classes and instructors <a href='#'>here.</a></p>
            </div>


            <Switch>
                <Route path='/signUp' component={Signup} />
                <Route path='/login' component={Login} />
            </Switch>
        </div>
    )
}
export default Home