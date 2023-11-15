export default function QualityFeature ()
{
    return (
        <>
        <div className="w-full h-[487px] bg-[#131715] flex flex-row ">
            <div className="flex flex-col justify-start items-start w-[50%] px-10">
            <div className="bg-[#6CC257] p-5 rounded-xl ml-10 mt-10">
                <img src="/Vector.png" alt="Vector" className="h-10 w-10 object-contain"/>
            </div>

            <div className=" items-start px-10 mt-6">
                <div className="text-start text-white font-inter text-4xl font-semibold">
                    Fully Customizable
                </div>
            </div>

            <div className="flex flex-row mt-6">
                <div className="bg-inherit px-10">
                    <img className="w-8 h-8 object-contain" src="/diamond.png" alt="Diamond"/>
                </div>
                
                <div className="flex flex-col justify-start items-start mb-2">
                <div className="text-white font-inter text-xl font-semibold ">
                Generate high-quality images
                </div>
                <div className="text-[#A0A0A0] font-inter text-sm font-normal mt-2">    
                A good design is not only aesthetically pleasing, but also<br/> functional.
                 It should be able to solve the problem 
                 </div>
                 </div>
          
            </div>

            <div className="flex flex-row mt-6">
                <div className="bg-inherit px-10">
                    <img className="w-8 h-8 object-contain" src="/pen.png" alt="Pen"/>
                </div>
                
                <div className="flex flex-col justify-start items-start mb-2">
                <div className="text-white font-inter text-xl font-semibold">
                Edit and upscale images
                </div>
                <div className="text-[#A0A0A0] font-inter text-sm font-normal mt-2">    
                A good design is not only aesthetically pleasing, but also<br/> functional.
                 It should be able to solve the problem 
                 </div>
                 </div>
          
            </div>
          
            </div>
           
            <div className="w-[300px] h-[130px] bg-[#1C1C1C] rounded-lg ml-40 mt-20">
                <div className="flex flex-col justify-start items-start px-4 mt-4">
                    <div className="flex flex-row space-x-44">
                    <div className="text-[#7F8299] font-inter text-md">
                        Prompt
                    </div>
                    <div className="rounded-full p-2" style={{ background: 'linear-gradient(to right, #96C93D, #00B09B)' }}>
                        <img className="w-3 h-3 object-contain" src="/star.png" alt="Star"/>
                    </div>
                    </div>
                    <div className="text-[#DDDDDD] font-inter text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur.<br/>
                     Semper consequat nunc molestie lacus<br/>
                     pretium placerat
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
  <img className="w-3 h-3 object-contain  mt-2" src="/dot.png" alt="Dot" />
  </div>
  <div className="flex flex-row justify-center items-center ml-2">
    <img className="w-auto h-16 object-contain " src="/left-line.png" alt="Left Line" />
    <img className="w-auto h-36 object-contain" src="/center-line.png" alt="Center Line" />
    <img className="w-auto h-16 object-contain " src="/right-line.png" alt="Right Line" />
</div>
    <div className="flex flex-row justify-center items-center space-x-4 relative">
    <img className="absolute bottom-10 -left-14 w-auto h-28 object-contain " src="/image11.png"/>
    <img className="w-auto h-28 object-contain" src="/image12.png"/>
    <img className="absolute bottom-10 left-60 w-auto h-28 object-contain" src="/image13.png"/>
    </div>

          </div>
                
           
        </div>

        <div className="flex flex-row justify-center items-center px-10 space-x-20 mt-10 mb-10">

            
            <div className="bg-[#131715]  p-10 rounded-lg">
                <div className="flex flex-row space-x-4 ">

                <div className="bg-[#6CC257] p-4 rounded-xl mt-2">
                <img src="/Vector.png" alt="Vector" className="h-6 w-6 object-contain"/>
                 </div>

                 <div className="text-white font-inter font-medium text-lg mt-2">
                 Lightning Fast. Just start with <br/> an idea and see how it evolves 
                 </div>
                </div>
            </div>

            <div className="bg-[#131715]  p-10 rounded-lg">
                <div className="flex flex-row space-x-4 ">

                <div className="bg-[#6CC257] p-4 rounded-xl mt-2">
                <img src="/Vector.png" alt="Vector" className="h-6 w-6 object-contain"/>
                 </div>

                 <div className="text-white font-inter font-medium text-lg mt-2">
                 Lightning Fast. Just start with <br/> an idea and see how it evolves 
                 </div>
                </div>
            </div>
        </div>

</>
    )
}