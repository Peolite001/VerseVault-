"use client";
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../config/firebaseConfig';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ImSpinner3 } from "react-icons/im";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #D3D3D3',
  boxShadow: 24,
  p: 4,
};



const NewPostForm = ({ session }) => {
    
     const [open, setOpen] = useState(false);
       const handleOpen = () => setOpen(true);
       const handleClose = () => setOpen(false);

       const [processing, setProcessing] = useState(false);

    const iv = {
        title: "",
        poem: ""
    }

    const formValidation = Yup.object({
        title: Yup.string().required("This is a required field"),
        poem: Yup.string().required("This is a required field").min(15, "Minimum of 15 characters required")
    })

    const handleSubmit = async (values,{resetForm}) => {
        try {
            setProcessing(true)
            // create an object that goes to the db
            const poemDetails = {
                author: session.user.name,
                img: session.user.image,
                timestamp: new Date().toLocaleDateString(),
                authorId : session?.user?.id,
                ...values
            }
            console.log(poemDetails);
            const docRef = await addDoc(collection(db, "verses"), poemDetails)
            console.log("Document written with ID: ", docRef.id);
            resetForm()
            handleOpen()
        } catch (error) {
            console.error("Error adding document", error)
            alert("Oops, an error occurred. Try again later!")
        } finally{
            setProcessing(false)
        }
    }

    return (
        <main className='min-h-dvh flex items-center justify-center'>
            <div className='lg:w-3xl shadow-md rounded-md p-3'>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold text-gray-800 text-center'>Share your native stories and poems with a larger community</h1>

                <div>
                    <Formik initialValues={iv} validationSchema={formValidation} onSubmit={handleSubmit}>
                        <Form className='space-y-5'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='text-sm text-gray-800'>Poem Title</label>
                                <Field name="title" className="outline-none border rounded-md border-gray-200 p-2" />
                                <ErrorMessage name='title' component={"p"} className='text-xs text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='text-sm text-gray-800'>Share your Poem</label>
                                <Field as="textarea" name="poem"
                                    className="outline-none border rounded-md border-gray-200 p-2" />
                                <ErrorMessage name='poem' component={"p"} className='text-xs text-red-600' />
                            </div>

                            <button type='submit' className='bg-purple-600 text-white w-full rounded-md p-2 hover:bg-purple-700 transition-all duration-200'>
                                {processing ? <ImSpinner3 className="animate-spin text-2xl text-white text-center" />  : "Post yout Poem"}</button>
                        </Form>
                    </Formik>
                </div>
            </div>
             <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Post Successful!!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             Thanks for sharing your thoughts with the community            
          </Typography>
        </Box>
      </Modal>
        </main>
    )
}

export default NewPostForm
