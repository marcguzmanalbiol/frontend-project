import DetailedView from "./detailedView";
import { Switch, Route, useHistory } from "react-router-dom";
import { Button, Card } from "@material-ui/core";

const GameCard = (props) => {
  
  const history = useHistory();

  const handleLink = (id) => {
   
    console.log(history.location);
    if (history.location.pathname === `/details/${id}`) {
      console.log(history.location.pathname);
      history.push('/')
    } else {
      history.push(`/details/${props.id}`);
    }
  }

  return (
    <Card variant="outlined" className="game_card_container">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.image} width={100} height={100}></img>
      <Button onClick={() => handleLink(props.id)}>
        Details
      </Button>
      <Switch>
        <Route path={`/details/${props.id}`}>
          <DetailedView released={props.released} rating={props.rating} />
        </Route>
        <Route path={`/`}/>  
      </Switch>
    </Card>
  );
};

export default GameCard;
