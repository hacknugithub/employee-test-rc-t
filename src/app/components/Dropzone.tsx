import React from "react";
import {
  DropzoneRef,
  useDropzone,
  Accept,
  FileRejection,
  DropEvent,
} from "react-dropzone";

type Props = {
  onDrop: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => void;
  accept: Accept | undefined;
  open: () => void;
};

export default function Dropzone({ onDrop, accept, open }: Props) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });

  const files = acceptedFiles.map((file) => (
    <li className="file-list-item" key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
            Drag and drop some files here, or click to select files
          </p>
        )}
        <button type="button" onClick={open} className="btn">
          Click to select files
        </button>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}
