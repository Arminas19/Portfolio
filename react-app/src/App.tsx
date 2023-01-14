import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Contact  from './components/Contact';
import  Home  from './Home';
import LandingPage from './LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id='Navbar-div'>
          <nav id='Navbar'>
            <div id='Navbar-div-left'>
              <a href="/" style={{textDecoration:'none'}}><h2 id='Navbar-name'> ARMINAS <br/> <span id='Navbar-surename'> ALINIKOVAS </span> </h2></a>
            </div>
            <div id='Navbar-div-center'>
              <div>
                <img id='Navbar-image' src="logo1.png" alt="Navbar image" width='50' height='50'/>
                <a href='/Home' className='portfolio-link' style={{textDecoration:'none'}}><h3 id='navbar-portfolio'> PORTFOLIO WEBSITE</h3></a>
              </div>
            </div>
            <div id='Navbar-div-right'>
              <div className='links'>

                <Link to='/Home' > Home </Link>
                <Link to='/' > Profile </Link>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/Home' element={<Home />}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
