import { Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='nav-container'>
        <h1>Anywhere Fitness</h1>

        <div className='nav-links'>
        <Link className='topLinks'>Classes</Link>
        <Link className='topLinks'>Instructors</Link>
        <Link className='topLinks mainLink'>Sign Up</Link>
        <Link className='topLinks mainLink'>Login</Link>
        </div>
      </nav>
      <div className='contentWrapper'>
          <h2>Content Will GO here</h2>
          <div className="push"></div>
        </div>
      <footer className='footer'>
        <nav className='footer-nav'>
        <Link className='link'>Sign Up</Link>
        <Link className='link'>Login</Link>
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
