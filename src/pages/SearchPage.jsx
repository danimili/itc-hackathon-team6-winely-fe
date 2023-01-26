import React from 'react'
import Search from '../components/Search'
import AllCountries from'../components/AllCountries';
import FavoriteCountries from'../components/FavoriteCountries';
import bgPic from "../components/Images/dan-meyers-0AgtPoAARtE-unsplash.jpg";
import './SearchPage.css';
export default function SearchPage() {
  return (
    <>
       <img className="bgPic" src={bgPic} alt="bgPic" style={{ position: 'fixed', width:'100%',  zIndex:-3  }}  />

    <Search/>
    <FavoriteCountries/>
    <AllCountries/>

    </>
  )
}
