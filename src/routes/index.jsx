import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import ProtectedRoute from "../features/authentication/components/ProtectedRoute";
import AuthContextProvider from "../context/AuthContext";

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
const UserProfile = lazy(() => import("../pages/ProfilePage"));
const EditProfile = lazy(() => import("../pages/EditProfile"));
const FanQuiz = lazy(() => import("../pages/quiz"));

const router = createBrowserRouter([
  { path: "/", element: <VideoPage /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/chooseyourpath",
    element: <ProtectedRoute element={<ChoosePathPage />} />,
  },
  {
    path: "/cosmic",
    element: <ProtectedRoute element={<RvvMusicVideo />} />,
  },
  {
    path: "/armageddon",
    element: <ProtectedRoute element={<AespaMusicVideo />} />,
  },
  {
    path: "/home-redvelvet",
    element: <ProtectedRoute element={<RvvHome />} />,
  },
  {
    path: "/biography-redvelvet",
    element: <ProtectedRoute element={<RvvBio />} />,
  },
  {
    path: "/FanQuiz",
    element: <ProtectedRoute element={<FanQuiz />} />,
  },
  {
    path: "/concert-redvelvet",
    element: <ProtectedRoute element={<RvvConcert />} />,
  },
  {
    path: "/product-redvelvet",
    element: <ProtectedRoute element={<RvvProduct />} />,
  },
  { path: "/home-aespa", element: <ProtectedRoute element={<AespaHome />} /> },
  {
    path: "/biography-aespa",
    element: <ProtectedRoute element={<AespaBio />} />,
  },
  {
    path: "/concert-aespa",
    element: <ProtectedRoute element={<AespaConcert />} />,
  },
  {
    path: "/product-aespa",
    element: <ProtectedRoute element={<AespaProduct />} />,
  },
  {
    path: "/profile/:userId",
    element: <ProtectedRoute element={<UserProfile />} />,
  },
  {
    path: "/edit-profile",
    element: <ProtectedRoute element={<EditProfile />} />,
  },
]);

export default function Router() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
