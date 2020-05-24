import React, { memo } from 'react';
import clsx from 'clsx';
import {
    AppBar,
    Button,
    Switch,
    Toolbar,
    IconButton,
    Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './RootContainer.styles';

const Header = ({
                    open,
                    autoplay,
                    toggleAutoplay,
                    handleDrawerOpen,
                    isPresentationPlaying,
                    toggleIsPresentationPlaying
                }) => {
    const classes = useStyles();

    return (
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon/>
                </IconButton>
                <Button className={classes.button} variant="contained" color="secondary"
                        onClick={() => toggleIsPresentationPlaying(!isPresentationPlaying)}>
                    {isPresentationPlaying ? 'Stop' : 'Play'}
                </Button>
                <Switch
                    className={classes.button}
                    checked={autoplay}
                    label="is popular"
                    onChange={() => toggleAutoplay(!autoplay)}
                    name="Autoplay"
                    inputProps={{'aria-label': 'secondary checkbox'}}/>
                <b>Autoplay</b>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Presentation Player
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default memo(Header);
