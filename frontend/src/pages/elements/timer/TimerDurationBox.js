import { useState, useEffect } from "react";
import { socket } from '../../../services/socket';
import { Box, Typography, Stack, Button } from '@mui/material';

const TimerDurationBox = () => {

    const [timer, setTimer] = useState({
        secondsPassed: 0,
        isPaused: Boolean
    });

    useEffect(() => {
        socket.on("timerDuration", (timer) => {
            setTimer(timer);
        });
    }, []);

    const emitTimer = () => {
        socket.emit("timerDuration", timer);
    };

    const startTimer = () => {
        Object.assign(timer, {
            secondsPassed: timer.secondsPassed,
            isPaused: false
        });
        emitTimer();
    };

    const stopTimer = () => {
        Object.assign(timer, {
            secondsPassed: timer.secondsPassed,
            isPaused: true
        });
        emitTimer();
    };

    const resetTimer = () => {
        Object.assign(timer, {
            secondsPassed: 0,
            isPaused: true
        });
        emitTimer();
    };

    return (
        <Box mb={3}>
            <Typography variant="h6" mb={2}>Тривалість</Typography>
            <Stack mb={2} spacing={1}>
                <Button
                    variant="contained"
                    onClick={startTimer}>Start</Button>
                <Button
                    variant="outlined"
                    onClick={stopTimer}>Stop</Button>
                <Button
                    variant="outlined"
                    onClick={resetTimer}>Reset</Button>
            </Stack>
        </Box>
    );
};
export default TimerDurationBox;
