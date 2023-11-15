import React, {useState} from 'react'
import {FiPlus} from 'react-icons/fi'
import { IoIosArrowUp } from "react-icons/io";

interface QuestionAnswerProps {
   question: String,
   answer: any
    
  }

  const QuestionAnswer: React.FC<QuestionAnswerProps> = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

        const handlePlusClick = () => {
            setShowAnswer(!showAnswer);
        };
    return (
        <>
        <div className="bg-[#111111] w-[200%] p-2  relative">
        <div className="flex justify-between items-center">
            <div className="text-white font-inter font-medium text-lg">
            {question}
            </div>
            <button className='bg-inherit'>
                {showAnswer ? <IoIosArrowUp size={30} color='#96C93D' onClick={handlePlusClick}/> : <FiPlus size={30} color='#96C93D' onClick={handlePlusClick}/> }
                
             
             </button>
        </div>
        </div>
        
        {showAnswer && (
        <div className='bg-[#111111] w-[200%] p-2 relative '>
            
        <div className="text-[#80858F] font-inter font-medium text-sm">
       {answer}
        </div>
        </div>

        )}
         
        </>
    )
  }

  export default QuestionAnswer
   