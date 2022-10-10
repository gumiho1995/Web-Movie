import React from "react";
import { Detector } from "react-detect-offline";
import wifi from "../src/images/wifi.png";

const CheckConnection = (props) => {
  return (
    <>
      <Detector
        render={({ online }) => {
            props.setIsOnline(online)
        }}
      />
    </>
  );
};
export default CheckConnection;