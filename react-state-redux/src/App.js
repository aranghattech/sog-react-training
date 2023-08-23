import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className='navbar-nav'>
             <li className='navbar-item'>
                Home
             </li>
             <li className='navbar-item mx-4'>
                Cart <span className='badge badge-danger bg-danger'>0</span>
            </li>
          </ul>
       </nav>
    </div>
  );
}

export default App;