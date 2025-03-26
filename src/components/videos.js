import React from "react";

const Videos = ({ src, title, time, className }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <video width="320" height="240" controls>
        <source src={src} type="video/mp4" />
        kan ikke
      </video>
      <p>Varighet: {time}</p>
    </div>
  );
};

export default Videos;
