import shortid from 'shortid';
import { map, isNil } from 'lodash';
import { CssBaseline, Container } from '@material-ui/core';
import React, { useState, useRef, useEffect, memo } from 'react';

import Header from './Header';
import LeftPane from './LeftPanae';
import SimpleSlider from './Slider';
import ImageLoader from './ImageLoader'
import useStyles from './RootContainer.styles'

const DEFAULT_AUTOPLAY_TIMEOUT = 4000;

function PresentationContainer() {
    const classes = useStyles();
    const sliderRef = useRef(null);
    const imageContainerRef = useRef(null);
    const [allImages, setImages] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [autoplay, toggleAutoplay] = useState(false);
    const [newOrderIds, setNewOrderIds] = useState(false);
    const [isPresentationPlaying, toggleIsPresentationPlaying] = useState(false);

    const handleSetImages = images => {
        if (!open) setOpen(true);
        const newImages = map(images, image => ({ id: shortid.generate(), imageBody: URL.createObjectURL(image) }));
        setImages([...allImages, ...newImages]);
    };
    const removeSlide = id =>
        setImages(allImages.filter(image => image.id !== id)) && setNewImages();
    const setNewImages = () =>
        setNewOrderIds(map(document.querySelectorAll('.image-card'), card => card.getAttribute('data-id')));

    useEffect(() => { setNewImages(); }, [isPresentationPlaying]);
    useEffect(() => {
           if ( !isNil(sliderRef.current)) autoplay ? sliderRef.current.slickPlay() : sliderRef.current.slickPause();
    }, [autoplay]);

    return (
        <div className={classes.root}>
            <CssBaseline />
           <Header
            open={open}
            autoplay={autoplay}
            toggleAutoplay={toggleAutoplay}
            handleDrawerOpen={() => setOpen(true)}
            isPresentationPlaying={isPresentationPlaying}
            toggleIsPresentationPlaying={toggleIsPresentationPlaying}
           />
           <LeftPane
            open={open}
            allImages={allImages}
            removeSlide={removeSlide}
            setNewImages={setNewImages}
            handleDrawerClose={() => setOpen(false)}
            imageContainerRef={imageContainerRef} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {isPresentationPlaying
                        ? <SimpleSlider
                            images={allImages}
                            autoplay={autoplay}
                            sliderRef={sliderRef}
                            newOrderIds={newOrderIds}
                            autoplaySpeed={DEFAULT_AUTOPLAY_TIMEOUT}
                        />
                        : <ImageLoader setImages={handleSetImages} />}
                </Container>
            </main>
        </div>
    );
}

export default memo(PresentationContainer);
