import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default function FavoriteCountry({countryName, flagUrl}) {

  const navigate = useNavigate();
  
  const navigateRecommendation = () => {
    navigate(`/RecommendationPage/${countryName}`);
  };

  return (
 
 

<Row
className="favorite-country"
onClick={navigateRecommendation } > 
  <img className=" country-img-fav" src={flagUrl} alt={countryName}/> 
 <p> {countryName}</p> 
</Row>


  )
}









     {/* <img className=" " src={argentina}  />  */}
     {/* <img className=" " src={../flagImages/argentina.png}  /> */}
     {/* <img src="../flagImages/argentina.png"  /> */}
    {/* <img className=" " src={"./flagImages/argentina.png"} /> */}
    {/* <img src="../flagImages/argentina.png"  /> */}
 