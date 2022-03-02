import React from "react";

import progressBarIcon from '../../assets/images/progress.png'

const Progress_bar = ({ progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "70%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 50,
  };

  const Childdiv = {
    position: "relative",
    height: "100%",
    width: `${progress}%`,
    borderRadius: 40,
    textAlign: "right",
    flexDirection: "column",
  };

  const progresstext = {
    position: "absolute",
    padding: 10,
    color: "black",
    fontWeight: 900,
    top: "-5px"
  };
  const imgStyle = {
    position: "absolute",
    top: "-9px",
    borderRadius: "50%",
    right: 0,
    border: "2px solid #fdc325"
  }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv} className="d-flex justify-content-end align-items-center custom-color">
        <div style={progresstext}>
          {`${progress}%`}
        </div>
        <img
          src={progressBarIcon}
          alt="logo"
          width="50"
          className=""
          style={imgStyle}
        />
      </div>
    </div>
  );
};

export default Progress_bar;
