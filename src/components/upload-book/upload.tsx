import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Preview from "./preview";
import InputLabelDemo from "@/components/shadcn-studio/input/input-02";
import TextareaAutoGrowDemo from "@/components/shadcn-studio/textarea/textarea-17";
import { IonButton } from "@ionic/react";
import { Button } from "../ui/button";
export default function UploadBook() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });
  return (
    <>
      <div className="flex flex-col justify-around items-center h-4/5  w-screen m-auto p-8 gap-8">
        <InputLabelDemo Title="Title" Placeholder="Title" />
        <TextareaAutoGrowDemo />
        <div
          className="border-4 flex items-center justify-center gap-5 flex-col border-dashed border-gray-300  text-black p-8 rounded shadow-lg w-l"
          {...getRootProps()}
        >
          <Preview />

          {/*<div>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-center">Drop the files here ...</p>
            ) : (
              <p>Add Photos</p>
            )}
          </div>*/}
          {/*<div>
            <MdAddPhotoAlternate className="mx-auto mb-4 text-4xl" />
          </div>*/}
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button>Preview</Button>
          <Button>Upload</Button>
          <Button>Delete</Button>
        </div>
      </div>
    </>
  );
}
