"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";
import { signIn } from "@/lib/auth-client";

export default function LoginUI() {
  const [isLoading, setLoading] = useState(false);

  const handleGithubLogin = async () => {
    setLoading(true);
    try {
      await signIn.social({
        provider: "github",
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-orange-500 to-orange-600 text-white p-16">
          <div className="text-center space-y-8">
            <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="w-48 h-48 text-white"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <circle cx="50" cy="50" r="45" opacity="0.2" />
                <circle cx="32" cy="38" r="12" fill="white" />
                <circle cx="68" cy="38" r="12" fill="white" />
                <path d="M25 15 Q50 0 75 15 Q85 40 75 65 Q50 90 25 65 Q15 40 25 15" />
                <path
                  d="M35 55 Q50 75 65 55"
                  stroke="white"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h1 className="text-5xl font-bold">CodeRabbit</h1>
            <p className="text-2xl opacity-90">AI-Powered Code Reviews</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center p-12 lg:p-20">
          <Card className="border-0 shadow-none max-w-md mx-auto w-full">
            <CardHeader className="text-center space-y-4 pb-8">
              <CardTitle className="text-3xl font-bold">
                Sign in to CodeRabbit
              </CardTitle>
              <CardDescription>
                Continue with your GitHub account
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              <Button
                onClick={handleGithubLogin}  
                size="lg"
                variant="outline"
                disabled={isLoading}
                className="w-full bg-black text-white border-black flex items-center justify-center gap-3 text-lg py-8"
              >
                <Github className="w-6 h-6" />
                {isLoading ? "Signing in..." : "Sign in with GitHub"}
              </Button>

              <p className="text-center text-sm text-gray-500 mt-8">
                This is a static demo page. No authentication is implemented.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
