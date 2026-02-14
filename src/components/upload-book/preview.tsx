import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdAddPhotoAlternate } from "react-icons/md";
import type { CSSProperties } from "react";

type PreviewFile = File & { preview: string };

const thumbsContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb: CSSProperties = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner: CSSProperties = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img: CSSProperties = {
  display: "block",
  width: "auto",
  height: "100%",
};

export default function Previews() {
  const [files, setFiles] = useState<PreviewFile[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      const mappedFiles = acceptedFiles.map(
        (file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }) as PreviewFile,
      );
      setFiles(mappedFiles);
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt={file.name}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <section className="container flex h-full w-full flex-col items-center justify-around">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p className="text-2xl">Add Images</p>
        <div>
          <MdAddPhotoAlternate className="mx-auto mb-4 text-4xl" />
        </div>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}
