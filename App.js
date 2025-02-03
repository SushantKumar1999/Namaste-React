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
//Genral way of writing code 
// const RestaurantCard = (props) => {
//   return (
//     <div className="res-card">
//       <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"></img>
//       <h3>{props.resname}</h3>
//       <h3>{props.cusine}</h3>
//       <h3>{props.stars}</h3>
//       <h3>{props.eta}</h3>
//     </div>
//   )
// }

//After destructuring we can also write like this and there are also more way to write it 
const RestaurantCard = (props) => {
  const {resname, cusine, stars, eta} = props;
  return (
    <div className="res-card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"></img>
      <h3>{props.resname}</h3>
      <h3>{props.cusine}</h3>
      <h3>{props.stars}</h3>
      <h3>{props.eta}</h3>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestaurantCard resname= "Meghna Foods" cusine="North Indian Biryani, Asian" starts="4.4 stars" eta="35 min"/>
      <RestaurantCard resname= "KFC" cusine="North Indian Biryani, Asian" starts="4.4 stars" eta="35 min"/>
      <RestaurantCard resname= "Burger King" cusine="North Indian Biryani, Asian" starts="4.4 stars" eta="35 min"/>
      <RestaurantCard resname= "Mac Donald" cusine="North Indian Biryani, Asian" starts="4.4 stars" eta="35 min"/>
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



