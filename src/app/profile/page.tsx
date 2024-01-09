"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    const response = await axios.get("/api/users/logout");
    if (response) {
      router.push("/login");
    }
  };
  return (
    <div>
      <h1>profile</h1>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default ProfilePage;
