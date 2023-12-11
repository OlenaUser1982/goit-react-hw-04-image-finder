import axios from 'axios';
const pixabayKey = '40356079-0981781b33afe77096f29ce70';
export const fetchImages = ({ query = '', page = 1 }) => {
  return axios(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${pixabayKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
