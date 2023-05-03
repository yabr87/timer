import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ProTip from "./../components/ProTip";

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
const IndexPage = () => {
    return (
        <>
            <Typography variant="h1" component="h1" gutterBottom>
                Index page
            </Typography>
            <ProTip />
            <Copyright />
        </>
    );
}
export default IndexPage;

