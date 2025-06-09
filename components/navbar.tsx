import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#a1ccd2] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <p className="text-xl font-bold text-[#154C44]">Keep Notes</p>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/">
              <p className="text-[#154C44] hover:text-[#154C44] font-semibold">
                Notes
              </p>
            </Link>
            <Link href="/sign-in">
              <p className="text-[#154C44] hover:text-[#154C44] font-semibold">Login</p>
            </Link>
            <Link href="/sign-up">
              <p className="text-[#154C44] hover:text-[#154C44] font-semibold">
                Sign Up
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
