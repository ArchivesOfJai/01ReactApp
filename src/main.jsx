import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Gallery from "./Gallery";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FavFoodList /> */}
    {/* <DisplayMsg /> */}
    {/* <RandomPicture/> */}
    <Gallery/>
  </React.StrictMode>
);
