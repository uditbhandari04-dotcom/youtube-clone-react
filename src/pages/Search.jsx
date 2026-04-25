// Search.jsx
// Search results page
// Reads the "q" query param from URL and filters videos

import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import videos from "../data/videos.json";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";       // Get search term from URL
  const navigate = useNavigate();

  const [results, setResults] = useState([]);

  // Filter when query change
  useEffect(() => {
    const q = query.toLowerCase();
    const filtered = videos.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.channel.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query]);

  return (
    <div className="search-page">
      <p className="search-heading">
        Showing results for: <span>"{query}"</span> ({results.length} videos)
      </p>

      {results.length === 0 ? (
        <div className="no-results">
          <div className="emoji">🔍</div>
          <p>No videos found for "{query}"</p>
        </div>
      ) : (
        results.map((video) => (
          <div
            key={video.id}
            className="search-result-card"
            onClick={() => navigate(`/video/${video.id}`)}
          >
            {/* Thumbnail */}
            <div className="search-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <span className="duration-badge">{video.duration}</span>
            </div>

            {/* Info */}
            <div className="search-result-info">
              <p className="search-result-title">{video.title}</p>
              <p className="search-result-meta">
                {video.channel} • {video.views} • {video.posted}
              </p>
              <p className="search-result-desc">{video.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Search;