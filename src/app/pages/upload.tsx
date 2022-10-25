import React, { useCallback, useState } from "react";
import Dropzone from "../components/Dropzone";
import cuid from "cuid";
import ImageGride from "../components/ImageGride";
import { Image } from "../../types";

type Props = {};

export default function Upload({}: Props) {
  const [images, setImages] = useState<Array<Image>>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map((file: Blob) => {
      const reader = new FileReader();
      console.log(file);
      reader.onload = (ev: ProgressEvent<FileReader>): void => {
        const image: Image = { image: { id: cuid(), src: ev.target?.result } };
        setImages((prevState: any) => [...prevState, image]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const acceptedFiles = {
    "image/*": [],
  };

  return (
    <div>
      Upload
      <Dropzone
        open={function (): void {
          console.log("Function not implemented.");
        }}
        onDrop={onDrop}
        accept={acceptedFiles}
      />
      <ImageGride images={images} />
    </div>
  );
}
