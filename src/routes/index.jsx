import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const VideoPage = lazy(() => import("../pages/VideoPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ChoosePathPage = lazy(() => import("../pages/ChoosePathPage"));
const rvvMusicVideo = lazy(() => import("../pages/rvvMusicVideo"));

const router = createBrowserRouter([
  { path: "/loading", element: <VideoPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/chooseyourpath", element: <ChoosePathPage /> },
  { path: "/chillkill", element: <rvvMusicVideo /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
