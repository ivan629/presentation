import { cloneDeep } from 'lodash';
import React, { memo } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Card, CardActionArea } from '@material-ui/core';
import ReactDragList from 'react-drag-list'
import './ImageGallery.scss'

function ImageGallery ({ images, setImages, imageContainerRef, removeSlide }) {
    return (

        <div className="image-gallery-container" ref={imageContainerRef}>
            <ReactDragList onUpdate={(event, newImages) => setImages(event, newImages, images)}
                           dataSource={cloneDeep(images)}
                           row={({imageBody, id}) => (
                <Card className="image-card" key={id} data-id={id}>
                    <div className="delete-icon-container" onClick={() => removeSlide(id)}><HighlightOffIcon /></div>
                    <CardActionArea className="image-container">
                        <img id="output" alt="" src={imageBody}/>
                    </CardActionArea>
                </Card>
            )}/>
        </div>
    )
}

export default memo(ImageGallery);
