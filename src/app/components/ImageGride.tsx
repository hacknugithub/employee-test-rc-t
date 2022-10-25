import React from "react";
import { Image as ImageType, Images } from "../../types";

const Image = ({ image }: ImageType) => {
  return (
    <div className="file-item">
      <img src={image.src} alt={`img - ${image.id}`} className="file-img" />
    </div>
  );
};

const ImageGride = ({ images }: Images) => {
  const renderImage = ({ image }: ImageType) => {
    console.log(image);
    return <Image image={image} key={`${image.id}-image`} />;
  };
  return (
    <section className="file-list">{images.map((i) => renderImage(i))}</section>
  );
};

export default ImageGride;
