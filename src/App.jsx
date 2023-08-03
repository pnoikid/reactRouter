import { Routes, Route, Link } from "react-router-dom";
import './index.css';
import './App.css';
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";

function App() {
  

  return (
    <>
     <div id="container">
      <h1>Hello React Router!</h1>
      <nav id="navbar">
        <ul>
        <li>
          <Link to ="/Home">Home</Link>
          </li>
          <br />
          <li>
          <Link to ="/Blue">Blue</Link>
          </li>
          <br />
          <li>
          <Link to ="/Red">Red</Link>
          </li>
        </ul>
      </nav>
      <div id="main-section">
        <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/blue" element={<Blue/>} />
        <Route path="/red" element={<Red/>} />
        </Routes>
        </div>
    </div>
     
    </>
  );
}

export default App
