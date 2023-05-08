import axios from "axios";

import { getErrorMessage } from "utils/getErrorMessage";

const url = 'https://jsonplaceholder.typicode.com';

const PostsAPI = {
    getPosts: async () => {
        try {
            const { data } = await axios.get(`${url}/posts`)
            return data;
        } catch (error) {
            console.log(errof);
            return getErrorMessage(error);
        }
    }
}


export { PostsAPI };