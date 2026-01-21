let posts = [
  { id: 1, title: "Hello Bun", content: "First post" },
  { id: 2, title: "React Blog", content: "Frontend + Backend" },
];

export function getPosts() {
  return posts;
}

export function getPostById(id) {
  return posts.find((p) => p.id === id);
}

export function createPost(data) {
  const post = {
    id: Date.now(),
    ...data,
  };
  posts.push(post);
  return post;
}

export function updatePost(id, data) {
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return null;

  posts[index] = { ...posts[index], ...data };
  return posts[index];
}

export function deletePost(id) {
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return false;

  posts.splice(index, 1);
  return true;
}