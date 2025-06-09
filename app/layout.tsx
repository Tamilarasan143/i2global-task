import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { BreadCrumb } from "@/components/bread-crumb";
import { NotesContextProvider } from "@/provider/notes-context-provider";

export const metadata: Metadata = {
  title: { default: "I2Global Task", template: `%s - I2Global Task` },
  description: "Created by Tamilarasan Elumalai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <BreadCrumb />
        <NotesContextProvider>
          <div className="bg-yellow-100">{children}</div>
        </NotesContextProvider>
      </body>
    </html>
  );
}
