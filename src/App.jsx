import { Routes, Route, Link } from "react-router-dom";
import './index.css'
import './App.css'
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
          <Link to ="/blue">Blue</Link>
          </li>
          <br />
          <li>
          <Link to ="/red">Red</Link>
          </li>
        </ul>
      </nav>
      <div id="main-section">
        <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/blue" element={<h1>Blue</h1>} />
     <Route path="/red" element={<h1>Red</h1>} />
        </Routes>
        </div>
    </div>
     
    </>
  );
}

export default App
