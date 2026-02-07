import React from 'react'
import { Education } from './imagesdata'

const Edu = () => {
    return (
        <section
            id='Education'
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom ">


            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-red-500  duration-300 hover:scale-110">EDUCATION</h2>
                <div className="w-90 h-1 bg-gray-800 mx-auto mt-4"></div>

                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    My education has been a journey of learning and development. Here are the details of my academic background
                </p>
            </div>

            {Education.map((edu, index) => (
                <div
                    key={index}
                    className={`relative flex flex-col  sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end "
                        }`}
                >
                    {/* Content */}
                    <div className="w-full bg-gray-900 duration-300 hover:scale-110  sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-1000 ml-8 sm:ml-44 sm:mr-44">
                        <div className="flex items-center space-x-6">


                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    {edu.degree}
                                </h3>
                                <h4 className="text-sm text-gray-300">
                                    {edu.school}
                                </h4>
                                <p className="text-sm text-gray-500">{edu.date}</p>
                            </div>

                        </div>

                        <p className="mt-4 text-gray-400 font-bold">
                            Grade : {edu.grade}
                        </p>
                        <p className="mt-4 text-gray-400">
                            {edu.desc}
                        </p>
                    </div>
                </div>
            ))}

            <hr className='text-gray-900' />
        </section>
    )
}

export default Edu
