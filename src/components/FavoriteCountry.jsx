import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AppContext from '../AppContext';
import { useContext } from 'react';


export default function FavoriteCountry({countryName, flagUrl}) {

  const navigate = useNavigate();
  const { setSearchResults } = useContext(AppContext);
  const handleCountrySearch = async e => {
    e.preventDefault();
    try {
        const res = await axios.get(
            `http://localhost:8080/search/country?country=${countryName}`
        );
        console.log(res);
        setSearchResults(res.data);
    } catch (err) {
        alert(err);
    }
    navigate("/RecommendationPage");
};

  return (
 

    <Row  className='favorite-country' onClick={handleCountrySearch} > 
      <img className=" fav-country-img" src={flagUrl} alt={countryName}/> 
     <p className='favorite-country-name'> {countryName}</p> 
    </Row>
      )
    }
    

    



 
=======
import React from "react";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

export default function FavoriteCountry({ countryName, flagUrl }) {
    const navigate = useNavigate();

    const navigateRecommendation = () => {
        navigate(`/RecommendationPage/${countryName}`);
    };

    return (
        <Row className="favorite-country" onClick={navigateRecommendation}>
            <img className=" fav-country-img" src={flagUrl} alt={countryName} />
            <p className="favorite-country-name"> {countryName}</p>
        </Row>
    );
}
