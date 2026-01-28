import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/setting")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center place-content-center h-screen w-screen">
      Profile
    </div>
  );
}
