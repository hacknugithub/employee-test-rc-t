import ReactS3Client from "react-aws-s3-typescript";
import { s3Config } from "../../s3Config";
import { s3File } from "../../types";

export const uploadFile = async (file: File) => {
  const s3 = new ReactS3Client(s3Config);

  const filename = file?.name;

  try {
    const res = await s3.uploadFile(file, filename);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchFiles = async () => {
  const s3 = new ReactS3Client(s3Config);
  try {
    const fileList = await s3.listFiles();
    console.log(fileList.data.Contents);
    return parseFilesFromS3(fileList.data.Contents as s3File[]);
  } catch (error) {
    console.log(error);
  }
};

const parseFilesFromS3 = (files: s3File[]) => {
  const result = files.filter((file) => {
    return file.Size > 0;
  });
  return result;
};
