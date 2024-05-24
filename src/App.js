import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import SignUpPage from './pages/SignUpPage';
import SelectPage from './pages/SelectPage';
import SignUpCompletePage from './pages/SignUpCompletePage'
import LoginPage from './pages/LoginPage';
import CustomerMainPage from './pages/CustomerMainPage';
import CustomerProfilePage from './pages/CustomerProfilePage';
import OwnerMainPage from './pages/OwnerMainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/select" element={<SelectPage />} />
        <Route path="/signup/complete" element={<SignUpCompletePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customer/main" element={<CustomerMainPage />} />
        <Route path="/customer/profile" element={<CustomerProfilePage />} />
        <Route path="/owner/main" element={<OwnerMainPage />} />
      </Routes>
    </Router>
  );
}

export default App;