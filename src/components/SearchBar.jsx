import { useNavigate } from "react-router-dom";
import "../App.css"

const SearchBar = ({ keyword, onChange }) => {
const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    navigate("/RecommendationPage");
  }  

  const BarStyle = {
    width: "20rem",
    background: "#F0F0F0",
    border: "none",
    padding: "0.5rem",
  };

  return (
    <>
      <input
        style={BarStyle}
        key="Find your next favorite wine"
        value={keyword}
        placeholder={"search news"}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={(e) => handleSearch}>Search</button>
    </>
  );
};

export default SearchBar;
