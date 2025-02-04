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

export default Header;