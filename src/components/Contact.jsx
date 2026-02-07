import React, { useRef, useState } from 'react'

function Contet() {

  const form =useRef();
  
  const [input,setinput]=useState("")


  
    
  const sendemail=(e)=>{
      e.preventDefault()

      if (!form.current.user_email.value||!form.current.subject.value||!form.current.name.value||!form.current.message.value) {

        alert('please fill all')
        
      }else{
        
        alert("email sent sucessfullu")
         form.current.reset();
      }

     
  }

  return (
    <section
      id='contact'
      className=' pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom
     

 '>

      <div className='text-center '>

        <h2 className=' text- text-4xl text-red-500 font-bold  duration-300 hover:scale-110 '>Contact</h2>

      </div>

      <div>
        <div className="w-90 h-1 bg-gray-800 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold text-center">
          I ’ d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className='w-full flex justify-center items-center'>



        <form 
        ref={form} 
        onSubmit={sendemail}

        className='bg-gray-900 outline rounded-xl mt-20 p-9 '>

          <div className='text-center '>
            <h1 className='text-gray-600 text-xl font-bold pb-7 '>Contact with me</h1>
          </div>
          <div>

            <div className='mr-8'>

              <input type="email"  name='user_email' placeholder='Your Email' className=' bg-gray-300 ml-8 mt-2 outline-none rounded-[6px] mb-1 placeholder:pl-2 py-1   text-black ' />
            </div>

            <div>
              <input type="text" name='name' placeholder='Your Name ' className='bg-gray-300 ml-8 mt-2 outline-none rounded-[6px] mb-1 placeholder:pl-2 py-1   text-black ' />
            </div>

            <div>
              <input type="text" name='subject'  placeholder='Your subject' className='bg-gray-300 ml-8 mt-2 outline-none rounded-[6px] mb-1 placeholder:pl-2  py-1   text-black' />
            </div>

            <div className='w-full'>
              <textarea name="message"  placeholder='Message' className='bg-gray-300  text-black mt-2 ml-8  rounded-[6px] placeholder: pl-3 px-4'></textarea>
            </div>
          </div>

          <button  type='submit' className='btn w-full bg-gradient-to-r from-red-500 to-yellow-600 mt-8 '>SEND</button>

        </form>
      </div>
      <hr className='text-gray-900 mt-5' />
    </section>
  )
}

export default Contet
