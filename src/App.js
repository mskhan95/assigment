import "./App.css";
import React from "react";
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          width: "375px",
          height: "100%",
          textAlign: "left",
        }}
      >
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
