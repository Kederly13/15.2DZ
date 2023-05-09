import axios from "axios";

import { getErrorMessage } from "utils/getErrorMessage";

<<<<<<< HEAD
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
=======
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
>>>>>>> e4e966d335f09711728008b4b7d286cd19849834
