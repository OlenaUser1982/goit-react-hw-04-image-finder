import { Image } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick({ src: image.largeImageURL, alt: image.tags });
  };
  return (
    <li onClick={handleClick}>
      <Image src={image.webformatURL} alt={image.tags} width="200" />
    </li>
  );
};

export default ImageGalleryItem;
