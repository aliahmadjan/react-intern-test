export default function Features ()
{
    return (
        <div className ="flex flex-col bg-black mb-28">
            {/* Features Heading */}
            <div className="flex flex-row justify-center items-center">
                <div className=" text-[#CFD1D5] font-inter text-2xl font-medium">
                    Features in
                </div>
            </div>

            {/* Companies */}
            <div className="flex flex-row space-x-6 mt-6 px-10">
                <img src="/google.png" alt="Google" className="w-auto h-auto object-contain"/>
                <img src="/dolby.png" alt="Dolby" className="w-auto h-auto object-contain"/>
                <img src="/logitech.png" alt="Logitech" className="w-auto h-auto object-contain"/>
                <img src="/buffer.png" alt="Buffer" className="w-auto h-auto object-contain"/>
                <img src="/boardriders.png" alt="BoardRiders" className="w-auto h-auto object-contain"/>
                <img src="/cisco.png" alt="Cisco" className="w-auto h-auto object-contain"/>
            </div>

        </div>
    )
}