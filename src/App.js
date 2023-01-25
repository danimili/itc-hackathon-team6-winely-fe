import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import AppContext from './AppContext';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';

function App() {

  
  return (
    <>
    <AppContext.Provider>
      <Routes>
        <Route path="/" element = {<LandingPage/>}></Route>
        <Route path="/Search" element = {<SearchPage/> } ></Route>
        <Route path="/RecommendationPage" element = {<RecommendationPage/>}></Route>
        <Route path="/Wines" element = {<WinePage/>}></Route> 
      </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
