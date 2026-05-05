import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1
        style={{
          color: "#6a9a7f",

          fontSize: "0.9rem",

          margin: 0,
        }}
      >
        Home Page
      </h1>

      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
