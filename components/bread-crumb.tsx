"use client";
import { usePathname } from "next/navigation";
import React from "react";

export const BreadCrumb = () => {
  const currentPath = usePathname();
  const pagePath =
    currentPath === "/sign-in"
      ? "Login"
      : currentPath === "/sign-up"
      ? "Signup"
      : "Your Notes";
  return (
    <div className="fixed top-15 left-0 w-full  z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm ">HomePage / {pagePath} Page</div>
      </div>
    </div>
  );
};
