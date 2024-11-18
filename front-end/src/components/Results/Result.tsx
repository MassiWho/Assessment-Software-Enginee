import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';
import './Result.css';

export const Result: React.FC<{ data: { urls: { thumb: string }; author: string } }> = ({
  data,
}) => {
  const [loading, setLoading] = useState(true);
  const [loadingFull, setLoadingFull] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function handleClick() {
    setIsFullscreen(true);
  }

  function closeFullscreen() {
    setIsFullscreen(false);
  }

  return (
    <>
      {loading && <Spinner />}
      <Image
        className={`image-wrapper ${loading ? 'hidden' : ''}`}
        src={data.urls.thumb}
        onClick={handleClick}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />

      {/* Modal for fullscreen image */}
      {isFullscreen && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <div className="fullscreen-image-container" onClick={(e) => e.stopPropagation()}>
            {loadingFull && <Spinner />}
            <Image
              className={`${loadingFull ? 'hidden' : ''}`}
              src={data.urls.full}
              className="fullscreen-image"
              onClick={closeFullscreen}
              onLoad={() => setLoadingFull(false)}
              onError={() => setLoadingFull(false)}
            />
            <div className="image-details">
              <p>{`Author: ${data.user.username}`}</p>
              <p>{`Likes: ${data.likes}`}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
