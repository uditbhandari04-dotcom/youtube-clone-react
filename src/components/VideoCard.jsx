// VideoCard.jsx
// Displays a single video card in the grid
// Receives a "video" object as prop
// Aaryan Tandel 

import { useNavigate } from "react-router-dom";

function VideoCard({ video }) {
  const navigate = useNavigate();

  // When card is clicked, go to the video player page
  function handleClick() {
    navigate(`/video/${video.id}`);
  }

  return (
    <div className="video-card" onClick={handleClick}>
      {/* Thumbnail */}
      <div className="thumbnail-wrapper">
        <img src={video.thumbnail} alt={video.title} />
        <span className="duration-badge">{video.duration}</span>
      </div>

      {/* Info below thumbnail */}
      <div className="video-info">
        <p className="video-title">{video.title}</p>
        <p className="video-channel">{video.channel}</p>
        <p className="video-meta">{video.views} • {video.posted}</p>
      </div>
    </div>
  );
}

export default VideoCard;