import Routerr from "./routes";
import React from "react";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import Spinner from "./components/Spinner";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import VideoPage from "../src/pages/VideoPage";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Suspense
      fallback={
        <h1>
          {" "}
          <Spinner />{" "}
        </h1>
      }
    >
      <AuthContextProvider>
        <Routerr />
        <ToastContainer position="bottom-right" autoClose={8000} />
      </AuthContextProvider>
    </Suspense>
  );
}

export default App;
