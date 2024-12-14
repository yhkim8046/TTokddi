import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App_main from "./pages/App/App_main";
import Web_main from "./pages/Web/Web_main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<App_main />} />
            <Route path="/App_main" element={<App_main />} />
            <Route path="/Web_main" element={<Web_main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
