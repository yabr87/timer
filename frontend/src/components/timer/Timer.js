import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import { socket } from '../../services/socket';

import { convertToTimeFormat } from '../../utils/convertToTimeFormat';
import TimerDialDisplay from './TimerDialDisplay';

const Timer = (props) => {
  const [timer, setTimer] = useState({
    secondsLeft: 0,
    duration: 0,
    isPaused: true,
  });
  const [secondsLeft, setSecondsLeft] = useState(0);

  console.log('=------>>>>', timer);

  let interval = null;

  useEffect(() => {
    socket.on('timer', (timer) => {
      setTimer(timer);
      setSecondsLeft(timer.secondsLeft);
    });
  }, []);

  const updateTimer = () => {
    Object.assign(
      timer,
      timer.secondsLeft > 0
        ? {
            secondsLeft: timer.secondsLeft - 1,
            isPaused: false,
          }
        : {
            secondsLeft: 0,
            isPaused: true,
          }
    );
    setSecondsLeft(timer.secondsLeft);
    socket.emit('timer', timer);
  };

  useEffect(() => {
    if (timer.isPaused) {
      return () => {
        clearInterval(interval);
        interval = null;
      };
    }

    interval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(interval);
      interval = null;
    };
  }, [timer.isPaused, timer.secondsLeft]);

  return (
    <Stack
      direction={'row'}
      spacing={3}
      sx={{
        maxWidth: '288px',
        padding: '8px',
        paddingBottom: '14px',
        backgroundColor: '#000000',
        borderRadius: '8px 8px 0px 0px',
      }}
    >
      <TimerDialDisplay
        text={'Пройшло'}
        time={convertToTimeFormat(timer.duration - secondsLeft).slice(0, -3)}
      />
      <TimerDialDisplay
        text={'Залишилось'}
        time={convertToTimeFormat(secondsLeft)}
      />
      <TimerDialDisplay
        text={'Всього'}
        time={convertToTimeFormat(timer.duration).slice(0, -3)}
      />
    </Stack>
  );
};
export default Timer;
