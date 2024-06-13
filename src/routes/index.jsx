import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
// import rvvMusicVideo from "../pages/rvvMusicVideo";

const VideoPage = lazy(() => import("../pages/VideoPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ChoosePathPage = lazy(() => import("../pages/ChoosePathPage"));
const RvvMusicVideo = lazy(() => import("../pages/rvvMusicVideo"));
const AespaMusicVideo = lazy(() => import("../pages/aespaMusicVideo"));
const RvvHome = lazy(() => import("../pages/redvelvet-home"));
const RvvBio = lazy(() => import("../pages/rvvBiography"));
const RvvConcert = lazy(() => import("../pages/rvvConcert"));

const router = createBrowserRouter([
  { path: "/", element: <VideoPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/chooseyourpath", element: <ChoosePathPage /> },
  { path: "/chillkill", element: <RvvMusicVideo /> },
  { path: "/armageddon", element: <AespaMusicVideo /> },
  { path: "/home-redvelvet", element: <RvvHome /> },
  { path: "/biography-redvelvet", element: <RvvBio /> },
  { path: "/concert-redvelvet", element: <RvvConcert /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
