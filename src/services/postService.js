import http from "../config/http";

const getPostsService = () => {
  return http.get(`/topic`);
};

const createPostService = async (post) => {
  const { data } = await http.post(`/topic`, post);
  return data;
};

export { getPostsService, createPostService };
