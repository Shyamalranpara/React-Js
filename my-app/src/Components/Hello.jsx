import React, { useState } from "react";

function Hello() {
  const [showImg, setShowImg] = useState(true);

  const show = () => {
    setShowImg(true); // Show the image
  };

  const close = () => {
    setShowImg(false); // Hide the image
  };

  return (
    <div>
      <h1>Hello React</h1>

      {showImg && (
        <img
          id="img"
          src="https://cdn.pixabay.com/photo/2017/03/27/14/53/canoe-2179196_640.jpg"
          alt=""
        />
      )}

      <br />

      <button id="show" onClick={show}>
        Show Image
      </button>
      <button id="close" onClick={close}>
        Close Image
      </button>
    </div>
  );
}

export default Hello;
