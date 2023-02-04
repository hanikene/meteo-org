import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomepageImage from "../../assets/homepage-image.png";
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleChange = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setSearch(value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    const { key } = event;
    if (key === "Enter") {
      startSearch();
    }
  };

  const startSearch = () => {
    navigate(`/q/${search}`);
  };

  return (
    <div className="Homepage">
      <div className="Homepage_container">
        <h1 className="Homepage_title-primary">
          La météo du monde <br /> en un seul clique
        </h1>
        <h3 className="Homepage_title-secondary">
          Commencez maintenant en choisissant une région
        </h3>
        <div className="Homepage_search">
          <input
            className="Homepage_search-input"
            type="text"
            placeholder="Recherche..."
            name="search"
            value={search}
            onChange={handleChange}
            onKeyDown={keyPressHandler}
          />
          <button className="Homepage_search-button" onClick={startSearch}>
            Recherche
          </button>
        </div>
      </div>
      <div className="Homepage_image">
        <img src={HomepageImage} alt="Homepage" />
      </div>
    </div>
  );
};

export default Homepage;
