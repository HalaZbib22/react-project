import React from 'react';
import Blog from './components/Blog/Blog';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <div>
        <BrowserRouter>
         <Navbar />
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
