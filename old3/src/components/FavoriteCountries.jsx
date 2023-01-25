
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
 import FavoriteCountry from "./FavoriteCountry";

const contryNames = [
  {countryName:'argentina', flagUrl:'../flagImages/argentina.png'},
  {countryName:'australia', flagUrl:'../flagImages/australia.png'},
  {countryName:'germany', flagUrl:'../flagImages/germany.png'},
  {countryName:'hungary', flagUrl:'../flagImages/hungary.png'},
  {countryName:'italy', flagUrl:'../flagImages/italy.png'},
  {countryName:'spain', flagUrl:'../flagImages/spain.png'},
  {countryName:'unitedStates', flagUrl:'../flagImages/unitedStates.png'},
] ;

const favContries = contryNames.filter(object => 
  object.countryName === 'argentina' ||
  object.countryName === 'italy'     || 
  object.countryName === 'spain'    
  );

 console.log(favContries);
 
function FavoriteCountries( ) {

  return (
    <>
    <Container className="d-flex mb-4 FavoriteCountrys">
 
    {favContries.map((country) => (
  <Col key={country.countryName}
  //  md={2} lg={2}     
     >
    <FavoriteCountry      
     countryName={country.countryName}
      flagUrl={country.flagUrl}

    />   
  </Col>
))}
 
</Container>


      {/* <EditPetModal show={show} handleClose={handleClose}  petInfo={petInfo}/> */}
    </>
  );
}

export default FavoriteCountries;
  






{/* <Row>
  
{favContries.map((country) => (
  <Col key={country.countryName} md={12} lg={12}       >
    <FavoriteCountry      
     countryName={country.countryName}
      flagUrl={country.flagUrl}

    />   
  </Col>
))}
</Row>   */}



{/* <Container>
{favContries.map((country) => (
<Col key={country.countryName} md={2} lg={2}       >
<FavoriteCountry      
 countryName={country.countryName}
  flagUrl={country.flagUrl}

/>   
</Col>
))}

</Container> */}