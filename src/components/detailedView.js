import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Card,
  CssBaseline,
  Button,
  Modal,
  makeStyles,
} from "@material-ui/core";
import "./detailedView.css";
import parse from "html-react-parser";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DetailedView = (props) => {
  const [data, setData] = useState("");
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios(
        `https://api.rawg.io/api/games/${props.id}?key=1991a12e5c85475f9c3bde20fbb99760`
      );
      setData(response.data);
    };
    fetchGames();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CssBaseline>
      <Container className="principal_details_container">
        <Button
          onClick={handleOpen}
          description={data.description}
          size="medium"
          variant="outlined"
          color="primary"
        >
          View description
        </Button>
        <Modal open={open} onClose={handleClose}>
          <div style={modalStyle} className={classes.paper}>
            {data.description ? parse(data.description) : undefined}
          </div>
        </Modal>
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
        <Card className="detail_class">
          <em>Publishers:</em>
          <ul>
            {data?.publishers?.map((publisher) => (
              <li key={publisher.name} style={{ listStyle: "none" }}>
                <div>{publisher.name}</div>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="detail_class">
          <em>Tags:</em>
          <ul>
            {data?.tags?.map((tag) => (
              <li key={tag.name} style={{ listStyle: "none" }}>
                <div>{tag.name}</div>
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </CssBaseline>
  );
};

export default DetailedView;
