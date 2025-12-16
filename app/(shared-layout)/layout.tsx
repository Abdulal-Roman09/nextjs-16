import { Navbar } from "@/components/ux/Navber";
import { ReactNode } from "react";

export function SharedGroupLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto p-8">
        {children}
      </div>
    </div>
  );
}