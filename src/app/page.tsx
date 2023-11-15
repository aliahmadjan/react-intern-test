'use client'
import Image from 'next/image'
import NavBar from './components/NavBar/navBar'
import HeroSection from './components/HeroSection/heroSection'
import ImagesSection from './components/ImagesSection/imagesSection'
import Features from './components/Features/features'
import AboutPhotosoft from './components/AboutPhotosoft/aboutPhotosoft'
import QualityFeature from './components/QualityFeature/qualityFeature'
import ExportTools from './components/Explore/expolreTools'
import ImageGenerator from './components/ImageGenerator/imageGenerator'
import AiPotential from './components/AIPotential/aiPotential'
import Questions from './components/Questions/questions'
import Footer from './components/Footer/footer'


export default function Home() {
  return (
     <>
     
    {/*NavBar Component */}
    <NavBar/>

    
    {/*NavBar Component */}
   <HeroSection/>

    {/*Images Section Component */}
    <ImagesSection/>

    {/* Features */}
    <Features/>

    {/* About Photosoft */}
    <AboutPhotosoft/>

      {/* Quality Feature */}
    <QualityFeature/>

      {/* Explore AI Tools */}
    <ExportTools/>

     {/* Image Generation */}
    <ImageGenerator/>

     {/* Maximizing Ai Potential */}
    <AiPotential/>
    
      {/* Questions */}
    <Questions/>

      {/* Footer */}
    <Footer/>
    
   </>
  )
}
