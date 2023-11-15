import {FaInstagram} from 'react-icons/fa6'
import {FaWhatsapp,FaLinkedin,FaTwitter} from 'react-icons/fa'
export default function Footer ()
{
    return (
        <>
        <div className="flex flex-row mt-10 space-x-72 mb-10">

          <div className="flex flex-col justify-start items-start px-10 mb-10">
            <img src="/Logo.png" alt="Logo" className="w-auto h-auto object-contain"/>   
            <div className="text-start text-[#D9D9D9] text-sm font-inter font-normal mt-2">
            Companies that can help you in developing your <br/>company for the future
            </div>
         
         </div>  

         <div className="flex flex-col gap-2 mb-10">
            <div className="text-white text-center font-inter font-medium text-sm">
                Features
            </div>
            <div className="text-white text-center font-inter font-medium text-sm">
                Community
            </div>
            <div className="text-white text-center font-inter font-medium text-sm">
                Affiliate
            </div>
            <div className="text-white text-center font-inter font-medium text-sm">
                API
            </div>
            <div className="text-white text-center font-inter font-medium text-sm">
                About
            </div>
         </div>

         <div className="flex flex-col gap-2 mb-10">
            <div className="text-white text-start font-inter font-medium text-md">
                Business Features
            </div>
            <div className="text-white text-start font-inter font-normal text-sm">
                Data-Based Chatbot Training
            </div>
            <div className="text-white text-start font-inter font-normal text-sm">
               Model Fine-Tuning
            </div>
            <div className="text-white text-start font-inter font-normal text-sm">
                Sales & Customer Service Smart Agents
            </div>
        
            </div>



        </div>
        <div className="flex flex-row space-x-64 px-10 mb-10">
            <div className="text-white font-inter font-normal text-sm">
            © 2023 Mangcoding. All rights reserved.
            </div>

            <div className="flex flex-row space-x-6">
                <div className="text-white font-inter font-normal text-sm">
                    Privacy Policy
                </div>
                <div className="text-white font-inter font-normal text-sm">
                    Terms of Service
                </div>
                <div className="text-white font-inter font-normal text-sm">
                    Cookie Policy
                </div>
                
            </div>

            <div className="flex flex-row space-x-4">
            <FaInstagram size={25} />
            <FaWhatsapp size={25}/>
            <FaLinkedin size={25} />
            <FaTwitter size={25}/>
                
            </div>
        </div>
        </>
    )
}