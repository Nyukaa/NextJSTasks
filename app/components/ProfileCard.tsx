import styles from "./ProfileCard.module.css";
import Image from "next/image";
interface ProfileCardProps {
  name: string;
  role: string;
  color: string;
}
export default function ProfileCard({ name, role, color }: ProfileCardProps) {
  return (
    <div
      className={`${styles.card} bg-gray-100 flex items-center justify-between`}
    >
      {/* Left side: text */}
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-blue-600">{name}</h2>

        <p style={{ color: color, fontSize: "14px" }}>{role}</p>

        <div className="mt-2 text-sm text-green-600">Active User</div>
      </div>

      {/* Right side: image */}
      <Image
        src="/hero.png"
        alt="hero"
        width={200}
        height={200}
        className="rounded-full"
      />
    </div>
  );
}
