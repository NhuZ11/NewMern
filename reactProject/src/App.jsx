import { useState } from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import { Routes } from "react-router-dom";
import "./App.css";
import Alert from "./Components/Alert";
import Card from "./Components/Card";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Reduce from "./Components/Reduce";
import BlogState from "./context/blogs/BlogState";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);
  const [theme, setTheme] = useState("light");
  const [text, setButtonText] = useState("Enable Dark");
  const [alert, setAlert] = useState(null); // Initialize as null

  const alertShow = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setButtonText("Enable Light");
      alertShow("success", "Dark mode is enabled.");
    } else {
      setTheme("light");
      setButtonText("Enable Dark");
      alertShow("danger", "Light mode is enabled."); // Corrected the message
    }
  };

  return (
    <>
      <div>
      <BlogState apiKey={apiKey} >
        <Router>
          <header>
            <Navbar theme={theme} text={text} toggleTheme={toggleTheme} />
            {alert && <Alert alert={alert} alertShow={alertShow} />}
          </header>
          <Routes>
            
            <Route path="/home" element={<Home />} />
            <Route path="/card" element={<Card apiKey={apiKey} />} />
            <Route path="/about" element={<About />} />
            <Route path="/reduce" element={<Reduce />} />
            
          </Routes>
        </Router>
       </BlogState>
      </div>
    </>
  );
}

export default App;
