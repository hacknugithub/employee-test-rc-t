import React, { useEffect, useState } from "react";
import { fetchFiles } from "../../features/s3/s3Api";
import { s3File } from "../../types";
import Carousel from "react-bootstrap/Carousel";

type Props = {};

export default function Images({}: Props) {
  const [images, setImages] = useState<s3File[] | undefined>();
  useEffect(() => {
    return () => {
      fetchFiles().then((result) => {
        console.log(result);
        return setImages(result);
      });
    };
  }, []);

  const imagesDisplay = images?.map((image) => (
    <Carousel.Item key={image.ETag}>
      <img
        className="d-block w-100"
        key={image.ETag}
        src={image.publicUrl}
        alt={`slide-${image.Key}`}
      />
      <Carousel.Caption>
        <h3>{image.Key}</h3>
        <p>{image.Size} bytes</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  console.log(images);

  return (
    <div>
      Images
      <Carousel>{imagesDisplay}</Carousel>
    </div>
  );
}
