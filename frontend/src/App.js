import logo from './logo.svg';
import './App.css';
import React from 'react';
// import data from './data';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
// import HomeScreen from './Screens/HomeScreen';
import Navbar from './components/Navbar';
// import Footer from './Screens/Footer';
// import Item from './item';
// import SliderItems from './Screens/Slider-Watches';
// import SliderShowImages from './Screens/SliderShowImages'

// import Categories from './Screens/Categories';
// import Carousel from 'react-elastic-carousel';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import Icons from './Screens/icons';
// import Home from './Screens/Home';
// import Signup from './Screens/Signup';
// import Login from './Screens/Login';
// import Watches from './Screens/watches';
// import Cart from './Screens/Cart';
// import ProductDetails from './Screens/product-details';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <BrowserRouter>
    <div className="grid-container">
    <Navbar/>
    </div>
    </BrowserRouter>
  );
}

export default App;
