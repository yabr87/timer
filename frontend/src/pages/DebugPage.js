import * as React from 'react';
import {Grid, styled} from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import {socket} from "../services/socket";

const Item = styled('div')(({ theme }) => ({
    textAlign: 'center',
    border: 'solid 1px black',
    padding: '3px'
}));

export default function DebugPage() {

    const [config, setConfig] = useState([]);

    useEffect(() => {
        fetch("/config.json")
            .then(response => response.json())
            .then(json => {
                setConfig(json)
                console.log(json)
            });
    }, []);

    return (
        <>
            <Typography>
                This loaded from public/config.json - {JSON.stringify(config)}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>
                        <iframe
                            width="100%" src="widget/obs-layout" frameBorder="0"></iframe>
                    </Item>
                    <Link target="_blank" href="widget/obs-layout">Open OBS layout in new tab</Link>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <iframe width="100%" src="widget/obs-control" frameBorder="0"></iframe>
                    </Item>
                    <Link target="_blank" href="widget/obs-control">Open OBS control in new tab</Link>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <iframe width="100%" src="widget/event-page-block" frameBorder="0"></iframe>
                    </Item>
                    <Link target="_blank" href="widget/event-page-block">Open Event page block in new tab</Link>
                </Grid>
            </Grid>
        </>
    );
}