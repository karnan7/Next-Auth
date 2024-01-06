"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      if (response) {
        router.push("/login");
      }
    } catch (error: any) {
      console.log("signup failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-screen w-screen bg-violet-600 flex justify-between">
      <div className="h-screen flex justify-center flex-1 items-center p-10">
        <h1 className="text-6xl font-semibold max-w-[350px]">
          Think Outside The Box.
        </h1>
      </div>
      <div className="text-black bg-white p-[80px] rounded-l-3xl min-w-[700px] flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Create Account</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 w-[450px]"
        >
          <input
            type="text"
            name="username"
            placeholder="username"
            className="border-b-2 outline-none p-2"
            value={user.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="border-b-2 outline-none p-2"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="border-b-2 outline-none p-2"
            value={user.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded mt-10"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
          <span>
            Already have an account ?
            <Link
              href="/login"
              className="no-underline underline-offset-4 hover:underline text-sky-500"
            >
              {" "}
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
