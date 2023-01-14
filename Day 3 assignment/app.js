import ReactDOM from "react-dom/client";
import logo from "./images/flipkart_image.png";
import searchIcon from "./images/search.png";

const Logo = () => {
  return <img className="imgTag" src={logo} alt="Logo" />;
};

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

const MenuComponent = () => {
  let arr = ["My Profile", "Become a Seller", "More", "Cart"];

  const menuElements = arr.map((elements) => {
    return <li>{elements}</li>;
  });
  return <ul className="UI_List">{menuElements}</ul>;
};

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
