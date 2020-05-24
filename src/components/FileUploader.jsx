import React, { memo } from 'react';
import ImageUploader from 'react-images-upload';

const FileUploader = ({ setImages }) => (
    <ImageUploader
        withIcon={true}
        buttonText='Choose images'
        onChange={setImages}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
    />
);

export default memo(FileUploader);
