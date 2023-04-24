import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Terms from "./pages/Terms";
import Container from 'react-bootstrap/Container';
import SignInPage from './pages/SignInPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home setCartItems={setCartItems} />}
          />
          <Route path="contact" element={<Contact />} />
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="terms" element={<Terms />} />
          <Route path="signin" element={<SignInPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;