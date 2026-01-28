import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaUpload } from "react-icons/fa";
import TitleBox from "@/components/shadcn-studio/textarea/text-box";
export default function UploadBook() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <div className="flex flex-col justify-around items-center h-4/5  w-screen m-auto p-8 gap-8">
        <TitleBox labeltext="Book Title" />
        <TitleBox labeltext="Description" />
        <div
          className="border-4 border-dashed border-gray-300  text-black p-8 rounded shadow-lg"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <FaUpload className="mx-auto mb-4 text-4xl" />
          {isDragActive ? <p>Drop the files here ...</p> : <p>Add Photos</p>}
        </div>
      </div>
    </>
  );
}
