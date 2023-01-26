
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
     <div className="wrap">
    <Container className="  mb-4 FavoriteCountrys">
    <Row  className="m-0"  >
    <Col  > <h3 className="headline">Most wanted </h3></Col>
    </Row>


    <Row  className="m-0"  >
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
 </Row>
</Container>
</div>

      {/* <EditPetModal show={show} handleClose={handleClose}  petInfo={petInfo}/> */}
    </>
  );
}

export default FavoriteCountries;
  


