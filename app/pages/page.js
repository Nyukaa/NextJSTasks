import { unstable_noStore as noStore } from "next/cache";

export const revalidate = 10;

function getRandomPost(posts) {
  const index = Math.floor(Math.random() * posts.length);
  return posts[index];
}

export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 },
  });

  const posts = await response.json();
  const randomPost = getRandomPost(posts);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <p>Last updated: {new Date().toLocaleString()}</p>
      <h2>Random Post</h2>
      <p>{randomPost.title}</p>
    </div>
  );
}
