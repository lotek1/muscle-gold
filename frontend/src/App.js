import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import WorkoutForm from "./components/WorkoutForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adding-new" element={<WorkoutForm />} />
          </Routes>
        </div>
      </BrowserRouter>
      <footer>
        <p>
          Muscle Gold {new Date().getFullYear()} {"\u00b0"}and All That Jazz
        </p>
      </footer>
    </div>
  );
}

export default App;
