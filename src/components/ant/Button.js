import React from "react";
import { Button } from "./index";

const Buttons = ({ type, size, label }) => {

  const style = () => {
    let btnStyles = {};
    if ((type = "primary")) {
      btnStyles.borderColor = "#e36d25";
      btnStyles.background = "#e36d25";
    } else if ((type = "secondary")) {
      btnStyles.borderColor = "#20295c";
      btnStyles.background = "#20295c";
    }
    return btnStyles;
  };

  return <Button type={type} size={size} style={style}></Button>;
};

export default Buttons;
