import { useState, useEffect } from "react";
import { Typography } from '@mui/material';
import { socket } from '../../services/socket';

const Timer = (props) => {

    const [timer, setTimer] = useState(props.timer);
    const [secondsLeft, setSecondsLeft] = useState(0);

    let interval = null;

    useEffect(() => {
        socket.on("timer", (timer) => {
            setTimer(timer);
            setSecondsLeft(timer.secondsLeft);
        })
    }, []);

    const updateTimer = () => {
        Object.assign(timer, (timer.secondsLeft > 0) ? {
            secondsLeft: timer.secondsLeft - 1,
            isPaused: false
        } : {
            secondsLeft: 0,
            isPaused: true
        });
        setSecondsLeft(timer.secondsLeft);
        socket.emit("timer", timer);
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
    }, [timer.isPaused, timer.secondsLeft]);

    const convertToTimeFormat = (seconds) => {
        if (!seconds) {
            return '00:00';
        }
        if (seconds < 3600) {
            // format: 3600 seconds => 01:00:00
            return new Date(seconds * 1000).toISOString().slice(14, 19);
        } else {
            // format: 3599 seconds => 59:59
            return new Date(seconds * 1000).toISOString().slice(11, 19);
        }
    };

    return (
        <Typography fontSize={48} fontWeight={600} lineHeight={1} color={"black"} ml={5} mt={5}>
            {convertToTimeFormat(secondsLeft)}
        </Typography>
    )
}
export default Timer;
