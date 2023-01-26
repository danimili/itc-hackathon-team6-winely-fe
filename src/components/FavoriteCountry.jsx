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
