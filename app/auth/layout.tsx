import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Link href={"/"}>
        <div className="flex items-center">
          <ArrowLeft />
          <Button variant={"secondary"}> Go Back</Button>
        </div>
      </Link>
      {children}
    </div>
  );
}
