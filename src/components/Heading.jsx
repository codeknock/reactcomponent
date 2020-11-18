import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();
  const customStyle = {
    color: ""
  };
  let greeting;

  if (currentTime < 12) {
    greeting = "morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "afternoon";
    customStyle.color = "green";
  } else {
    greeting = "goodnight";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
