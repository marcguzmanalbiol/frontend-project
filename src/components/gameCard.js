import DetailedView from "./detailedView";
import { Switch, Route, useHistory } from "react-router-dom";
import { Button, Card } from "@material-ui/core";
import "./gameCard.css";

const GameCard = (props) => {
  
  const history = useHistory();

  const handleLink = (id) => {
    if (history.location.pathname === `/details/${id}`) {
      history.push('/')
    } else {
      history.push(`/details/${props.id}`);
    }
  }

  return (
    <Card variant="outlined" className="game_card_container">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.image}></img>
      <div className='detailsButton'>
      <Button onClick={() => handleLink(props.id)}>Details</Button>
      </div>


      <Switch>
        <Route path={`/details/${props.id}`}>
          <DetailedView released={props.released} rating={props.rating} id={props.id} />
        </Route>
        <Route path={`/`}/>  
      </Switch>
    </Card>
  );
};

export default GameCard;
