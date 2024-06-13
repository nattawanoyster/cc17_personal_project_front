import Routerr from "./routes";
import React from "react";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import VideoPage from "../src/pages/VideoPage";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <AuthContextProvider>
      <Suspense fallback={<h1> loadind </h1>}>
        <Routerr />
        <ToastContainer position="bottom-right" autoClose={8000} />
      </Suspense>
    </AuthContextProvider>
  );
}

export default App;
