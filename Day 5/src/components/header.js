import FoodKartLogo from "../../images/logo.png";
//export const Title = () => (
const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={FoodKartLogo} alt="Food Kart Logo" />
  </a>
);
// export const Header = () => (
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
