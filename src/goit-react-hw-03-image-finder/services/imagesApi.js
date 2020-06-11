import axios from 'axios';

const fetchImagesWithQuery = (query, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=16573649-3de34e680630468dd865749b6&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then((responce) => {
      return { items: responce.data.hits, total: responce.data.total };
    });
};

export default { fetchImagesWithQuery };
