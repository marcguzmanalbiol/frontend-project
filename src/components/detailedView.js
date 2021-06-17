const DetailedView = (props) => {
    return (
        <div className="principal_details_container">
        <div className="detail_class">
          Release Date: {props.released}
        </div>
        <div className="detail_class">Rating: {props.rating} / 5 </div>
      </div>
    )
}

export default DetailedView;