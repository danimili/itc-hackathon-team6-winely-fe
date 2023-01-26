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

    // const BarStyle = {
    //     width: "50rem",
    //     // width: "30rem",

    //     background: "#F0F0F0",
    //     border: "none",
    //     padding: "0.5rem",
    // };

    return (
        <div>
            <input
                className="search-bar"
                id="title"
                // style={BarStyle}
                value={keyword}
                placeholder={"Find your next favorite wine"}
                onChange={handleUserDetails}
            />
            <button className="search-btn" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
