const GameCard = (props) => {
    return(
        <div className='game_card_container'>
        <h2>{props.name}</h2>
        <div className='principal_details_container'>
            <div className='detail_class'>Release Date: {props.released}</div>
            <div className='detail_class'>Rating: {props.rating} / 5 </div>
        </div>
        <img src={props.image} alt={props.image}></img>
        </div>
    );
}

export default GameCard;