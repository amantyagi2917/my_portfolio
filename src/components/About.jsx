import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import image from "/src/templates/images/aman.jpg"



function About() {
    return (
        <section id='About'>

            <div className='flex justify-center h-150 '>
                {/* about left side  5 */}
                <div className='w-[60%]'>
                    <div className='font-semibold items-center  mt-5 sm:text-5xl ml-5 md:text-6xl  gap-2 md:m-10  '>
                        <h1 className='transition-transform duration-300 hover:scale-105 '>Hi,i am </h1>
                        <h1 className='transition-transform duration-300 hover:scale-105'> Aman Tyagi</h1>

                        <div className=" text-4xl md:text-7xl flex gap-2 items-center">

                            <h3 className=' pt-2 text-5xl transition-transform duration-300 hover:scale-110'>I am a <span className='text-red-500 text-3xl '>Full Stack developer</span></h3>

                        </div>



                    </div>

                    <div className=' w-full tracking-wider opacity-90 '>
                        <p>I am a passionate MERN stack developer with expertise in building dynamic and responsive web applications. Skilled in MongoDB, Express.js, React.js, and Node.js, I create scalable solutions that deliver excellent user experiences. I enjoy turning complex problems into elegant code, ensuring clean architecture and optimal performance. With a strong understanding of both front-end and back-end development, I can develop full-stack applications from concept to deployment. Continuously learning new technologies and best practices, I strive to stay ahead in the fast-evolving web development industry.</p>
                    </div>
                    {/* downlode cv button */}
                    <div className='w-full mt-10 '>
                       
                        <a
                            className='btn bg-red-500 text-xl items-center p-6 transition-transform duration-300 hover:scale-110 '

                            href='/amn.pdf'
                            target="_blank"
                            // rel="noopener noreferrer"
                            
                        >
                            Downlode CV</a>
                    </div>

                </div>
                {/* about right side */}
                <div className="hover-3d">

                    {/* content */}
                    <figure className=" md:w-80 rounded-2xl m-10 ">
                        <img src={image} alt="Tailwind CSS 3D card" />
                    </figure>
                    {/* 8 empty divs needed for the 3D effect */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>


            </div>
            <hr className='text-gray-800' />
        </section>

    )
}

export default About
