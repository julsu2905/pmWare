import React from "react";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'


function App() {
  return (
    <BrowserRouter>
      <div className="all-page">
        <Navbar />
        <Loading />
        <Route  path="/" component={HomePage} />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
