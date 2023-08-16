import { CARD_IMG } from "../utils/constants";

const Card = (props) => {
  const {
    restaurentDetails: { info },
  } = props;
  const { name, cuisines, avgRating, locality, cloudinaryImageId } = info;
  return (
    <div className="card-wrapper">
      <div className="restaurent-logo">
        <img
          src={CARD_IMG + cloudinaryImageId}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div>
        <h3>{name}</h3>
        <h6>{cuisines.join(", ")}</h6>
        <h6>{avgRating} stars</h6>
        <h6>{locality}</h6>
      </div>
    </div>
  );
};

export default Card;
