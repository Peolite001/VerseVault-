"use server";
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react'
import UpdateProfile from '../components/UpdateProfile';

const page = async () => {
  const session = await auth()
  console.log(session.user.name.name);
  // ...because of the update function we wrote, session.user.name returns an object but session.user.name.name returns a string, thus fixing the error


  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <main className='min-h-dvh'>
      <div className='flex items-center justify-center flex-col gap-5 my-5'>

        <img src={session?.user?.image || "/fb.png"} alt={session?.user?.name.name} />
        <h1>{session?.user?.name?.name}</h1>
        <p>{session?.user?.email}</p>
      </div>

      <UpdateProfile session={session} />
    </main>
  )
}

export default page