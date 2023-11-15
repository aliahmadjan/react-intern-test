export default function AboutPhotosoft ()
{
    return (
        <div className="bg-black flex flex-col mt-10 mb-10">

            {/* Why Photosoft AI? */}
            <div className="flex flex-row justify-start items-start space-x-80 px-10 mb-20">
                <div className="text-white font-inter font-medium text-4xl px-10">
                    Why Photosoft AI
                </div>
                <div className="text-[#80858F] font-medium font-inter text-lg">
                Meet the new standard for modern software development.<br/>
                Streamline issues, sprints, and product roadmaps.
                </div>
            </div>

                {/* 3 Boxes Divs */}
            <div className="flex flex-row space-x-10 justify-start items-start px-44 mb-20">

                <div className=" bg-[#323232] w-[350px] h-[179px] rounded-lg relative">
                <div className="absolute top-0 left-0 mt-6 ml-8 bg-[#6CC257] p-3 rounded-lg">
                    <img src="/Vector.png" alt="Vector" className="w-6 h-6 object-contain"/>
                    </div>
                    <div className="absolute top-0 left-0 ml-8 mt-20 text-white font-inter font-semibold text-lg">
                        Free to use
                    </div>
                    <div className="absolute top-0 left-0 ml-8 mt-28 text-white font-inter font-medium text-sm">
                    Try out a free AI art generator today. 
                    </div>
                </div>

                <div className=" bg-[#323232] w-[350px] h-[179px] rounded-lg relative">
                <div className="absolute top-0 left-0 mt-6 ml-8 bg-[#6CC257] p-3 rounded-lg">
                    <img src="/Vector.png" alt="Vector" className="w-6 h-6 object-contain"/>
                    </div>
                    <div className="absolute top-0 left-0 ml-8 mt-20 text-white font-inter font-semibold  text-lg">
                    Fully Customizable
                    </div>
                    <div className="absolute top-0 left-0 ml-8 mt-28 text-white font-inter font-medium text-sm">
                    Try experimenting with different artistic<br/> styles. 
                    </div>
                </div>

                <div className=" bg-[#323232] w-[350px] h-[179px] rounded-lg relative">
                    <div className="absolute top-0 left-0 mt-6 ml-8 bg-[#6CC257] p-3 rounded-lg">
                    <img src="/Vector.png" alt="Vector" className="w-6 h-6 object-contain"/>
                    </div>
                    <div className="absolute top-0 left-0 ml-8 mt-20 text-white font-inter font-semibold text-lg">
                    Fully Customizable
                    </div>
                    <div className="absolute top-0 left-0 ml-8 mt-28 text-white font-inter font-medium text-sm">
                    High-quality images that can be used freely<br/> on various resolutions. 
                    </div>
                </div>

            </div>

            {/* Main Heading */}
            <div className="flex flex-col justify-center items-center ">
            <div className="text-center text-white font-inter text-5xl italic font-medium">
            Our Cutting-edge features <br/>
            Revolutionize AI Experience
            </div>

            {/* Eagle Image */}
            <div className="bg-inherit rounded-lg h-[500px] w-auto mt-14" >
                <img src="/eagle.png" alt="Eagle" className="w-auto h-auto object-contain"/>
            </div>
            </div>

        </div>
    )
}