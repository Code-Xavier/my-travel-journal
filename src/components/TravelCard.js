function TravelCard(props) {
  return (
    <div>
      <div className="card-container">
        <img src={props.imageUrl} className="card-image" alt="cardimg" />
        <div className="card-text">
          <p className="location-text">
            {props.location}
            <span>
              <a href={props.googleMapsUrl} className="maps-link">
                View on google maps
              </a>
            </span>
          </p>
          <h2>{props.title}</h2>
          <p className="date">
            {props.startDate} {props.endDate}
          </p>
          <p className="description">{props.description}</p>
        </div>
      </div>
      {props.isNotLast ? <hr /> : null}
    </div>
  );
}

export default TravelCard;
