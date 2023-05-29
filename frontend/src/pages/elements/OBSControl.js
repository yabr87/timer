import DisplayBox from './display/DisplayBox';
import TimerBox from './timer/TimerBox';
import TimerDurationBox from './timer/TimerDurationBox';
import * as React from 'react';
import AgendaList from './agenda/AgendaList';

const OBSControl = () => {
  return (
    <>
      <DisplayBox />
      <TimerBox />
      <AgendaList />
      {/* <TimerDurationBox /> */}
    </>
  );
};
export default OBSControl;
