import { useState, useEffect } from "react";
import { socket } from '../../../services/socket';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Typography, Stack, Button } from '@mui/material';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import dayjs from 'dayjs';

const TimerBox = () => {

    const [timer, setTimer] = useState({
        secondsLeft: 0,
        isPaused: true
    });
    const [selectedTime, setSelectedTime] = useState(
        dayjs().set('hour', 0).set('minute', 0)
    );

    useEffect(() => {
        socket.on("timer", (timer) => {
            setTimer(timer);
        });
    }, []);

    const emitTimer = () => {
        socket.emit("timer", timer);
    };

    const startTimer = () => {
        Object.assign(timer, {
            secondsLeft: timer.secondsLeft,
            isPaused: false
        });
        emitTimer();
    };

    const stopTimer = () => {
        Object.assign(timer, {
            secondsLeft: timer.secondsLeft,
            isPaused: true
        });
        emitTimer();
    };

    const resetTimer = () => {
        Object.assign(timer, {
            secondsLeft: 0,
            isPaused: true
        });
        emitTimer();
    };

    useEffect(() => {
        let hours = selectedTime?.hour();
        let minutes = selectedTime?.minute();

        if (isNaN(hours) || hours === undefined) {
            hours = 0;
        }
        if (isNaN(minutes) || minutes === undefined) {
            minutes = 0;
        }

        Object.assign(timer, {
            secondsLeft: hours * 3600 + minutes * 60,
            isPaused: true
        });
        emitTimer();

    }, [selectedTime]);

    return (
        <Box mb={3}>
            <Typography variant="h6" mb={2}>Таймер</Typography>
            <Stack mb={2} spacing={1}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimeField
                        label="Timer"
                        value={selectedTime}
                        onChange={(newValue) => setSelectedTime(newValue)}
                        format="HH:mm"
                    />
                </LocalizationProvider>
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
export default TimerBox;
