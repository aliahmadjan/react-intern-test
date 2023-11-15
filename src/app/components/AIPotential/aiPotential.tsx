export default function AiPotential ()
{
    return (
        // bg-gradient-to-r from-[#96C93D00] to-[#00B09B66]
        <div className="bg-gradient-to-r from-[#96C93D00] to-[#00B09B66] flex flex-row justify-start items-start mt-20   ">

            <div className="flex flex-col justify-start items-start px-20">
                <div className="text-start text-white font-inter text-5xl font-medium mt-20">
                Maximize your potential <br/>
                with Photosoft AI
                </div>
                <div className="text-start text-[#B4BCD0] font-inter text-xl font-normal mt-4">
                Meet the new standard for modern software development. <br/>
                Streamline issues, sprints, and product roadmaps.
                </div>
               
                <div className="flex flex-row justify-between space-x-16 mt-10 mb-20">
                    <div className="bg-[#313131] rounded-xl p-6">
                        <div className="flex flex-col px-2">
                            <div className="text-[#FDFDFD] text-md font-inter font-medium">
                            Users Base
                            </div>
                            <div className="text-[#FDFDFD] text-3xl font-inter font-medium mt-1">
                           2M
                            </div>
                            <div className="text-white text-sm font-inter font-medium mt-1">
                            Adipiscing elit, do eiusm.
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#313131] rounded-xl p-6">
                        <div className="flex flex-col px-2">
                            <div className="text-[#FDFDFD] text-md font-inter font-medium">
                            Community
                            </div>
                            <div className="text-[#FDFDFD] text-3xl font-inter font-medium mt-1">
                          500k+
                            </div>
                            <div className="text-white text-sm font-inter font-medium mt-1">
                            Adipiscing elit, do eiusm.
                            </div>
                        </div>
                    </div>

                    
                    
                </div>
                
            </div>
                <div className="flex flex-row relative mt-20 ">
                <div className="absolute top-0 -left-8 bg-[#313131] rounded-xl p-6 mt-52 ">
                        <div className="flex flex-col px-2">
                            <div className="text-[#FDFDFD] text-md font-inter font-medium">
                            Images Generated
                            </div>
                            <div className="text-[#FDFDFD] text-3xl font-inter font-medium mt-1">
                           10M
                            </div>
                            <div className="text-white text-sm font-inter font-medium mt-1">
                            Adipiscing elit, do eiusm.
                            </div>
                        </div>
                    </div>

                    <img src="/image14.png" alt="Image 14" className="w-auto h-auto object-contain"/>               
                </div> 
        </div>
    )
}