export default function NavBar ()
{
    return (
        <div className="bg-gradient-to-r from-[#96C93D00] to-[#00B09B66] p-2 border-b-0 border-white w-full flex flex-row space-x-60">

            {/* Logo Div */}
            <div className="flex flex-start justify-start items-start mt-3 px-20">
                    <img src="/Logo.png" alt="Logo" className="w-auto h-auto object-contain mb-2">
                    </img>    
            </div>


            {/* Sub Sections Div */}
            <div className="flex flex-row justify-center items-center space-x-8 mt-3">
                <div className="text-center text-[#F7F8F8] font-inter font-medium text-md hover:border-b-2">
                    Features
                </div>
                <div className="text-center text-[#F7F8F8] font-inter font-medium text-md hover:border-b-2">
                    Community
                </div>
                <div className="text-center text-[#F7F8F8] font-inter font-medium text-md hover:border-b-2">
                    Affiliate
                </div>
                <div className="text-center text-[#F7F8F8] font-inter font-medium text-md hover:border-b-2">
                    API
                </div>
                <div className="text-center text-[#F7F8F8] font-inter font-medium text-md hover:border-b-2">
                    About
                </div>

            </div>

            {/* Buttons Div  */}
            <div className="flex flex-row justify-center items-center px-8 space-x-6 mt-3" >
                <div className="bg-inherit p-2 hover:bg-gradient-to-r hover:from-[#96C93D] hover:to-[#00B09B] hover:rounded-xl hover:px-3 hover:p-1">
                    <button className="text-[#F7F8F8] font-inter text-sm whitespace-nowrap">
                        Log in
                    </button>
                </div>

                <div className="p-1 px-3 rounded-xl  bg-gradient-to-r from-[#96C93D] to-[#00B09B]">
                    <button className="text-[#F7F8F8] font-inter text-sm  whitespace-nowrap">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    )
}