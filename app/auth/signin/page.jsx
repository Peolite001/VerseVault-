import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth()
  console.log(session);
  
  if(session){
    redirect("/new-post")
  }
  
  return (
    <main className="h-dvh flex items-center justify-center">
      <div className="shadow-md p-3 rounded-md space-y-5 md:w-xl w-full">
        <h1 className="text-center text-gray-800 font-bold text-2xl mb-6">
          Sign in to your Account
        </h1>

        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            type="submit"
            className="border flex items-center justify-center gap-3 border-gray-300 py-3 rounded-full w-full"
          >
            <FcGoogle className="text-2xl" />
            <p>Continue with Google</p>
          </button>
        </form>

        <button className="border flex items-center justify-center gap-3 border-gray-300 py-3 rounded-full w-full">
          <FaGithub className="text-2xl" />
          <p>Continue with Github</p>
        </button>
        <button className="border cursor-pointer flex items-center justify-center gap-3 border-gray-300 py-3 rounded-full w-full">
          <FaApple className="text-2xl" />
          <p>Continue with Apple</p>
        </button>

        <p className="text-xs text-gray-500 text-center">
          By signing in, you agree to our terms and privacy policy
        </p>
      </div>
    </main>
  );
};

export default page;
