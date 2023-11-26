import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="projects" element={<Projects />} />

          <Route path="contact" element={<Contact />} />

          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
