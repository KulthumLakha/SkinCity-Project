import React from "react";
import { useState } from 'react';
import app from './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Terms from "./pages/Terms";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {LinkContainer} from "react-router-bootstrap";
import SignIn from "./pages/SignIn";


function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Website>website</Navbar.Website>
          </LinkContainer> 
        </Container>
      </Navbar>
        <Container>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={<Account />} />
              <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cart/signin" element={<SignIn />} />
            </Route>
          </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;