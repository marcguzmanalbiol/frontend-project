import React, { useEffect, useState } from "react";
import GameCard from "./gameCard";
import axios from "axios";

const GamePanel = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchGames = async () => {
      const result = await axios(
        `https://api.rawg.io/api/games?key=1991a12e5c85475f9c3bde20fbb99760`
      );
      console.log(result.data.results);
      setData(result.data.results);
    };
    fetchGames();
  }, []);

  return (
    <div>
      <h1>List of Games</h1>
      <ul>
        {data?.map((item) => (
          <li>
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
    </div>
  );
};

export default GamePanel;
