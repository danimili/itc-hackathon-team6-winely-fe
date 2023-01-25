import React from 'react'
import Card from "react-bootstrap/Card";

export default function RecommendationPage() {
  return (
    <>
    <div className="RecommendationPage">
    <h1> Below is a list of recommended wines based on your preference!</h1>
     <div>Wine Recommendations:
      <div className="recommendationBox">
        <p> France <img src=""></img> </p> <p> <img></img> US </p> <p> <img></img> Italy</p>
      </div>
      {/* <WineCard></WineCard> */}
     </div>
     </div>
     </>
  )
}
