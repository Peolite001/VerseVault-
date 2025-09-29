"use server"
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import Explore from './explore'

const page = async () => {
    const session = await auth()
    if (!session) {
        redirect("/auth/signin")
    }
    return (
        <main className='min-h-dvh'>
           <Explore session={session}/>
        </main>
    )
}

export default page