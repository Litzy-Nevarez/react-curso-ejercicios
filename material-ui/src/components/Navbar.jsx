import React, { useState } from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Container, 
    Button, 
    List, 
    ListItem, 
    ListItemButton,
    ListItemText,
    IconButton,
    Box
} from '@mui/material';

import CoffeeIcon from '@mui/icons-material/Coffee';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme, Drawer } from '@mui/material';

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    }

    const drawerList = [
        {
            text: 'Home',
            href: '#home'
        },
        {
            text: 'Coffee',
            href: '#coffee'
        }
    ];

    return (
        <>
            <AppBar position="sticky" color="primary">
                <Container>
                    <Toolbar>
                        <CoffeeIcon />
                        <Typography variant="h5" sx={{ flexGrow: 1, fontFamily: '"Eagle Lake", serif' }}>
                            Coffee Shop
                        </Typography>

                        {isMobile && 
                            (
                                <IconButton color="inherit" onClick={toggleDrawer(true)}>
                                    <MenuIcon />
                                </IconButton>
                            )
                        }

                        { !isMobile && 
                            (
                                <>
                                    <Button color='inherit' href='#home'>Home</Button>
                                    <Button color='inherit' href='#coffee'>Coffee</Button>
                                </>
                            )
                        }
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)} >
                <Box sx={{ windth: 250 }} role='presentation' onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    <List>
                        {drawerList.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton href={item.href}>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default Navbar;