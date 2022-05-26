import React from "react";

import LoadingGif from "../assets/images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>rooms is loading...</h4>
      <img src={LoadingGif} alt="" />
    </div>
  );
};

export default Loading;
