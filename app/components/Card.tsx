type CardProps = {
  bgColor: string;
  title: string;
};
export default function Card({ bgColor, title }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "20px",
        borderRadius: "10px",
        margin: "10px 0",
        color: "white",
      }}
    >
      <h2>{title}</h2>
    </div>
  );
}
