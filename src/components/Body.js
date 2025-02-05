import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch (
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8575579&lng=77.7864057&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    //Optional Chaining
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }

//Conditional Rendering
  if(listOfRestaurants.length === 0){
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-button-container">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              console.log("filteredlist" + filteredList)
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search">Search</div>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
