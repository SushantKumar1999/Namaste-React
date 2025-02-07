import { useState } from "react";
import Logo from "/logo.png";

const Header = () => {
  const [loginLogoutBtn, setLoginLogoutBtn] = useState("login");

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
          <button
            className="login"
            onClick={() => {
              loginLogoutBtn === "login"
                ? setLoginLogoutBtn("logout")
                : setLoginLogoutBtn("login");
            }}
          >
            {loginLogoutBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
