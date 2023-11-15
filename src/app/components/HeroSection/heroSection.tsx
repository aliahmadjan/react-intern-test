export default function HeroSection ()
{
    return (
        <div className="bg-gradient-to-r from-[#96C93D00] to-[#00B09B66] h-full flex flex-col items-center">
            
            
            {/* Main Heading */}
            <div className="mt-20 w-auto h-auto">
            <div className="text-[#FFFFFF] text-center text-5xl italic font-inter">
            Generate your ideas into<br/> stunning visuals
            </div>
            </div>

            {/* Sub Heading */}
            <div className="w-auto h-auto">
            <div className="text-[#B4BCD0] text-center text-sm font-inter mt-6">
            Meet the new standard for modern software development.<br/>
            Streamline issues, sprints, and product roadmaps
            </div>
            </div>

            {/* Input Field */}
            <div className="flex flex-col justify-center bg-inherit mt-6 items-center">
                <input 
                placeholder="Enter Your Email"
                className="rounded-full w-[200%] h-14 pl-5 bg-gray-800 text-white">
                </input>
            </div>

            {/* Button */}
            <div className="flex flex-col justify-center items-center w-72 h-auto p-4 rounded-lg mt-6 mb-20" style={{ background: 'linear-gradient(to right, #96C93D, #00B09B)' }}>
                <button 
                className="text-white font-inter">
                    Join the waitlist
                </button>
            </div>

        </div>
    )
}