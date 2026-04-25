// Video.jsx
// Video player page
// Shows an embedded YouTube iframe + video details + related videos

import { useParams, useNavigate } from "react-router-dom";
import videos from "../data/videos.json";

function Video() {
  const { id } = useParams();       // Get the video id from the URL
  const navigate = useNavigate();

  // Find the video that matches the id
  const video = videos.find((v) => v.id === id);

  // If video not found, show a message
  if (!video) {
    return (
      <div className="not-found">
        <h1>😢</h1>
        <h2>Video not found</h2>
        <p>The video you are looking for doesn't exist.</p>
        <button className="back-home-btn" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    );
  }

  // Related videos = all videos except the current one
  const relatedVideos = videos.filter((v) => v.id !== id);

  // First letter of channel name for avatar
  const avatarLetter = video.channel.charAt(0).toUpperCase();

  return (
    <div className="video-page">
      {/* LEFT: Main video area */}
      <div className="video-main">
        {/* YouTube Embed Player */}
        <div className="player-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allowFullScreen
          />
        </div>

        {/* Video Title */}
        <div className="video-details">
          <h1 className="video-page-title">{video.title}</h1>

          <div className="video-page-meta">
            <span>{video.views}</span>
            <span>•</span>
            <span>{video.posted}</span>
            <span>•</span>
            <span>{video.category}</span>
          </div>

          <hr className="divider" />

          {/* Channel Info + Subscribe */}
          <div className="channel-row">
            <div className="channel-info">
              <div className="channel-avatar">{avatarLetter}</div>
              <div>
                <div className="channel-name">{video.channel}</div>
                <div className="channel-sub">1.2M subscribers</div>
              </div>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>

          {/* Description */}
          <div className="description-box">
            <strong>Description</strong>
            <p style={{ marginTop: "8px" }}>{video.description}</p>
          </div>
        </div>
      </div>

      {/* RIGHT: Related Videos */}
      <div className="related-videos">
        <h3 className="related-heading">Up Next</h3>

        {relatedVideos.map((v) => (
          <div
            key={v.id}
            className="related-card"
            onClick={() => navigate(`/video/${v.id}`)}
          >
            {/* Related thumbnail */}
            <div className="related-thumbnail">
              <img src={v.thumbnail} alt={v.title} />
              <span className="duration-badge">{v.duration}</span>
            </div>

            {/* Related info */}
            <div className="related-info">
              <p className="related-title">{v.title}</p>
              <p className="related-channel">{v.channel}</p>
              <p className="related-meta">{v.views} • {v.posted}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;