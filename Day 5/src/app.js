import React from "react";
import ReactDOM from "react-dom/client";
//import FoodKartLogo from "../images/logo.png";
// use this when exporting by default . This is called default import
import Header from "./components/header";
// use the bellow when exporting by name. This is called Name import
// import { Title , Header } from "./components/Header"
// You can also write the above line as
//import * as Obj from "./components/Header"
//Obj.Title
import Body from "./components/body";
import Footer from "./components/footer";

// config driven ui

//props - properties

// const Body = () => {
//   return (
//     <div className="restaurant-list">
//       {restaurantList.map((restaurant) => {
//         return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
//       })}
//     </div>
//   );
// };

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
