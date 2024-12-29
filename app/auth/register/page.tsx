"use client";

import Link from "next/link";
import { signup } from "./action";
import { useActionState } from "react";

const initialState = {
  error: null,
};

export default function RegisterPage() {
  // @ts-ignore
  const [state, formAction] = useActionState(signup, initialState);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="bg-graydark p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Register
        </h1>
        <form className="space-y-4" action={formAction}>
          {state.error && (
            <div className="bg-red-500 text-white p-2 rounded">
              {state.error}
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 focus:shadow-xl focus:shadow-primary border border-gray-600 rounded-md text-black"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 focus:shadow-xl focus:shadow-primary border border-gray-600 rounded-md text-black"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 focus:shadow-xl focus:shadow-primary border border-gray-600 rounded-md text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary flex justify-center items-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
