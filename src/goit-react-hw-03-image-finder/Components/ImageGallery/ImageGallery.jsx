import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const ImageGallery = ({ items, onModalCall }) => (
  <ul className="ImageGallery">
    {items.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem key={id} img={webformatURL} tags={tags} onLarge={() => onModalCall(id)} />
    ))}
  </ul>
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
