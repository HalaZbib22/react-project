import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/parts/Navbar';
import Blog from './components/parts/Blog';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path='/' exact element={<Blog/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/home' exact element={<Home/>}/>
          </Route>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
