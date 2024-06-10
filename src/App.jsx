import Routerr from "./routes";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoPage from "../src/pages/VideoPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routerr>
      <Routes>
        <Route path="/loading" element={<VideoPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Routerr>
  );
}

export default App;
