import { Metadata } from "next/types";
import { ThreeDots } from "@/components/three-dots";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br">
      <form className="rounded-xl border border-[#CC9F67] w-80">
        <div className="p-3 bg-[#F6C59E] flex items-center justify-between border-b border-[#CC9F67] rounded-t-xl">
          <h2>Login</h2>
          <ThreeDots />
        </div>
        <div className="p-8 space-y-5">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg"
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
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div className="flex gap-x-3 px-2 flex-1">
            <button
              type="submit"
              className="w-full bg-[#F6C59E] hover:bg-[#F6C59E] py-2 rounded-lg transition"
            >
              Login
            </button>
            <Link href="/sign-up" className="w-full">
              <button
                type="button"
                className="w-full bg-[#8EC8B5] hover:bg-[#8EC8B5] text-[#154C44] py-2 rounded-lg transition"
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
