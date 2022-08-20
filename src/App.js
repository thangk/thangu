import React from 'react';
import { Routes, Route } from 'react-router';
import Apply from './pages/Apply';
import Home from './pages/Home'
import Login from './pages/Login'
import PublicRoutes from './routes/PublicRoutes.js'
import PrivateStudentRoutes from './routes/PrivateStudentRoutes';
import Account from './pages/Account'
import Dashboard from './components/Dashboard';
import MyCourses from './components/MyCourses';
import { AuthContextProvider } from './contexts/AuthContext';
import Courses from './pages/Courses';
import Contact from './pages/Contact'

function App() {
  return (

    <AuthContextProvider>

    
    <Routes>

    {/* Public routes */}
      <Route path='/' element={<PublicRoutes />}>
        <Route path='/' element={<Home />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/login' element={<Login />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />

      </Route>

      {/* Private routes */}
      <Route path='/account' element={<PrivateStudentRoutes />}>
        <Route path='/account' element={<Account />} />
        <Route path='/account/dashboard' element={<Dashboard />} />
        <Route path='/account/courses' element={<MyCourses />} />
      </Route>
      
    </Routes>
    </AuthContextProvider>
  );
}

export default App;
