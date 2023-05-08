import { PostsApi } from "api";

import { getErrorMessage } from "utils/getErrorMessage";

export const setPostsAction = (payload) => {
    return {
        type: 'posts/setPosts',
        payload,
    }
}

// В Диспетч всегда прокидывается Action!!!!

export const loadPosts = () => async (dispatch) => {
    try {
        PostsApi.getAll().then(response => {
            dispatch(setPostsAction(response))
        })
    } catch (error) {
        console.log(error);
        return getErrorMessage(error);
    }
}

