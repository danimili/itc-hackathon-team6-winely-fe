import React from "react";
import Card from "react-bootstrap/Card";
import WineCard from "../components/WineCard";

export default function RecommendationPage() {
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
              </p>{" "}
            </div>
            <div className="recommendationBox">
              <p>
                {" "}
                Italy <img src=""></img>{" "}
              </p>
            </div>
            <div className="recommendationBox">
              <p>
                {" "}
                US-+ <img src=""></img>{" "}
              </p>
            </div>
          </div>
          <WineCard/>
        </div>
      </div>
    </>
  );
}














