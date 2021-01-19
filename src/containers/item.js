import React from "react";
import { Item } from "../components";
import "../App.css";

export function ItemContainer() {
  return (
    <div className="item_container">
      <Item
        title="Lower Cost Solar Panels in America"
        desc="Money-back guarantee"
        descLink=""
        backgroundImg="/images/Desktop-SolarPanels.jpeg"
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnText="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Item
        title="Model S"
        desc="$69,420"
        descLink=""
        backgroundImg="/images/Desktop-ModelS.jpeg"
        leftBtnTxt="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnText="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item
        title="Model 3"
        desc="Money-back guarantee"
        descLink=""
        backgroundImg="/images/Desktop-Model3.jpeg"
        leftBtnTxt="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnText="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item
        title="Model X"
        desc="Money-back guarantee"
        descLink=""
        backgroundImg="/images/Desktop-ModelX.jpeg"
        leftBtnTxt="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnText="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item
        title="Model Y"
        desc="Money-back guarantee"
        descLink=""
        backgroundImg="/images/Desktop-ModelY.jpeg"
        leftBtnTxt="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnText="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item
        title="Solar for New Roofs"
        desc="Money-back guarantee"
        descLink=""
        backgroundImg="/images/Desktop-SolarRoof.jpeg"
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnText="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item
        title="Accessories"
        desc="Money-back guarantee"
        descLink=""
        backgroundImg="/images/Desktop-Accessories.jpg"
        leftBtnTxt="SHOP NOW"
        leftBtnLink=""
        rightBtnText="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
    </div>
  );
}
