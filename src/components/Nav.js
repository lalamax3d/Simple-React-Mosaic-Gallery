import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/material/styles';


// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// Using Inline Styling
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
function Navbar() {
    const classes = useStyles();
    
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" 
              className={classes.menuButton} 
              color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Geeks for Geeks
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
export default Navbar;
