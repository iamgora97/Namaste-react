import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://www.canva.com/design/DAFXq_Aifm4/YdbIF_lnaIJ4ogw7ybN7UQ/edit?utm_content=DAFXq_Aifm4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    />
  </a>
);

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
const burgerKing = {
  name: "Burger King",
  image: "https://en.wikipedia.org/wiki/File:Burger_King_2020.svg",
  cusines: ["Burger", "Americans"],
  rating: "4.2",
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image} />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cusines.join(",")}</h3>
      <h4>{burgerKing.rating}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div class="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
