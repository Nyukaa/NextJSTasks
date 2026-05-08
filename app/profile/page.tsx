export default async function Profile() {
  console.log("Rendering profile on server");
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    cache: "no-store", // Disable caching to always fetch fresh data
  });

  const user = await response.json();

  return (
    <div
      style={{
        fontSize: "18px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Profile Page</h1>

      <p>Welcome, {user.name}!</p>
    </div>
  );
}
