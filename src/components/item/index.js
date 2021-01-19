import React from "react";
import { Button } from "..";
import "./styles/item.css";
import { findAllByTitle } from "@testing-library/react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Item({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnText,
  rightBtnLink,
  twoButtons,
  first,
}) {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="item_container">
        <div className="item_text">
          <p>{title}</p>
          <div className="item_textDesc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="item_lowerThird">
          <div className="item_button">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnText} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className="item_expand">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
