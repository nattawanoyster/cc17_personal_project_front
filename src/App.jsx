import Routerr from "./routes";
import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoPage from "../src/pages/VideoPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Suspense fallback={<h1> loadind </h1>}>
      <Routerr />
    </Suspense>
  );
}

export default App;
