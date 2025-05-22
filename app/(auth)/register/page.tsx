"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { login } from "../actions";

export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <div className="w-full max-w-md overflow-hidden rounded-2xl gap-12 flex flex-col">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h3 className="text-xl font-semibold dark:text-zinc-50">Sign Up</h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            Create an account with google
          </p>
        </div>
        <Button onClick={() => login} className="w-fit mx-auto bg-transparent border border-white transition-all duration-200 ease-in-out">
          <Image
            src="/images/google.svg"
            alt="google logo"
            width={100}
            height={100}
            className="size-6 mr-2"
          />
          <span className="text-white">Sign In With Google</span>
        </Button>
      </div>
    </div>
  );
}
