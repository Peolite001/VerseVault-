"use client"
import React, { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../config/firebaseConfig';

const UpdateProfile = ({ session }) => {
    const userName = session?.user.name.name
    const uId = session?.user?.id
    const [name, setName] = useState(userName)

    const handleUpdate = async (id) => {
        const washingtonRef = doc(db, "users", id);
        await updateDoc(washingtonRef, {
            name: {name}
        });
        alert("Update sucessful")
    }

    return (
        <main className='md:w-3xl mx-auto'>
            <div>
                <input type="text" className='border border-gray-200 p-2 rounded-md w-full shadow-md outline-none' value={name} onChange={(e) => setName(e.target.value)} />

                <button onClick={() => handleUpdate(uId)} className='bg-purple-600 text-white rounded-md p-2 mt-3 mx-auto'>Update Profile</button>
            </div>
        </main>
    )
}

export default UpdateProfile