import Image from 'next/image'
import React from 'react'

export const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#00A2E6]'>Skills</p>
        <h2 className='py-4'>What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                <div className='m-auto'>
                    <Image src='/../public/skills/html.png' width='64' height='64' alt='html' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                <div className='m-auto'>
                    <Image src='/../public/skills/javascript.png' width='64' height='64' alt='javascript' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Javascript</h3>
                </div>
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                <div className='m-auto'>
                    <Image src='/../public/skills/node.png' width='64' height='64' alt='nodejs' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Nodejs</h3>
                </div>
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                <div className='m-auto'>
                    <Image src='/../public/skills/docker.png' width='64' height='64' alt='docker' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Docker</h3>
                </div>
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                <div className='m-auto'>
                    <Image src='/../public/skills/postgres.png' width='64' height='64' alt='postgres' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Postgres</h3>
                </div>
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                <div className='m-auto'>
                    <Image src='/../public/skills/aws.png' width='64' height='64' alt='aws' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>AWS</h3>
                </div>
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                <div className='m-auto'>
                    <Image src='/../public/skills/nextjs.png' width='64' height='64' alt='nextjs' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Nextjs</h3>
                </div>
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                <div className='m-auto'>
                    <Image src='/../public/skills/tailwind.png' width='64' height='64' alt='tailwind' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind</h3>
                </div>
            </div>
        </div>
        </div>
        </div>

       

    </div>
  )
}
