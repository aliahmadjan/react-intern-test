import React, {useState} from 'react'
export default function ExportTools()
{
    const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId:any) => {
    setSelectedButton(buttonId);
  };
    return (
        <div className="flex flex-col items-center bg-inherit mt-20 mb-10">

            <div className="text-center text-white font-inter text-5xl font-medium">
                Explore Our AI Tools
            </div>

            <div className="text-[#80858F] text-center font-inter text-lg font-normal mt-6 m-6">
            Meet the new standard for modern software development.<br/>
            Streamline issues, sprints, and product roadmaps.
            </div>

            <div className="flex flex-row justify-center items-center space-x-4">

            <div className="flex flex-col">
            <img src="/image14.png" alt="Image 14" className="w-96 h-auto object-contain "/>
            <div className="text-start text-white font-inter font-medium text-xl mt-2">
            Text to Image
            </div>
            <div className="text-start text-[#BABABA] font inter font-normal text-md mt-1">
            Make amazing creations by only using text.
            </div>
            </div>
            
            <div className="flex flex-col relative">
            <img src="/image15.png" alt="Image 15" className="w-96 h-auto object-contain" />
            <div className="absolute top-2 left-40 transform -translate-x-1/2 bg-gray-500 p-1 px-2 text-white rounded-full text-sm">Before</div>
            <div className="absolute top-2 right-4 bg-gray-500 p-1 px-2 text-white rounded-full text-sm">After</div>
            <div className="text-start text-white font-inter font-medium text-xl mt-2">
                Text to Image
            </div>
            <div className="text-start text-[#BABABA] font inter font-normal text-md mt-1">
            Make amazing creations by only using text.
            </div>
            </div>

            <div className="flex flex-col relative">
            <img src="/image16.png" alt="Image 16" className="w-96 h-auto object-contain "/>
            <div className="absolute top-2 left-40 transform -translate-x-1/2 bg-gray-500 p-1 px-2 text-white rounded-full text-sm">Before</div>
            <div className="absolute top-2 right-4 bg-gray-500 p-1 px-2 text-white rounded-full text-sm">After</div>
            <div className="text-start text-white font-inter font-medium text-xl mt-2">
                Text to Image
            </div>
            <div className="text-start text-[#BABABA] font inter font-normal text-md mt-1">
            Make amazing creations by only using text.
            </div>
            </div>

               
            </div>

            <div className="flex flex-col justify-center items-center mt-10">
                <div className="text-center text-white font-inter text-5xl font-medium">
                AI Images in Various Style
                </div>

                <div className="bg-[#101010] rounded-full w-[100%] p-5 h-auto mt-10">
                    <div className="flex flex-row space-x-4 px-10">

                    <div className={`p-3 px-5 w-auto rounded-full bg-inherit hover:bg-gradient-to-r hover:from-[#96C93D] hover:to-[#00B09B] ${
                    selectedButton === 'photo' ? 'bg-gradient-to-r from-[#96C93D] to-[#00B09B]' : ''
                    }`}
                    onClick={() => handleButtonClick('photo')}>
                        <button className="text-white font-inter font-medium text-sm">
                            Photo
                        </button>
                        </div>
                    <div className={`p-3 px-5 w-auto rounded-full bg-inherit hover:bg-gradient-to-r hover:from-[#96C93D] hover:to-[#00B09B] ${
                            selectedButton === 'realistic' ? 'bg-gradient-to-r from-[#96C93D] to-[#00B09B]' : ''
                            }`}
                            onClick={() => handleButtonClick('realistic')}
                        >
                        <button className="text-white font-inter font-medium text-sm">
                            Realistic
                        </button>
                        </div>
                    <div className={`p-3 px-5 w-auto rounded-full bg-inherit hover:bg-gradient-to-r hover:from-[#96C93D] hover:to-[#00B09B] ${
                            selectedButton === 'anime' ? 'bg-gradient-to-r from-[#96C93D] to-[#00B09B]' : ''
                            }`}
                            onClick={() => handleButtonClick('anime')}
                        >
                        <button className="text-white font-inter font-medium text-sm">
                            Anime
                        </button>
                        </div>
                    <div  className={`p-3 px-5 w-auto rounded-full bg-inherit hover:bg-gradient-to-r hover:from-[#96C93D] hover:to-[#00B09B] ${
                        selectedButton === 'cartoon' ? 'bg-gradient-to-r from-[#96C93D] to-[#00B09B]' : ''
                        }`}
                        onClick={() => handleButtonClick('cartoon')}
                    >
                        <button className="text-white font-inter font-medium text-sm">
                            Cartoon
                        </button>
                        </div>
                    <div   className={`p-3 px-5 w-auto rounded-full bg-inherit hover:bg-gradient-to-r hover:from-[#96C93D] hover:to-[#00B09B] ${
                        selectedButton === 'artistic' ? 'bg-gradient-to-r from-[#96C93D] to-[#00B09B]' : ''
                        }`}
                        onClick={() => handleButtonClick('artistic')}
                    >
                        <button className="text-white font-inter font-medium text-sm">
                            Artistic
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center mt-10 space-x-4">
                <img src="/image17.png" alt="Image 17" className="w-96 h-auto object-contain"/>
                <img src="/image18.png" alt="Image 18" className="w-96 h-auto object-contain"/>
                <img src="/image19.png" alt="Image 19" className="w-96 h-auto object-contain"/>
            </div>

           
        </div>
    )
}