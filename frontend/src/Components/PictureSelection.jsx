import React, { useState } from "react";
import catImage from "../img/cat.jpg";
import horrorImage from "../img/horror.jpg";
import sfImage from "../img/sf.jpg";

const PictureSelection = ({ onSelectPicture }) => {
  const [selectedPicture, setSelectedPicture] = useState(1);

  const handlePictureClick = (pictureId) => {
    setSelectedPicture(pictureId);
    onSelectPicture(pictureId);
  };

  const pictures = [
    { id: 1, fileName: "cat.jpg", src: catImage },
    { id: 2, fileName: "horror.jpg", src: horrorImage },
    { id: 3, fileName: "sf.jpg", src: sfImage },
  ];
  return (
    <div className="flex items-center justify-center">
      {pictures.map((picture) => (
        <img
          key={picture.id}
          src={picture.src}
          alt={`Picture ${picture.id}`}
          className={`cursor-pointer rounded-full p-2 mx-2 ${
            selectedPicture === picture.id ? "border-4 border-[#b4d429]" : ""
          }`}
          style={{ width: "100px", height: "100px" }}
          onClick={() => handlePictureClick(picture.id)}
        />
      ))}
    </div>
  );
};

export default PictureSelection;
