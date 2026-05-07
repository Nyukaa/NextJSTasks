export default async function Pages() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await response.json();

  return (
    <div>
      <h1>Posts</h1>

      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
