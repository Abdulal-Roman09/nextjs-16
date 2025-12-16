import { Navbar } from "@/components/ux/Navber";
import { ReactNode } from "react";

export default function SharedLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-8">{children}</main>
    </div>
  );
}
