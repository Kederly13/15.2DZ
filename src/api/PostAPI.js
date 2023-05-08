import axios from "axios";

import { getErrorMessage } from "utils/getErrorMessage";

const PostsApi = {
    getAll: async () => {
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return data;
        } catch (error) {
            console.log(error);
            return getErrorMessage(error);
        }
    }
}


export { PostsApi };