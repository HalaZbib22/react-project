import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Blog from './components/parts/Blog';
import Home from './components/Home';
import Form from './components/ContactUs/Form';
import NotFound from './NotFound';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
          <Route path='/' exact element={<Blog/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/home' exact element={<Home/>}/>
          </Route>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/contact-us' element={<Form/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
