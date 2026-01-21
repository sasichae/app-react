import {
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    createPost
} from "../data/posts";


export async function handlePosts(req) {
    const url = new URL(req.url);
    const id = url.pathname.split("/")[2];

    if (req.method === "GET" && !id) {

        return Response.json(getPosts());
    };








}

