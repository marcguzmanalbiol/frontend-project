import React, { useEffect, useState } from "react";
import GameCard from "./gameCard";
import Filter from "./filter";
import PageButton from "./pageButton";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import "./gamePanel.css";

const GamePanel = () => {
  const [data, setData] = useState();
  const [ordering, setOrdering] = useState('');
  const [direction, setDirection] = useState('asc');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios(
        `https://api.rawg.io/api/games?key=1991a12e5c85475f9c3bde20fbb99760&page=${page}&search=${search}&stores=1&ordering=${
          direction==='asc' ? '' : '-'
        }${ordering}`
      );
      console.log(direction)
      setData(response.data.results);
    };
    fetchGames();
  }, [page, ordering, direction, search]);

  const handleOrdering = (event) => {
    setOrdering(() => event.target.value);
    setPage(1);
  };

  const handleDirection = (event) => {
    setDirection(() => event.target.value);
    setPage(1);
  };

  const getOrderingText = (event) => {
    console.log(event)
    /* return event.target.innerText */
  };

  const handlePage = (pageUpOrDown) => {
    if (!(pageUpOrDown === -1 && page <= 1)) {
      setPage((prevState) => prevState + pageUpOrDown);
    }
  };

  return (
    <div>
      <Filter
        handleOrdering={handleOrdering}
        handleDirection={handleDirection}
        setSearch={setSearch}
        setPage={setPage}
      />

      <h1>List of Steam Games</h1>
      <Router>
        <div className='gamesContainer'>
          <ul style={{ listStyle: "none" }}>
            {data?.map((item) => (
              <li key={item.id}>
                {
                  <div>
                    <GameCard
                      id={item.id}
                      name={item.name}
                      rating={item.rating}
                      released={item.released}
                      image={item.background_image}
                    />
                  </div>
                }
              </li>
            ))}
          </ul>
        </div>
      </Router>

      <div className="pageButtons">
        <PageButton handlePage={handlePage} pageUpOrDown={-1} />
        <PageButton handlePage={handlePage} pageUpOrDown={1} />
      </div>
    </div>
  );
};

export default GamePanel;
