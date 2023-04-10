import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp} from 'react-icons/hi'

export const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-15 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#00A2E6]'>Contact</p>
            <h2 className='py-4'> Get in touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                 <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>

                    <div className='lg:p-4 h-full'> 
                    <div>
                    <img className='rounded-xl hover:scal-105 ease-in duration-300' src='https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='contact' />

                    </div>
                    
                    <div>
                        <h2 className='py-2'>Bikesh Shrestha</h2>
                        <p>Software Engineer</p>
                    </div>
                    <div>
                    <p className='uppercase pt-8'>Connect with me</p>
                    <div className='flex items-center justify-between py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedin/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div>
                        
                    </div>

                </div>
                    </div>


                 </div>

                 {/* right */}
                 <div className='col-span-3 w-full- h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form action="">
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        Name
                                    </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'></input>

                                </div>

                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        Phone number
                                    </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'></input>

                                </div>



                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                        Email
                                    </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email'></input>

                                </div>

                                <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                        Subject
                                    </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email'></input>

                                </div>

                                <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                        Message
                                    </label>
                                    <textarea className="border-2 rounded-lg p-3 border-gray-300 rows='10'"></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send message</button>
                        </form>

                    </div>

                 </div>
 
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#00A2E6]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
        
    </div>
  )
}
