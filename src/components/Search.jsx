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
                The Romans named Sangiovese after the blood of Jupiter; that
                must have been some hangover. The cabernet grape variety thrives
                in a variety of vineyard soil types. Cheese is a perennial pair
                with chardonnay, sauvignon blanc, don't get started on the pinks
                and reds. Chenin blanc boasts a bouquet of fresh pears, saffron,
                jasmine, ginger, and quince.
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
