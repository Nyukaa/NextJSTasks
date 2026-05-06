import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  name: string;
  role: string;
  color: string;
}
export default function ProfileCard({ name, role, color }: ProfileCardProps) {
  return (
    <div className={`${styles.card} bg-gray-100`}>
      {/* Tailwind */}
      <h2 className="text-xl font-bold text-blue-600">{name}</h2>

      {/* inline styles */}
      <p style={{ color: color, fontSize: "14px" }}>{role}</p>

      {/* Tailwind badge */}
      <div className="mt-2 text-sm text-green-600">Active User</div>
    </div>
  );
}
