import { isEmpty } from 'lodash';
import clsx from 'clsx';
import React, { memo } from 'react';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import useStyles from './RootContainer.styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import ImageGallery from './ImageGallery';

const LeftPane = ({
                      open,
                      allImages,
                      removeSlide,
                      setNewImages,
                      handleDrawerClose,
                      imageContainerRef,
                  }) => {
    const classes = useStyles();
    return <Drawer
        width={'300px'}
        variant="permanent"
        classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
    >
        <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon/>
            </IconButton>
        </div>
        <Divider/>
        {open && isEmpty(allImages)
            ? <h2>The is not any slides</h2>
            : <ImageGallery
                images={allImages}
                setImages={setNewImages}
                removeSlide={removeSlide}
                imageContainerRef={imageContainerRef}/>}
    </Drawer>
};

export default memo(LeftPane);
