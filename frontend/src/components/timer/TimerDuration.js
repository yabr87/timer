import { useState, useEffect } from "react";
import { Typography } from '@mui/material';
import { socket } from '../../services/socket';

const TimerDuration = (props) => {

    const [timer, setTimer] = useState(props.timer);
    const [secondsPassed, setSecondsPassed] = useState(0);

    let interval = null;

    useEffect(() => {
        socket.on("timerDuration", (timer) => {
            setTimer(timer);
            setSecondsPassed(timer.secondsPassed);
        })
    }, []);

    const updateTimer = () => {
        Object.assign(timer, {
            secondsPassed: timer.secondsPassed + 1,
            isPaused: false
        });
        setSecondsPassed(timer.secondsPassed);
        socket.emit("timerDuration", timer);
    };

    useEffect(() => {
        if (timer.isPaused) {
            return () => {
                clearInterval(interval);
                interval = null;
            }
        };

        interval = setInterval(updateTimer, 1000);

        return () => {
            clearInterval(interval);
            interval = null;
        }
    }, [timer.isPaused, timer.secondsPassed]);

    const convertToTimeFormat = (seconds) => {
        if (!seconds) {
          return '00:00:00';
        }
      
        const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
      
        return `${hours}:${minutes}:${remainingSeconds}`;
      };


    return (
        <Typography fontSize={48} fontWeight={600} lineHeight={1} color={"steelBlue"} ml={5} mt={1}>
            {convertToTimeFormat(secondsPassed)}
        </Typography>
    )
}
export default TimerDuration;
