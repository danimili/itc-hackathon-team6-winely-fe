import React, { useContext } from 'react';
import './WinePage.css';
import winecard from '../components/Images/winecard.jpg';
import AppContext from '../AppContext';



export default function WinePage() {



  return (
    <>
      <div className="wine-page-card">
        <div className="wine-card-top">
          <img className="wine-card-img" src={winecard} alt="Avatar" />
          <div className="wine-card-top-txt">
            <div className="wine-card-txt"><b>Name: Vie di Romans</b></div>
            <div className="wine-card-txt"><b>Type: Pinot Grigio</b></div>
            <div className="wine-card-txt"><b>Origin: Italy</b></div>
          </div>
        </div>
        <div className="wine-card-txt">More Details:</div>
        <div className="wine-card-txt">More Details:</div>
        <div className="wine-card-txt">More Details:</div>
      </div>
    </>
  )
}
