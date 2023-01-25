import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default function CountryCard({countryName, flagUrl}) {

  const navigate = useNavigate();
  
  const navigateRecommendation = () => {
    navigate(`/RecommendationPage/${countryName}`);
  };

  return (
 
 <Container>

<Row  className='country-card mb-2  ' onClick={navigateRecommendation } > 
 <Col xs={2}><img className=" country-img" src={flagUrl} alt={countryName}/> </Col>
 <Col> <p> {countryName}</p></Col>
 

</Row>

</Container>  
  )
}

