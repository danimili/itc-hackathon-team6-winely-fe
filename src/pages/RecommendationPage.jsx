import React from "react";
// import App from "../App";
import WineCard from "../components/WineCard";
import "./Recommendation.css";
import { useContext, useEffect } from "react";
import AppContext from "../AppContext";

export default function RecommendationPage() {
    const { searchResults, setWineDetails } = useContext(AppContext);
    useEffect(() => {
        const wines = {};
        searchResults.forEach(result => (wines[result.id] = result));
        console.log(wines);
        setWineDetails(wines);
    }, [searchResults, setWineDetails]);

    return (
        <>
            <div className="recommendationPage">
                <h1>
                    {" "}
                    Below is a list of recommended wines based on your
                    preference!
                </h1>
                <div>
                    Wine Recommendations:
                    <div className="recommendationBoxes">
                        {searchResults.map(item => (
                            <div key={item.id} className="wineCard">
                                <WineCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
