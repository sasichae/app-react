import {handlePosts} from "./routes/posts"

const server = Bun.serve({
    port:3000,
    async fetch(req) {
        const url = new URL(req.url)
        
        if (url.pathname.startsWith("/get")) {
            return handlePosts(req)
        }

        return new Response("Not Found", {status:404});
    },
});
