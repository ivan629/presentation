import React, { memo } from 'react';
import { FileDrop } from 'react-file-drop';

import './ImageLoader.scss';
import FileUploader from './FileUploader';

const ImageLoader = ({ setImages}) => (
        <FileDrop className="image-loader-container" onDrop={files => setImages(files)}>
            <h2>Choose or Drop slides here</h2>
            <FileUploader setImages={setImages} />
        </FileDrop>
);

export default memo(ImageLoader);
