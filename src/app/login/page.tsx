"use client";

import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Axios } from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>

      <label htmlFor="email">email</label>
      <input
        className="p-2 border-gray-300 rounded-lg mb-4 border-2 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <hr />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border-gray-300 rounded-lg mb-4 border-2 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <Button
        variant="outlined"
        color="success"
        size="medium"
        onClick={onLogin}
      >
        Login
      </Button>
      <Link className="underline" href="/signup">
        Visit signup page
      </Link>
    </div>
  );
}
