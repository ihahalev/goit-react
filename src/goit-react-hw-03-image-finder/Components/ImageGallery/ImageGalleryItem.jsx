import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ img, tags, onLarge }) => (
  <li className="ImageGalleryItem">
    <img src={img} alt={tags} className="ImageGalleryItem-image" onClick={onLarge} />
  </li>
);

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  tags: PropTypes.string,
};
export default ImageGalleryItem;
