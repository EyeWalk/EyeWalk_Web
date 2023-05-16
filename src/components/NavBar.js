import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import logo from "../img/logoEyeWalk.png"

const NavBar = (props) => {

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "#192230" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: "Inter",
                                fontWeight: 400,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            EyeWalk
                        </Typography>
                        <img src={logo} alt='logo eyewalk' width="40" height="20" className='logo' />
                    </div>

                    <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        {props.children}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )

}

export default NavBar