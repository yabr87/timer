import * as React from 'react';
import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import Container from "@mui/material/Container";
import Menu from "../components/Menu";
import {Box} from "@mui/material";

export const MainLayout = () => {

    return (
        <>
            <Menu/>
            <Container maxWidth="lg">
                <Box sx={{ my: 4 }}>
                    <Suspense fallback={<div>Loading page...</div>}>
                        <Outlet />
                    </Suspense>
                </Box>
            </Container>
        </>
    )
}
