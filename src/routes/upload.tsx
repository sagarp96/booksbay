import { createFileRoute } from "@tanstack/react-router";
import UploadBook from "../components/upload-book/upload";

export const Route = createFileRoute("/upload")({
  component: UploadBook,
});
