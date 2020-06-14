import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

import imagesApi from '../services/imagesApi';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

class App extends Component {
  state = {
    images: [],
    loading: false,
    searchQuery: '',
    page: 1,
    total: 0,
    error: null,
    largeImg: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (nextQuery !== prevQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    if (!this.state.searchQuery) {
      return;
    }
    this.setState({ loading: true });
    imagesApi
      .fetchImagesWithQuery(this.state.searchQuery, this.state.page)
      .then(({ items, total }) => {
        this.setState((prevState) => ({ images: [...prevState.images, ...items], total, page: prevState.page + 1 }));
      })
      .catch((error) => {
        this.setState({ error });
        toast.error('Error as:', error.message);
      })
      .finally(() => {
        this.setState({ loading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  handleSearchSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  handleModalCall = (id) => {
    this.setState({ largeImg: this.state.images.find((img) => img.id === id).largeImageURL });
  };

  handleModalClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    this.handleModalClose();
  };

  handleModalClose = () => {
    this.setState({ largeImg: '' });
  };

  render() {
    const { images, loading, total, largeImg } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery items={images} onModalCall={this.handleModalCall} />
        {loading ? (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} className="Loader" />
        ) : (
          total > 12 && !loading && <Button onMore={this.fetchImages} />
        )}
        {largeImg && <Modal largeImage={largeImg} onClose={this.handleModalClose} onClick={this.handleModalClick} />}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
