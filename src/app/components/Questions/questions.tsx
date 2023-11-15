import React, { useState } from 'react'
import {FiPlus} from 'react-icons/fi'
import { IoIosArrowUp } from "react-icons/io";
import QuestionAnswer from './questionAnswer';
export default function Questions ()
{
  
    return (
        <div className="bg-gradient-to-r from-[#96C93D00] to-[#00B09B66] h-full flex flex-col justify-center items-center ">

            <div className="text-center text-[#FFFFFF] font-inter text-5xl font-medium mt-20">
            Oh. And if you have any <br/>questions…
            </div>

            <div className="text-center text-[#80858F] font-inter text-lg font-normal mt-4">
            …then hopefully we've got the answers right here…
            </div>

            <div className="flex flex-col mt-8 justify-center items-center mb-10">
           
            <QuestionAnswer
            question="What is an AI Image Generator? "
            answer="An AI image generator is a system powered by artificial intelligence algorithms"
            />

            <QuestionAnswer
            question="Why use an AI text to image generator?"
            answer="An AI text to image generator can be used to bridge the gap"
            />
      

             <QuestionAnswer
            question="How does AI generate images? "
            answer="AI generates images by utilizing deep learning techniques"
            />

            <QuestionAnswer
            question="What type of images and art can the AI Image Generator create? "
            answer=" HELLO I am your AI Image Generator"
            />

            <QuestionAnswer
            question="Is there a free AI art generator? "
            answer="HELLO I am your AI Image Generator"
            />

            <QuestionAnswer
            question="What is the best AI art generator now?  "
            answer="HELLO I am your AI Image Generator"
            />
            </div>
        </div>
    )
}