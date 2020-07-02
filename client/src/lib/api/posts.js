import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, canvasData }) =>
  client.post('/api/posts', { title, body, canvasData });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ name, page }) => {
  const queryString = qs.stringify({
    name,
    page,
  });
  return client.get(`/api/posts?${queryString}`);
};
// export const writePost = ({ title, body, canvas }) =>
// client.post('/api/posts', { title, body, canvas });
