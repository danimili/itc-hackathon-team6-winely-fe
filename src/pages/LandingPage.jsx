import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LandingPage.css";
import RecommendationPage from "./RecommendationPage";

export default function LandingPage() {
    const navigate = useNavigate();

    const handleStart = async () => {
        navigate("/Search");
    };
    return (
        <body className="body">
            <h1 className="welcome">Welcome to Winely</h1>
            <h3 className="text">
                Your Robo-Sommelier Recommending Wines from Different Cultures
            </h3>
            <div>
                <button className="get-started-btn" onClick={handleStart}>
                    Get Started
                </button>
            </div>
        </body>
    );
}
