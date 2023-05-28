import DisplayBox from "./display/DisplayBox";
import TimerBox from "./timer/TimerBox";
import TimerDurationBox from "./timer/TimerDurationBox";
import * as React from "react";
import AgendaList from "./agenda/agendaList";

const OBSControl = () => {


  return (
    <>
      <DisplayBox />
      {/* <AgendaList/> */}
      <TimerBox />
      <TimerDurationBox />
    </>
  );
};
export default OBSControl;
