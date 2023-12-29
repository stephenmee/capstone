import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Reservations from './components/Reservations'
import OrderOnline from './components/OrderOnline'
import Login from './components/Login'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Header className="App-header" />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/order-online" element={<OrderOnline />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Main />
            <Footer className="Footer" />
        </>
    )
}

export default App
