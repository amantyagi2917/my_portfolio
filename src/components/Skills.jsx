import React from 'react'
import { SkillsInfo } from './imagesdata'


const Skills = () => {
console.log(SkillsInfo);
  
  return (
    <>
    <section 
    id='skills'
     className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
        <div className='text-center '>
        <h2 className=' text- text-4xl text-red-500 font-bold  duration-300 hover:scale-110 '>Skills</h2>  
        <div className="w-90 h-1 bg-gray-800 mx-auto mt-4"></div>     
    </div>

    <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>

      {SkillsInfo.map((cat)=>{
        console.log(cat);
        
       return (
      <div key={cat.title} className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
        shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
        hover:scale-110 duration-300 ">
         <h1 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center"> {cat.title}</h1>

          <h3 className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full "> {cat.skills.map((nn,idx)=>{

            return (<div key={idx}>

              <div className="flex items-center justify-center  bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center ">
                <img src={nn.img} alt=" images logo" className=' w-6 h-6 sm:w-8 sm:h-8 '/>

                 
                 <span className="text-xl sm:text-sm text-gray-300">
                    {nn.name}
                  </span>

              </div>

              
            </div>)            
          })}</h3>
       </div>
       
      
       
      );
       
      })}

    </div>
    </section>
    <hr className='text-gray-900'/>
    </>
  )
}

export default Skills
