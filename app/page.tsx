import { Navbar } from "@/components/ux/Navber";
import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
