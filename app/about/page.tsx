import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1> Hi, I am Anna — a full-stack developer with a curious mind</h1>

      <p
        style={{
          color: "#6a9a7a",

          fontSize: "0.9rem",

          margin: 0,
        }}
      >
        Ever since Iwas a child, I dreamed of becoming a programmer. That dream
        shaped my education: I studied mathematics and computer science,
        building a solid foundation in logic and problem-solving. When I am not
        coding, Iam probably playing piano, skiing through snowy trails, diving
        into photography, or sipping a warm drink while sketching new ideas. I
        believe in lifelong learning and enjoy working with people who value
        clarity, creativity, and collaboration.
      </p>

      <Link href="/">Back to Home</Link>
    </div>
  );
}
