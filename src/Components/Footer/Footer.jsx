import 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaSquareFacebook, FaInstagram, FaGoogle, FaTelegram } from "react-icons/fa6";




const Footer = () => {
  return (
    <div className='bg-gradient-to-t mt-5 from-primary to-primaryDark pt-12 pb-8 text-white'>
      <div className='container'>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {/* Compney detail section */}
            <div className='space-y-6'>
              <h1 className='text-3xl font-bold uppercase'>Coders Cafe</h1>
              <p className='text-md max-w-[300px]'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius officiis incidunt exercitationem obcaecati nam illo magnam nemo blanditiis veritatis quod.
              </p>
              <div>
                <p className='flex items-center gap-2'>
                  <FaPhoneAlt/>
                  +1 (234) 456-7890
                </p>
                <p className='flex items-center gap-2 mt-2'>
                  <FaMapLocationDot/>
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>

            {/* Footer links sec */}
            <div className='space-y-6'>
               <h1 className='text-3xl font-bold'>Quick Links</h1>
               <div className='grid grid-cols-2 gap-3 text-xl'>
                  {/* first colom */}
                  <div>
                    <ul className='space-y-2'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Privecy Police</li>
                    </ul>
                  </div>
                  {/* second colom */}
                  <div>
                    <ul className='space-y-2'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Privecy Police</li>
                    </ul>
                  </div>
               </div>
            </div>

            {/* social links */}
            <div className='space-y-6'>
             <h1 className='text-3xl font-bold'>Follow Us</h1>
             <div className='flex items-center gap-3'>
                <FaSquareFacebook className='text-3xl items-center hover:scale-105 duration-300'/>
                <FaInstagram className='text-3xl items-center hover:scale-105 duration-300'/>
                <FaGoogle className='text-3xl items-center hover:scale-105 duration-300'/>
                <FaTelegram className='text-3xl items-center hover:scale-105 duration-300'/>
             </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Footer