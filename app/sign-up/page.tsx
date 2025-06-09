import { Metadata } from "next/types";
import { ThreeDots } from "@/components/three-dots";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account to start managing your notes.",
  keywords: ["Notes App", "Register", "Sign Up", "Create Account", "Next.js Notes"],
  openGraph: {
    title: "Sign Up - Notes App",
    description: "Register for a new account and begin using your notes dashboard.",
  },
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br">
       <form className="rounded-xl border border-[#CC9F67] w-80 ">
        <div className="p-3 bg-[#F6C59E] flex items-center justify-between border-b border-[#CC9F67] rounded-t-xl">
          <h2>SignUp</h2>
          <ThreeDots />
        </div>
        <div className="p-8 space-y-5">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>

          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full bg-white px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full bg-white px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full bg-white px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full bg-white px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div className="flex gap-x-3 px-2 flex-1">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg transition"
            >
              Register
            </button>
            <Link href="/sign-in" className="w-full">
              <button
              type="button"
              className="w-full bg-[#F6C59E] hover:bg-[#F6C59E] py-2 rounded-lg transition"
            >
              Login
            </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
