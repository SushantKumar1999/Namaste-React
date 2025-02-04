import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo } = resData?.info;
    return (
      <div className="res-card">
        <img
          src={
            CDN_URL + resData.info.cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h3>{resData.info.sla.deliveryTime} mins</h3>
      </div>
    );
};


export default RestaurantCard;