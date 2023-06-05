import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sign from "./pages/Sign/Sign";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Sign />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
