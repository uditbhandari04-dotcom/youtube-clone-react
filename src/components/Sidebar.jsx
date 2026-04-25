// Sidebar.jsx
// Left sidebar navigation with links
// Udit Bhandari

import { useNavigate, useLocation } from "react-router-dom";

// Sidebar navigation items
const mainItems = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "🔥", label: "Trending", path: "/search?q=trending" },
  { icon: "📺", label: "Subscriptions", path: "/search?q=programming" },
];

const exploreItems = [
  { icon: "🎵", label: "Music", path: "/search?q=music" },
  { icon: "🎮", label: "Gaming", path: "/search?q=gaming" },
  { icon: "📰", label: "News", path: "/search?q=news" },
  { icon: "🏋️", label: "Sports", path: "/search?q=sports" },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(path) {
    navigate(path);
  }

  return (
    <aside className="sidebar">
      {/* Main navigation */}
      <div className="sidebar-section">
        {mainItems.map((item) => (
          <div
            key={item.label}
            className={`sidebar-item ${location.pathname === item.path ? "active" : ""}`}
            onClick={() => handleClick(item.path)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Explore section */}
      <div className="sidebar-section">
        <div className="sidebar-section-title">Explore</div>
        {exploreItems.map((item) => (
          <div
            key={item.label}
            className="sidebar-item"
            onClick={() => handleClick(item.path)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;