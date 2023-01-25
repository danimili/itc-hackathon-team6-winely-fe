import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import AppContext from './AppContext';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import WinePage from './pages/WinePage'
import RecommendationPage from './pages/RecommendationPage';

function App() {

  
  return (
    <>
    <AppContext.Provider value={{}}>
      <Routes>
        <Route index element={<LandingPage/>}/>
        <Route path="/Search" element = {<SearchPage/> } ></Route>
        <Route path="/RecommendationPage" element = {<RecommendationPage/>}></Route>
        <Route path="/Wines" element = {<WinePage/>}></Route>
        
      </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
