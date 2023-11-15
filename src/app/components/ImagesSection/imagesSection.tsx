export default function ImagesSection ()
{
    return (
        <div className="bg-inherit flex flex-col mb-10">

        {/* First Row */}
        <div className="flex flex-row space-x-2 px-2">
            <img src="/image1.png" alt="Image1" className=" w-72 h-72 object-contain border-[#323232] rounded-lg"/>
            <img src="/image2.png" alt="Image1" className=" w-72 h-72 object-contain border-[#323232] rounded-lg"/>
            <img src="/image17.png" alt="Image17" className=" w-72 h-72 object-contain border-[#323232] rounded-lg"/>
            <img src="/image18.png" alt="Image18" className=" w-72 h-72 object-contain border-[#323232] rounded-lg"/>
            <img src="/image19.png" alt="Image19" className=" w-72 h-72 object-contain border-[#323232] rounded-lg"/>
        </div>

        {/* Second Row */}
        <div className="flex flex-row space-x-2 px-2">
            <img src="/image19.png" alt="Image19" className=" w-72 h-72 object-contain border-[#323232] rounded-lg"/>
            <img src="/image18.png" alt="Image4" className=" w-72 h-72 object-contain border-[#323232] rounded-lg"/>
            <img src="/image2.png" alt="Image5" className=" w-72 h-72 object-contain border-[#323232] rounded-lg"/>
            <img src="/image1.png" alt="Image6" className=" w-72 h-72 object-contain border-[#323232] rounded-lg"/>
            <img src="/image17.png" alt="Image17" className=" w-72 h-72 object-contain border-[#323232] rounded-lg"/>
        </div>

        </div>
        
    )
}