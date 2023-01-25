
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
 import CountryCard from "./CountryCard";

// import EditPetModal from'./EditPetModal';
// const contryNames = ['argentina','australia', 'germany', 'hungary', 'italy', 'spain', 'unitedStates'] ;
 
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
    
      <Row  className="m-0"  >
    
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

      {/* <EditPetModal show={show} handleClose={handleClose}  petInfo={petInfo}/> */}
    </>
  );
}

export default AllCountries;
 

// import React from 'react'

// export default function AllCountries() {
//   return (
//     <div>AllCountries</div>
//   )
// }



// const [petInfo, setPetinfo] = useState({})
//    const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true)
  // console.log("petList --------------- ",  petList);