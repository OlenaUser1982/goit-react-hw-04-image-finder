import React from 'react';
import { Ul } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Ul>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </Ul>
  );
};

export default ImageGallery;
