import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "/logo.png";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"></img>
      <h3>Meghna Foods</h3>
      <h3>North Indian Biryani , Asian</h3>
      <h3>4.4 stars</h3>
      <h3>38 mins</h3>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
    </div>
  )
}


const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);



