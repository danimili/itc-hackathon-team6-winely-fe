import React from "react";
import App from "../App";
import WineCard from "../components/WineCard";
import "./Recommendation.css"
import { useContext } from "react";
import AppContext from "../AppContext";

export default function RecommendationPage() {

  const {searchResults, wineDetails, setWineDetails} = useContext(AppContext);
  const wines = {};
  searchResults.forEach(result => wines["id"] = result);
  setWineDetails(wines);

  return (
    <>
      <div className="recommendationPage">
        <h1> Below is a list of recommended wines based on your preference!</h1>
        <div>
          Wine Recommendations:
          <div className="Wine"> 
        {searchResults.map(item => (
        <div  key={item.id} className="wineCard"><WineCard {...item}/></div>
        ))}
    </div>
         
        </div>
      </div>
    </>
  );
}














