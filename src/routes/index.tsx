import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center place-content-center h-screen w-screen">
      Welcome To Booksbay
    </div>
  );
}
