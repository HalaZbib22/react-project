import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import Navbar from './components/parts/Navbar';
import Home from './components/Home';
import Landing from './components/Dashboard/Landing';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Landing/>
          <Routes>
            <Route path='/home' exact element={<Home/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
