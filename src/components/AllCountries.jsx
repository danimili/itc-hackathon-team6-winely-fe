
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
 import CountryCard from "./CountryCard";

 
const contryNames = [
  {countryName:'greece', flagUrl:'../flagImages/greece.png'},
  {countryName:'austria', flagUrl:'../flagImages/austria.png'},
  {countryName:'mexico', flagUrl:'../flagImages/mexico.png'},
  {countryName:'israel', flagUrl:'../flagImages/israel.png'},
  {countryName:'argentina', flagUrl:'../flagImages/argentina.png'},
  {countryName:'australia', flagUrl:'../flagImages/australia.png'},
  {countryName:'germany', flagUrl:'../flagImages/germany.png'},
  {countryName:'portugal', flagUrl:'../flagImages/portugal.png'},
  {countryName:'hungary', flagUrl:'../flagImages/hungary.png'},
  {countryName:'italy', flagUrl:'../flagImages/italy.png'},
  {countryName:'spain', flagUrl:'../flagImages/spain.png'},
  {countryName:'unitedStates', flagUrl:'../flagImages/unitedStates.png'},
  {countryName:'chile', flagUrl:'../flagImages/chile.png'},
  {countryName:'south-africa', flagUrl:'../flagImages/south-africa.png'},
] ;
  

function AllCountries( ) {


  return (
    <>
    <div className="wrap">
     <Container >
      <Row  className="m-0"  >

      <Col  > <h3 className="headline mb-3">All cultures</h3></Col>

        {contryNames.map((country) => (
          <Col key={country.countryName} md={12} lg={12}    className="m-0"    >
            <CountryCard    className="m-0" 

             countryName={country.countryName}
              flagUrl={country.flagUrl}
        
            //   handleShow={handleShow}
            //   setPetinfo={setPetinfo}
            />
          </Col>
        ))}
      </Row>
      </Container></div>
    </>
  );
}

export default AllCountries;