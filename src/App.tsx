import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
import Homepage from "./Pages/Homepage/Homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="home" element={<Homepage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
