import './App.css';
import './main.css';
import LandingPge from './Pages/LandingPage/LandingPage';
import AllProducts from './Pages/AllProducts/AllProducts';
import { Routes, Route } from "react-router-dom";


function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<LandingPge/>} />
        <Route path="/allproduct" element={<AllProducts/>} />
    </Routes>
    </>
);
}

export default App;
