import React, { useEffect, useState } from "react";
import GameCard from "./gameCard";
import Filter from "./filter";
import SearchBar from "./searchBar";
import axios from "axios";

const GamePanel = () => {
  const [data, setData] = useState();
  const [ordering, setOrdering] = useState("name");
  const [direction, setDirection] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('God of War');

  useEffect(() => {
    const fetchGames = async () => {
      const result = await axios(
        `https://api.rawg.io/api/games?key=1991a12e5c85475f9c3bde20fbb99760&page=${page}&search=${search}`
      );
      setData(result.data.results);
    };
    fetchGames();
  }, [page, ordering, direction]);

  const handleOrdering = (event) => {
    setOrdering(() => event.target.value);
  };

  const handleDirection = (event) => {
    setDirection(() => event.target.value);
  };

  const getOrderingText = () => {
    const sel = document.getElementById("choose_ordering");
    return sel?.options[sel.selectedIndex].text;
  };

  return (
    <div>
      <Filter
        handleOrdering={handleOrdering}
        handleDirection={handleDirection}
      />
      <SearchBar 
      
      />
      <h1>List of Games ordered by {getOrderingText()}</h1>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            {
              <GameCard
                name={item.name}
                rating={item.rating}
                released={item.released}
                image={item.background_image}
              />
            }
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setPage((prevState) => {
            console.log(prevState);
            return prevState - 1;
          });
        }}
      >
        Page Down
      </button>
      <button
        onClick={() => {
          setPage((prevState) => {
            console.log(prevState);
            return prevState + 1;
          });
        }}
      >
        Page Up
      </button>
    </div>
  );
};

export default GamePanel;
