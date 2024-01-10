import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";


function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
