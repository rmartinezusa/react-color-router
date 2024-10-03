import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Red from './components/Red';
import Orange from './components/Orange';
import Yellow from './components/Yellow';
import Green from './components/Green';
import Blue from './components/Blue';
import Indigo from './components/Indigo'
import Violet from './components/Violet'
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <nav id="navbar">
          <Link className="red-nav"  to="/red">Red</Link>
          <Link className="orange-nav"  to="/orange">Orange</Link>
          <Link className="yellow-nav"  to="/yellow">Yellow</Link>
          <Link className="green-nav"  to="/green">Green</Link>
          <Link className="blue-nav" to="/blue">Blue</Link>
          <Link className="indigo-nav"  to="/indigo">Indigo</Link>
          <Link className="violet-nav"  to="/violet">Violet</Link>
          <Link className="home-nav"  to="/">Home</Link>
        </nav>
        <div id="main-section">
          <Routes>
            <Route path="/red" element={<Red />}/>
            <Route path="/orange" element={<Orange />}/>
            <Route path="/yellow" element={<Yellow />}/>
            <Route path="/green" element={<Green />}/>
            <Route path="/blue" element={<Blue />}/>
            <Route path="/indigo" element={<Indigo />}/>
            <Route path="/violet" element={<Violet />}/>
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>
        <footer>
          <ul>
            <li><Link className="red-nav" to="/red">Red</Link></li>
            <li><Link className="orange-nav" to="/orange">Orange</Link></li>
            <li><Link className="yellow-nav" to="/yellow">Yellow</Link></li>
            <li><Link className="green-nav" to="/green">Green</Link></li>
            <li><Link className="blue-nav" to="/blue">Blue</Link></li>
            <li><Link className="indigo-nav" to="/indigo">Indigo</Link></li>
            <li><Link className="violet-nav" to="/violet">Violet</Link></li>
            <li><Link className="home-nav" to="/">Home</Link></li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default App
