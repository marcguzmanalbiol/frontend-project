import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, CssBaseline } from "@material-ui/core";
import "./detailedView.css";

const DetailedView = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios(
        `https://api.rawg.io/api/games/${props.id}?key=1991a12e5c85475f9c3bde20fbb99760`
      );
      setData(response.data);
    };
    fetchGames();
  }, []);

  return (
    <CssBaseline>
      <Container className="principal_details_container">
        <Card className="detail_class">
          <em>Release Date: </em> {props.released}
        </Card>
        <Card className="detail_class">
          <em>Rating:</em> {props.rating} / 5{" "}
        </Card>
        <Card className="detail_class">
          <em>Genres:</em>
          <ul>
            {data?.genres?.map((genre) => (
              <li key={genre.name} style={{ listStyle: "none" }}>
                <div>{genre.name}</div>
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </CssBaseline>
  );
};

export default DetailedView;
