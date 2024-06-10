import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
// import rvvMusicVideo from "../pages/rvvMusicVideo";

const VideoPage = lazy(() => import("../pages/VideoPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ChoosePathPage = lazy(() => import("../pages/ChoosePathPage"));
const RvvMusicVideo = lazy(() => import("../pages/rvvMusicVideo"));

const router = createBrowserRouter([
  { path: "/", element: <VideoPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/chooseyourpath", element: <ChoosePathPage /> },
  { path: "/chillkill", element: <RvvMusicVideo /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
