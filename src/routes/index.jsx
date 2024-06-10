import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const VideoPage = lazy(() => import("../pages/VideoPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const router = createBrowserRouter([
  { path: "/loading", element: <VideoPage /> },
  { path: "/login", element: <LoginPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
