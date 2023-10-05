import Banner from '../assets/Banner.png'
const Hero = () => {
  return (
    <div className='max-w-screen-2xl mx-auto p-4 md:px-12 mt-20'>
      

        <div className='grad rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 max-w-full'>
        <div className='flex lg:flex-row flex-col gap-y-4 items-start justify-between space-x-[100px]'>
          <div className='md:w-3/5'>
            <h2 className='md:text-7xl text-4xl text-[#FFF] md:w-[700px] font-bold leading-[6.9rem ] mb-8'>Develop your skills without diligence</h2>
     <p className='text-sm text-[#EBEBEB] leading-[normal] md:w-[500px] '>
      A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China.</p>
         <div className='space-x-4 space-y-10 '>
          <button className='btn'>Get Startted</button>
          <button className='btn'>Discount</button>
         </div>
          </div>

          <div>
            <img src={Banner} alt="Banner" className='lg:h-[386px] object-fit w-full'/>
          </div>
          <div>

          </div>
        </div>
        </div>

      
      
    </div>
  )
}

export default Hero
