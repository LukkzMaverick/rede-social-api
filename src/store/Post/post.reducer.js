import { GET_POSTS, POST_LOADING, CREATE_POSTS } from "./post.action";

const INITIAL_STATE = {
    all: [],
    loading: false,
    total: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_LOADING:
            state.loading = action.status;
            return state;
        case GET_POSTS:
            state.all = action.data;
            state.total = action.total;
            state.loading = false;
            return state;
        case CREATE_POSTS:
            // state.all.push(action.post)
            state.loading = false;
            return state;
        default:
            return state;
    }
};

export default reducer;
