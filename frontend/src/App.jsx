import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  

  return (
    <div className="App">
      <BrowserRouter> 
      <Navbar />
      <div className="pages">
        <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
