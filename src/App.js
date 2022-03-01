import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/parts/Navbar';
import Blog from './components/parts/Blog';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CarouselComponent from "./components/Carousel/carousel.component";

function App() {
  return (
      <div>
        <BrowserRouter>
        <CarouselComponent />
          {/* <Navbar /> */}
          <Routes>
          <Route path='/' exact element={<Blog/>}/>
            <Route path='/home' exact element={<Home/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
