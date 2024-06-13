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
const RvvProduct = lazy(() => import("../pages/rvvProduct"));
const AespaHome = lazy(() => import("../pages/aespa-home"));
const AespaBio = lazy(() => import("../pages/aespaBiography"));
const AespaConcert = lazy(() => import("../pages/aespaConcert"));
const AespaProduct = lazy(() => import("../pages/aespaProduct"));

const router = createBrowserRouter([
  { path: "/", element: <VideoPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/chooseyourpath", element: <ChoosePathPage /> },
  { path: "/chillkill", element: <RvvMusicVideo /> },
  { path: "/armageddon", element: <AespaMusicVideo /> },
  { path: "/home-redvelvet", element: <RvvHome /> },
  { path: "/biography-redvelvet", element: <RvvBio /> },
  { path: "/concert-redvelvet", element: <RvvConcert /> },
  { path: "/product-redvelvet", element: <RvvProduct /> },
  { path: "/home-aespa", element: <AespaHome /> },
  { path: "/biography-aespa", element: <AespaBio /> },
  { path: "/concert-aespa", element: <AespaConcert /> },
  { path: "/product-aespa", element: <AespaProduct /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
