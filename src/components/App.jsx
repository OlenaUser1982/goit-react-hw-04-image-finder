import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import ModalImage from './Modal/Modal';
import { fetchImages } from 'service/Pixabay';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [shouldFetchData, setShouldFetchData] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const {
        data: { totalHits, hits },
      } = await fetchImages({ query, page });
      setImages(prevImages => [...prevImages, ...hits]);
      setShowLoadMore(page < Math.ceil(totalHits / 12));
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    if (shouldFetchData) {
      fetchData();
      setShouldFetchData(false);
    }
  }, [shouldFetchData, fetchData]);

  const onSubmit = newQuery => {
    if (!newQuery.trim()) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setShowLoadMore(false);
    setShouldFetchData(true);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setShouldFetchData(true);
  };

  const onImageClick = imageData => {
    setDataModal(imageData);
    setShowModal(true);
  };

  const onModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={onImageClick} />
      )}
      {showLoadMore && (
        <Button onClick={onLoadMore} isDisabled={!showLoadMore} />
      )}
      {isLoading && <Loader />}
      {showModal && (
        <ModalImage
          src={dataModal.src}
          alt={dataModal.alt}
          onClose={onModalClose}
          showModal={showModal}
        />
      )}
    </div>
  );
};

export default App;

// ключ 40356079-0981781b33afe77096f29ce70
