import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Contact  from './Contact';
import  Home  from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id='Navbar-div'>
          <nav id='Navbar'>
            <div id='Navbar-div-left'>
              <h2 id='Navbar-name'> ARMINAS <br/> <span id='Navbar-surename'> ALINIKOVAS </span> </h2>
            </div>
            <div id='Navbar-div-center'>
              <div>
                <img id='Navbar-image' src="logo1.png" alt="Navbar image" width='50' height='50'/>
                <h3 id='navbar-portfolio'> PORTFOLIO WEBSITE </h3>
              </div>
            </div>
            <div id='Navbar-div-right'>
              <div className='links'>
                <Link to='/' > Home </Link>
                <Link to='/contact'> Contact </Link>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
