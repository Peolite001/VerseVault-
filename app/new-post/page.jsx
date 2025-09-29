"use server"
import React from 'react'
import NewPostForm from './post'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const page = async () => {
  const session = await auth()
  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main>
      <NewPostForm session={session}/>
    </main>
  )
}

export default page
