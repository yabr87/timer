import { useEffect, useState } from 'react';
import { socket } from '../../services/socket';
import { CircularProgress, Box } from '@mui/material';

import Timer from '../../components/timer/Timer';
import TimerDuration from '../../components/timer/TimerDuration';
import SchoolIcon from '@mui/icons-material/School';

const OBSLayout = () => {
  const [data, setData] = useState([]);
  // const [IsDisplay, setIsDisplay] = useState(true);

  const [timer, setTimer] = useState({
    secondsLeft: 0,
    isPaused: true,
  });
  const [timerDuration, setTimerDuration] = useState({
    secondsPassed: 0,
    isPaused: true,
  });

  useEffect(() => {
    // socket.on('message', (msg) => {
    //   setMessage(msg);
    // });

    socket.on('agenda', (data) => {
      setData(data);
      console.log('>>>>>>>', data);
    });

    // socket.on('control', (data) => {
    //   setIsDisplay(data);
    // });

    socket.on('timer', (timer) => {
      setTimer(timer);
    });

    socket.on('timerDuration', (timerDuration) => {
      setTimerDuration(timerDuration);
    });
  }, []);

  return (
    <>
      <Timer timer={timer} />
      {/* <TimerDuration timer={timerDuration} /> */}
      {data.map((item) => (
        <p key={item.id}>{item.todo}</p>
      ))}
    </>
  );
};
export default OBSLayout;
