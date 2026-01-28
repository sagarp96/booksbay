import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="flex justify-around place-content-center h-16 w-screen fixed bottom-0 bg-gray-200 p-4">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link
          to="/upload"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Upload
        </Link>
        <Link
          to="/setting"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Account
        </Link>
      </div>
      <Outlet />
      {/*<TanStackRouterDevtools position="bottom-right" />*/}
    </>
  );
}
