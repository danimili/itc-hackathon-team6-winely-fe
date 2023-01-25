import React from 'react'
import winecard from "./Images/winecard.jpg"
import './WineCard.css'
import { IoIosWine } from "react-icons/io"
import Tooltip from '@mui/material/Tooltip';

export default function WineCard() {

  const toWinePage = async (e) => {
    e.stopPropagation();
    try {

    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <>
    <div className="card">
      <img className="card-image" src={winecard}/>
      <div className="container">
        <h3><b>Vie di Romans</b></h3>
        <h4>Pinot Grigio</h4>
        <h4>Italy</h4>
        <Tooltip title="Details">
            <div onClick={toWinePage}>
              <IoIosWine size={30} />
            </div>
          </Tooltip>
      </div>
    </div>
    </>
  )
}
