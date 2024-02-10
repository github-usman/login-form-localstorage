// App.js
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import WelcomePage from './components/WelcomePage/WelcomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
