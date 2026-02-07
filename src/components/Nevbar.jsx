import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { TbXboxX } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { FiX } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";





function Nevbar() {

    const [activesection, setactivesection] = useState("")
    const [isopen, setisopen] = useState(false)
    const [isscroll, setisscroll] = useState(false)

    //////window scroll//////
    useEffect(() => {
        const scrolhendal = () => {
            setisscroll(window.scroll > 50);
        }
        window.addEventListener('scroll', scrolhendal);

        return () => { window.removeEventListener("scroll", scrolhendal) }

    }, [])




    function menuhandel(params) {
        setactivesection(params)
        setisopen(false)

    }


    const menubardata = [
        { id: "About", lable: "About" },
        { id: "skills", lable: "skills" },
        { id: "Education", lable: "Education" },
        { id: "projects", lable: "projects" },
        { id: "contact", lable: "contact" }
    ]
    return (
       <section>
        
            <div className="navbar bg-red-600 shadow-sm ">


                <div className=" flex-1 text-white py-5 flex justify-between items-center">
                    <a className="  text-2xl font-bold">Portfolio</a>
                </div>

                <div>

                    <ul className=" hidden md:flex space-x-8 mr-5 ">
                        {menubardata.map((item) => {

                            return (
                                <li key={item.id} className={`cursor-pointer  ${activesection === item.id ? "text-blue-500" : "text-white hover:text-blue-500"}`}>

                                    <span className='px-2 py-2'>
                                       <a href={`#${item.id}`}>{item.lable}</a>
                                    </span>
                                </li>
                            )
                        })}

                    </ul>

                </div>

                <div className=' hidden md:flex gap-5 mr-10'>
                    <a
                        href="https://github.com/amantyagi2917"
                        target='_blank'
                        className='text-gray-300 hover:text-[#8245ec] pt-0.5'
                    ><FaGithub size={30} /></a>

                    <a
                        href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                        target='_blank'
                        className='text-gray-300 hover:text-[#8245ec] '
                    ><CiLinkedin size={35} /></a>
                </div>

                <div className='md:hidden z-10'>
                    {
                        isopen ? (<FiX className='text-3xl cursor-pointer text-[#8245ec]' onClick={() => { setisopen(false) }} />)
                            :
                            <TfiMenuAlt className='text-3xl cursor-pointer text-[#8245ec]' onClick={() => { setisopen(true) }} />

                    }

                    {
                        isopen && (<div className='absolute top-16 left-1/2 -translate-x-1/2 w-4/5 bg-[#050414]/70 backdrop-blur-md rounded-xl '>

                            <ul className='flex  flex-col items-center space-y-4 py-4 text-gray-300 '>

                                {
                                    menubardata.map((item) => (

                                        <li key={item.id} c lassName={`cursor-pointer  ${activesection === item.id ? "text-blue-500"
                                            :
                                            "text-white hover:text-blue-500"}`}>
                                            <span onClick={() => (menuhandel(item.id))} className='cursor-pointer'>
                                                {item.lable}
                                            </span>
                                        </li>

                                    ))  
                                }

                                <div className='flex gap-4  '>
                                    <a
                                        href="https://github.com/amantyagi2917"
                                        target='_blank'
                                        className='text-gray-300 hover:text-[#8245ec]'
                                    ><FaGithub size={25} /></a>

                                    <a
                                        href=""
                                        target='_blank'
                                        className='text-gray-300 hover:text-[#8245ec] '
                                    ><CiLinkedin size={29} /></a>
                                </div>

                            </ul>
                        </div>
                        )
                    }


                </div>

            </div>



        
       </section>
    )
}
export default Nevbar
