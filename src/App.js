import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Classes from './components/Classes';
import Instructors from './components/Instructors'
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='nav-container'>
        <h1>Anywhere Fitness</h1>

        <div className='nav-links'>
        <Link className='topLinks' to='/' >Home</Link>  
        <Link className='topLinks' to='/classes'>Classes</Link>
        <Link className='topLinks' to='/instructors'>Instructors</Link>
        <Link className='topLinks mainLink' to='/signUp'>Sign Up</Link>
        <Link className='topLinks mainLink' to='/login'>Login</Link>
        </div>
      </nav>
      <div className='contentWrapper'>
      <Switch>
        <Route path='/instructors' component={Instructors} />
        <Route path='/classes' component={Classes} />
        <Route path='/signUp' component={Signup} />
        <Route path='/login' component={Login}  />
        <Route path='/' component={Home} />
      </Switch>
      </div>
      <footer className='footer'>
        <nav className='footer-nav'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/signUp' >Sign Up</Link>
        <Link className='link' to='/login' >Login</Link>
        <Link className='link'>About</Link>
        <Link className='link'>Contact</Link>
        <Link className='link'>Help</Link>
        </nav>

        <h3>Anywhere Fitness 2021</h3>
      </footer>
    
    </div>
  );
}

export default App;
