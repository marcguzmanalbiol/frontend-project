import React, { useEffect, useState } from "react";
import GameCard from "./gameCard";
import Filter from "./filter";
import axios from "axios";
import { DebounceInput } from "react-debounce-input";

const GamePanel = () => {
  const [data, setData] = useState();
  const [ordering, setOrdering] = useState('');
  const [direction, setDirection] = useState('');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      const result = await axios(
        `https://api.rawg.io/api/games?key=1991a12e5c85475f9c3bde20fbb99760&page=${page}&search=${search}&stores=1&ordering=${direction}${ordering}`
      );
      setData(result.data.results);
    };
    fetchGames();
  }, [page, ordering, direction, search]);


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
      <DebounceInput 
      minLength={2}
      debounceTimeout={300}
      onChange={event => setSearch(event.target.value)}
      />

      <h1>List of Steam Games ordered by {getOrderingText()}</h1>
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
