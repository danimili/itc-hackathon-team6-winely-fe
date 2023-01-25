import React from "react";
import App from "../App";
import WineCard from "../components/WineCard";
import "./Recommendation.css"
import { useEffect } from "react";
import axios from "axios";
export default function RecommendationPage() {
  useEffect(()=> {
    axios.get(`http://localhost:8080/search/country?country=${window.location.pathname.split('/')[2]}`)
    .then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <>
      <div className="recommendationPage">
        <h1> Below is a list of recommended wines based on your preference!</h1>
        <div>
          Wine Recommendations:
          <div className="recommendationBoxes">
            <div className="recommendationBox">
              <p>
                {" "}
                France <img src=""></img>{" "}
                <WineCard/>
              </p>{" "}
            </div>
            <div className="recommendationBox">
              <p>
                {" "}
                Italy <img src=""></img>{" "}
                <WineCard/>
              </p>
            </div>
            <div className="recommendationBox">
              <p>
                {" "}
                US <img src=""></img>{" "}
                <WineCard/>
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}














