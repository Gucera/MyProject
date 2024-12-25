import React, { useState } from "react";
import Happy from "./Happy.png";
import Sad from "./Sad.png";
import Like from "./Like.png";

function DynamicImageComponent() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    setInput(value);

    if (value === "happy") setImage(Happy);
    else if (value === "like") setImage(Like);
    else if (value === "sad") setImage(Sad);
    else setImage(null);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type 'Happy', 'Like', or 'Sad'"
        value={input}
        onChange={handleChange}
      />
      {image && <img src={image} alt={input} />}
    </div>
  );
}

export default DynamicImageComponent;
