import Container from "./Container"
import improve from '../assets/improve.png'
import pract from '../assets/practise.png'

const About = () => {
  return (
    <Container>
      <div className="flex md:flex-row flex-col justify-between items-center gap-8">
        <div className=" w-full lg:w-[46rem]">

     <img src={improve} alt=""/>
        </div>
        <div className="lg:w-[41.875rem] w-full flex items-start   text-left flex-col
        ">
          <h2 className="text-[#010851] text-4xl lg:w-[460px]  font-bold mb-3">
          We have been improving
          <br/> our product for <span className="text-[#9A7AF1]">many years.</span></h2>
          <p className="mb-3 text-[1.5rem] text-[#707070] lg:w-[650px] w-full">A good example of a paragraph contains a topic conclusion.
'There are many different kinds of animals that live in China.</p>
<button className="btn">GetStarted</button>

        </div>

      </div>





      <div className="flex md:flex-row flex-col justify-between items-center gap-8 mt-[130px]">
       
        <div className="lg:w-[41.875rem] w-full flex items-start flex-col">
          <h2 className="text-[#010851] text-4xl lg:w-[460px]  font-bold mb-3 text-left">
          You can Practice at any <br/> {" "} <span
          className="text-[#9A7AF1]"> time convinent for you.</span></h2>
          <p className="mb-3 text-[1.5rem] text-[#707070] lg:w-[650px] w-full">A good example of a paragraph contains a topic conclusion.
'There are many different kinds of animals that live in China.</p>
<button className="btn">GetStarted</button>

        </div>

<div className=" w-full lg:w-[46rem]">

<img src={pract} alt=""/>
   </div>

      </div>
    </Container>
  )
}

export default About
