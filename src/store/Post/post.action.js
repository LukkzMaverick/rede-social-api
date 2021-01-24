import { getPostsService, createPostService } from "../../services/postService";
import { toastr } from "react-redux-toastr";

export const POST_LOADING = "POST_LOADING";
export const GET_POSTS = "GET_POSTS";
export const CREATE_POSTS = "CREATE_POSTS";

export const getPostAll = () => {
  return async (dispatch) => {
    dispatch({ type: POST_LOADING, status: true });
    const posts = await getPostsService();
    dispatch({ type: GET_POSTS, data: posts.data });
  };
};
export const createPost = (form) => {
  return async (dispatch) => {
    // const post = {
    //   author: "Liniker Silva",
    //   title: form.title,
    //   description: form.description,
    //   created_at: "Tuesday, January 21, 2014 12:51 PM",
    //   avatar: "http://placehold.it/300x300",
    // };
    const post = {
      title: form.title,
    };

    dispatch({ type: POST_LOADING, status: true });
    const res = await createPostService(post);
    if (res) {
      dispatch({ type: CREATE_POSTS, post });
      toastr.success("SUCESSO !", form.title);
      getPostAll();
    }
  };
};
