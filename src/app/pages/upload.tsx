import React, { useCallback, useState } from "react";
import Dropzone from "../components/Dropzone";
import { Button } from "react-bootstrap";
import cuid from "cuid";
import ImageGride from "../components/ImageGride";
import { Image } from "../../types";
import { uploadFile } from "../../features/s3/s3Api";

type Props = {};

export default function Upload({}: Props) {
  const [images, setImages] = useState<Array<Image>>([]);
  const [files, setFiles] = useState<Array<File>>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map((file: Blob) => {
      const reader = new FileReader();
      console.log(file);
      setFiles((prevState: any) => [...prevState, file]);
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

  const handleUpdateFiles = (files: File[]): void => {
    console.log(files);
    const updatedFiles = files.map((file) => {
      uploadFile(file);
    });
    console.log(updatedFiles);
  };

  console.log(images.length);

  return (
    <div className="container text-center">
      <h1>Upload</h1>
      <Dropzone
        open={function (): void {
          console.log("Function not implemented.");
        }}
        onDrop={onDrop}
        accept={acceptedFiles}
      />
      <ImageGride images={images} />
      {images.length > 0 ? (
        <Button onClick={() => handleUpdateFiles(files)}>Upload Files</Button>
      ) : (
        ""
      )}
    </div>
  );
}
