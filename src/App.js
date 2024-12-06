import './App.css';
import './main.css';
import LandingPge from './Pages/LandingPage/LandingPage';
import AllProducts from './Pages/AllProducts/AllProducts';
import { Routes, Route } from "react-router-dom";
import { store } from './stateManagment/store/store';
import { Provider } from 'react-redux';


function App() {
  return(
    <>
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<LandingPge/>} />
            <Route path="/allproduct" element={<AllProducts/>} />
        </Routes>
    </Provider>
    </>
);
}

export default App;
