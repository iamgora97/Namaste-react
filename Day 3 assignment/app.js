import ReactDOM from "react-dom/client";
import logo from "./images/flipkart_image.png";
import searchIcon from "./images/search.png";

//  Logo Component
const Logo = () => {
  return <img className="imgTag" src={logo} alt="Logo" />;
};

//Search Bar Componet
const SearchBar = () => {
  return (
    <input
      className="searchBar"
      type="text"
      placeholder="Search for products, brands and more"
    />
  );
};

const searchButton = (
  <button className="SearchButton">
    <img src={searchIcon} alt="icon Image"></img>
  </button>
);

// This is Menu List
const MenuComponent = () => {
  let arr = ["My Profile", "Become a Seller", "More", "Cart"];

  const menuElements = arr.map((elements) => {
    return <li>{elements}</li>;
  });
  return <ul className="UI_List">{menuElements}</ul>;
};

//This is a Main Heaeding component Where our entire Navbar will be present
const HeadingComponent = () => {
  return (
    <div className="container">
      <Logo />
      <SearchBar />
      {searchButton}
      <MenuComponent />
    </div>
  );
};

// Creation of Root and extract it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
