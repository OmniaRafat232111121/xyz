import boy from '../assets/boy.png'
const Features = () => {
  return (
    <div className='max-w-screen-2xl mx-auto p-4 md:px-12 mt-20'>
<div className="flex 2xl:flex-row flex-col  items-start justify-between gap-10">
  <div className="lg:w-1/4">
    <h2 className="text-[#010851] text-[2.5rem] font-bold">Why we are better than others</h2>
    <p className="text-[#707070] text-[1rem] font-semibold">A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”</p>


  </div>
  <div className="lg:w-3/4 w-full flex xl:flex-row flex-col gap-x-[100px]">
    <div className="shadow-3xl rounded-[35px] p-8 bg-[rgba(255, 255, 255, 0.04)]
    flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
      <div>
        <img src={boy} alt ="boy"/>
        <h4 className='text-[#010851] text-2xl font-semibold px-5 text-center'>Conventient study schedule</h4>

      </div>
    </div>
    <div className="shadow-3xl mt-[40px] rounded-[35px] p-8 bg-[rgba(255, 255, 255, 0.04)]
    flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
      <div>
        <img src={boy} alt ="boy"/>
        <h4 className='text-[#010851] text-2xl font-semibold px-5 text-center'>Conventient study schedule</h4>

      </div>
    </div>
    <div className="shadow-3xl rounded-[35px] p-8 bg-[rgba(255, 255, 255, 0.04)]
    flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
      <div>
        <img src={boy} alt ="boy"/>
        <h4 className='text-[#010851] text-2xl font-semibold px-5 text-center'>Conventient study schedule</h4>

      </div>
    </div>
  </div>
  </div>      
    </div>
  )
}

export default Features
