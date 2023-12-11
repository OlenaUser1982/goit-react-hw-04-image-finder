import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import ModalImage from './Modal/Modal';
import { fetchImages } from 'service/Pixabay';
export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    showLoadMore: false,
    dataModal: null,
  };
  async componentDidUpdate(_, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.setState({ isLoading: true });
      try {
        const {
          data: { totalHits, hits },
        } = await fetchImages({
          query: this.state.query,
          page: this.state.page,
        });
        this.setState(prev => ({
          images: [...prev.images, ...hits],
          showLoadMore: this.state.page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  onSubmit = query => {
    if (!query.trim()) return;
    this.setState({ query, images: [], page: 1, showLoadMore: false });
  };
  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  onImageClick = dataModal => {
    this.setState({ showModal: true, dataModal });
  };
  onModalClose = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            onImageClick={this.onImageClick}
          />
        )}
        {this.state.showLoadMore && (
          <Button
            onClick={this.onLoadMore}
            isDisabled={!this.state.showLoadMore}
          />
        )}
        {this.state.isLoading && <Loader />}
        {this.state.showModal && (
          <ModalImage
            src={this.state.dataModal.src}
            alt={this.state.dataModal.alt}
            onClose={this.onModalClose}
            showModal={this.state.showModal}
          />
        )}
      </div>
    );
  }
}
// ключ 40356079-0981781b33afe77096f29ce70
