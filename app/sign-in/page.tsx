import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Sign In",
};
export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br ">
      <form  className="rounded-xl border border-amber-600 w-80 ">
        <div className="p-1 bg-amber-400  border-b border-amber-600 rounded-t-xl">
        <h2 >Login</h2>
        </div>
        <div className="p-8 space-y-5">
          <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <div className="flex gap-x-3 px-2 flex-1">
        <button
          type="submit"
         
          className="w-full bg-amber-400 hover:bg-amber-400 py-2 rounded-lg transition"
        >
          Login
        </button>
         <button
          type="submit"
         
          className="w-full bg-[#a1ccd2] hover:bg-[#a1ccd2] text-[#154C44]  py-2 rounded-lg transition"
        >
          Register
        </button>
        </div>
        </div>
      </form>
    </div>

  );
}
