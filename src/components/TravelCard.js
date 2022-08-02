
function TravelCard({imageUrl, location, title, startDate, endDate, description, googleMapsUrl, isNotLast}) {
  return (
    <div>
      <div className="card-container">
        <img src={imageUrl} className="card-image" alt="cardimg" />
        <div className="card-text">
          <p className="location-text">
            {location}
            <span>
              <a href={googleMapsUrl} className="maps-link">
                View on google maps
              </a>
            </span>
          </p>
          <h2>{title}</h2>
          <p className="date">
            {startDate} {endDate}
          </p>
          <p className="description">{description}</p>
        </div>
      </div>
      {isNotLast ? <hr /> : null}
    </div>
  );
}



export default TravelCard;


//this is with .props

// function TravelCard(props) {
//   return (
//     <div>
//       <div className="card-container">
//         <img src={props.imageUrl} className="card-image" alt="cardimg" />
//         <div className="card-text">
//           <p className="location-text">
//             {props.location}
//             <span>
//               <a href={props.googleMapsUrl} className="maps-link">
//                 View on google maps
//               </a>
//             </span>
//           </p>
//           <h2>{props.title}</h2>
//           <p className="date">
//             {props.startDate} {props.endDate}
//           </p>
//           <p className="description">{props.description}</p>
//         </div>
//       </div>
//       {props.isNotLast ? <hr /> : null}
//     </div>
//   );
// }

// export default TravelCard;


/*

If you do not want your props data to be empty when you create them, you can pass in a default value. Here's how to do that:

  
  TravelCard.defaultProps = {
    title: "Generic Country",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }


*/

