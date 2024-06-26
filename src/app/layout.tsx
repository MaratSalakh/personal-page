import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth overflow-x-hidden" lang="en">
      <body className={inter.className}>
        <header
          id="header"
          className="flex justify-between w-screen p-3 bg-neutral-300 height-500"
        >
          <div>
            <h1>My portfolio</h1>
          </div>
          <div className="flex">
            <div className="mx-1">
              <a href="#">Projects</a>
            </div>
            <div className="mx-1">
              <a href="#secondContent">About</a>
            </div>
            <div className="mx-1">
              <a href="#thirdContent">Links</a>
            </div>
          </div>
        </header>
        <div className="fixed bottom-5 right-5">
          <a href="#">to start</a>
        </div>

        {children}
      </body>
    </html>
  );
}
