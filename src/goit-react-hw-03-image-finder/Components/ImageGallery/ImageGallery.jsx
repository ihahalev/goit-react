import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';
import ImageGalleryItem from './ImageGalleryItem';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const ImageGallery = ({ items, loading, onModalCall }) => (
  <div>
    {loading ? (
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    ) : (
      <ul className="ImageGallery">
        {items.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem key={id} img={webformatURL} tags={tags} onLarge={() => onModalCall(id)} />
        ))}
      </ul>
    )}
  </div>
);

ImageGallery.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    }),
  ),
};
export default ImageGallery;
