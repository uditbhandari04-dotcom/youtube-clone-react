// Home.jsx
// Home Page ==== all videos in grid
// Has catg at top
// Ganesh 

import { useState } from "react";
import VideoCard from "../components/VideoCard";
import videos from "../data/videos.json";

// All uniq catg from videos + "ALL"
const categories = ["All", "Programming", "Design", "Tools"];

function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter video ke base pe for selected catg
  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <div className="home-page">
      {/* Catg Filter */}
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-chip ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video ke liye */}
      {filteredVideos.length > 0 ? (
        <div className="video-grid">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <div className="emoji">🎬</div>
          <p>No videos in this category yet.</p>
        </div>
      )}
    </div>
  );
}

export default Home;