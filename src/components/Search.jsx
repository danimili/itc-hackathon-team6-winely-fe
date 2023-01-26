import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import "./Search.css";
import AppContext from "../AppContext";

const SearchBar = ({ keyword, onChange }) => {
    const navigate = useNavigate();
    const { setSearchResults } = useContext(AppContext);
    const [userDetails, setUserDetails] = useState("");

    console.log(userDetails);
    const handleUserDetails = e => {
        setUserDetails({ [e.target.id]: e.target.value });
    };

    const handleSearch = async e => {
        e.preventDefault();
        console.log(userDetails);
        try {
            const res = await axios.get(
                `http://localhost:8080/search?title=${userDetails.title}`
            );
            console.log(res);
            setSearchResults(res.data);
        } catch (err) {
            alert(err);
        }
        navigate("/RecommendationPage");
    };

    return (
        <div className="search-container">
            <h1>Search Wines</h1>
            <p>
             Search for a name or varietal of wine to get a recommendation. Otherwise pick a country and explore wine from a new culture. 
            </p>
            <div className="search-bar-container">
                <input
                    className="search-bar"
                    id="title"
                    value={keyword}
                    placeholder={"Find your next favorite wine"}
                    onChange={handleUserDetails}
                />
                <button className="search-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
