import React from 'react'

export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-whidest text-[#00A2E6]'>About</p>
                <h2 className='py-4'> Who I am</h2>
                <p className='py-2 text-gray-600'> Hi, I'm Bikesh Shrestha, a backend developer with a passion for DevOps culture. My core language is Node.js, and I have experience working with a range of technologies, including blockchain, serverless, and Docker. I specialize in creating scalable and reliable backend solutions that can run in cloud-based environments. With my expertise in blockchain technology, I have built decentralized applications and worked on new digital currencies. I am also experienced in serverless technology, creating and deploying applications that run on AWS Lambda and other platforms.</p>
                <p className='py-2 text-gray-600'>In addition, I am comfortable working with Docker, allowing me to easily deploy and manage applications in containers. My skills in backend development, coupled with my expertise in these cutting-edge technologies, make me a valuable asset to any team working on cloud-based projects. If you're looking for a backend developer who can help you create scalable and reliable solutions that run on the cloud, please feel free to get in touch with me. I'm excited to discuss your project and how I can help bring your ideas to life.</p>

            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="/"></img>
            </div>
        </div>
    </div>
       
  )
}
