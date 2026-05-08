export const revalidate = 10;

export default async function HybridPage() {
  // SSG / ISR section
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: { revalidate: 10 },
    }
  );

  const posts = await postsResponse.json();

  // SSR section
  const userResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      cache: "no-store",
    }
  );

  const user = await userResponse.json();

  return (
    <div>
      <h1>Hybrid Rendering Page</h1>

      {/* Static / ISR section */}
      <section>
        <h2>Latest Posts (ISR)</h2>

        <p>Last updated: {new Date().toLocaleString()}</p>

        <ul>
          {posts.slice(0, 5).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* Dynamic / SSR section */}
      <section>
        <h2>User Dashboard (SSR)</h2>

        <p>Welcome, {user.name}!</p>
      </section>
    </div>
  );
}
