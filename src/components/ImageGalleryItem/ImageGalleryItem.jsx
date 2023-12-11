import { Image } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    console.log(image);
    onClick({ src: image.largeImageURL, alt: image.tags });
  };
  return (
    <li onClick={handleClick}>
      <Image src={image.webformatURL} alt={image.tags} width="200" />
    </li>
  );
};

export default ImageGalleryItem;
