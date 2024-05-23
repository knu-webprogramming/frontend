import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SelectPage from './pages/SelectPage';
import CustomerMainPage from './pages/CustomerMainPage';
import OwnerMainPage from './pages/OwnerMainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customer/main" elememt={<CustomerMainPage/>}/>
        <Route path="/signup" elements={<SignUpPage/>}/>
        <Route path="/signup/select" elements={<SelectPage/>}/>
        <Route path="/owner/main" elements={<OwnerMainPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;