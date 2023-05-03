import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ProTip from "./../components/ProTip";
import {Alert, Box} from "@mui/material";
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://edu-streams.org/">
                EDU Streams
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const ErrorPage = () => {
    return (
        <Box >
            <Alert variant="filled" severity="error">
                This is an error alert — check it out!
            </Alert>
        </Box>
    );
}
export default ErrorPage;

