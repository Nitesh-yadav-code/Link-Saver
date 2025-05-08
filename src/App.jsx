import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignupForm from './components/signup-form';
import Login from './components/login-form';
import Dashboard from './pages/Dashboard';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignupForm />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
