import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Topbar from '@/components/Topbar/Topbar'
import Link from 'next/link'
import ProblemsTable from '@/components/ProblemsTable/ProblemsTable'
import { useState } from 'react'
import { setDoc, doc } from 'firebase/firestore'
import { firestore } from '@/firebase/firebase'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // Logic to add data to firestore
  // const [inputs, setInputs] = useState({
  //   id: '',
  //   title: '',
  //   difficulty: '',
  //   category: '',
  //   videoId: '',
  //   link: '',
  //   order: 0,
  //   likes: 0,
  //   dislikes: 0,
  // });

  // const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
  //   setInputs({
  //     ...inputs,
  //     [e.target.name]: e.target.value
  //   })
  // } 
  // console.log(inputs);

  // const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault(); //prevent page refresh
  //   //convert inputs.order to integer
  //   const newProblem = {
  //     ...inputs,
  //     order: Number(inputs.order),
  //   }
  //   await setDoc(doc(firestore, "problems", inputs.id), newProblem);
  //   alert ('saved to db');
  // }

  return (
    <>
      
      <main className='bg-dark-layer-2 min-h-screen'>
        <Topbar />
        <Link href='/problems'>
          <h2 className='bg-white p-2'>Problems</h2>
        </Link>


        {/* Form to add problems to DB */}
        {/* <form className='p-6 flex-col max-w-sm gap-3' onSubmit={handleSubmit}>
          <input onChange={handleInputChange} type="text" placeholder='problem id' name='id' />
          <input onChange={handleInputChange} type="text" placeholder='titile' name='title' />
          <input onChange={handleInputChange} type="text" placeholder='difficulty' name='difficulty' />
          <input onChange={handleInputChange} type="text" placeholder='category' name='category' />
          <input onChange={handleInputChange} type="text" placeholder='order' name='order' />
          <input onChange={handleInputChange} type="text" placeholder='videoId?' name='videoId' />
          <input onChange={handleInputChange} type="text" placeholder='link?' name='link' />
          <button className='bg-white'>Save to db</button>
        </form> */}
      </main>
    </>
  )
}
