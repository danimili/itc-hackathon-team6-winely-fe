import React from 'react'
import winecard from "./Images/winecard.jpg"
import './WineCard.css'

export default function WineCard() {
  return (
    <>
    <div className="card">
      <img className="card-image" src={winecard}/>
      <div className="container">
        <h3><b>Vie di Romans</b></h3>
        <h4>Pinot Grigio</h4>
        <h4>Italy</h4>
      </div>
    </div>
    </>
  )
}
