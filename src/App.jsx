// App.jsx
// Root component - sets up routing and dark mode
// All pages are connected here via React Router
// Udit Bhandari

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Search from "./pages/Search";

function App() {
  // Dark mode state - controls the "dark" class on the whole app
  const [darkMode, setDarkMode] = useState(false);

  return (
    // Add "dark" class to root div when dark mode is ON
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <div className="app-layout">

          {/* Navbar at the top - gets darkMode so it can show the right icon */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <div className="main-content">
            {/* Sidebar on the left */}
            <Sidebar />

            {/* Main page area - changes based on URL */}
            <main className="page-content">
              <Routes>
                {/* Home: shows video grid */}
                <Route path="/" element={<Home />} />

                {/* Video Player: /video/1, /video/2, etc. */}
                <Route path="/video/:id" element={<Video />} />

                {/* Search: /search?q=react */}
                <Route path="/search" element={<Search />} />
              </Routes>
            </main>
          </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;