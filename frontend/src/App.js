import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import WorkoutForm from "./components/WorkoutForm";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workout-form" element={<WorkoutForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
      <footer>
        <p>
          Muscle Gold {new Date().getFullYear()} {"\u00b0"}and All That Sweat
        </p>
      </footer>
    </div>
  );
}

export default App;
