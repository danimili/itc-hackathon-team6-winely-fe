
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
 import CountryCard from "./CountryCard";

 
const contryNames = [
  {countryName:'argentina', flagUrl:'../flagImages/argentina.png'},
  {countryName:'australia', flagUrl:'../flagImages/australia.png'},
  {countryName:'germany', flagUrl:'../flagImages/germany.png'},
  {countryName:'hungary', flagUrl:'../flagImages/hungary.png'},
  {countryName:'italy', flagUrl:'../flagImages/italy.png'},
  {countryName:'spain', flagUrl:'../flagImages/spain.png'},
  {countryName:'unitedStates', flagUrl:'../flagImages/unitedStates.png'},

] ;


function AllCountries( ) {

 
  return (
    <>
      <Row>
        
        {contryNames.map((country) => (
          <Col key={country.countryName} md={12} lg={12}       >
            <CountryCard  

             countryName={country.countryName}
              flagUrl={country.flagUrl}
  
            />
          </Col>
        ))}
      </Row>

 
    </>
  );
}

export default AllCountries;
 
 