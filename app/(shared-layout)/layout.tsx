import { Navbar } from "@/components/ux/Navber";
import { requireAuth } from "@/module/auth/lib/auth-utils";
import { ReactNode } from "react";

export default async function SharedLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireAuth();
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-8">{children}</main>
    </div>
  );
}
