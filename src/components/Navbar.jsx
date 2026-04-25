// Navbar.jsx
// Top navigation bar with logo, search, and dark mode toggle
// Udit Bhandari

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // When user submits search
  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  }

  // Go home when logo is clicked
  function goHome() {
    navigate("/");
  }

  return (
    <nav className="navbar">
      {/* LEFT: Logo */}
      <div className="navbar-left">
        <div className="navbar-logo" onClick={goHome} style={{ cursor: "pointer" }}>
          <span className="logo-icon">▶️</span>
          <span>YT Lite</span>
        </div>
      </div>

      {/* CENTER: Search Bar */}
      <form className="navbar-center" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn" type="submit">🔍</button>
      </form>

      {/* RIGHT: Dark Mode Toggle */}
      <div className="navbar-right">
        <button
          className="icon-btn"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Light Mode" : "Dark Mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;