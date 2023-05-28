import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {socket} from "../../services/socket";

const EventPageBlock = () =>{

    const [message, setMessage] = useState("Default value");

    useEffect(() => {
        const sendMessage = () => {
            let msg = `Your loop message "${message}" sent at ${new Date().toLocaleTimeString()}.`;
            socket.emit('message', msg);
        };


        const interval = setInterval(sendMessage, 2000);

        return () => {
            sendMessage();
            clearInterval(interval);
        };
    }, [message]);

    return (
        <>
            <Typography>
                Event page block
            </Typography>
            <br/>
            <TextField
                id="filled-helperText"
                label="Loop message"
                helperText="Change it!"
                variant="standard"
                defaultValue={message}
                onChange={e => setMessage(e.target.value)}

            />
        </>
    )
}
export default EventPageBlock;