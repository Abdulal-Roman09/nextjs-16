"use client";


import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface LogoutButtonProps {
  children?: ReactNode;
  className?: string;
}

export default function LogoutButton({ children, className }: LogoutButtonProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); 
          router.refresh(); 
        },
      },
    });
  };

  return (
    <span className={className} onClick={handleLogout} style={{ cursor: 'pointer' }}>
      {children || "Logout"}
    </span>
  );
}