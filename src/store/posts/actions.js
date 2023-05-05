import { getPosts } from "api/PostAPI";

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
        const { data } = await getPosts();
        dispatch(setPostsAction(data))
    } catch (error) {
        console.log(error);
        return getErrorMessage(error);
    }
}

