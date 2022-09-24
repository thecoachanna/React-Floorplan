import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = () => {
  return (
    <div className="floorplan">
      <div className="flex-container upperdeck">
        <div className="flex-container column masterbedroom">
          <Bedroom bedNum={1} />
          <Bath size="Full" />
        </div>
        <LivingRoom />
        <Kitchen />
      </div>
      <div className="flex-container roomcontainer">
        <Bedroom bedNum={2} />
        <Bath size="Half" />
        <Bedroom bedNum={3} />
      </div>
    </div>
  );
};

export default FloorPlan;
