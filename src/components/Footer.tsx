import logo from '../assets/logo.png'
function Footer() {
  return (

    <div className='px-4 py-7 bg-[#010851] md:px-12 mx-auto max-w-screen-2xl mt-28 '>
      <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 space-x-7">
       <div>
       <div  className='flex space-x-6'>
          <img src={logo} alt="logo"/>
          <span className='text-white font-extrabold text-[2.25rem]
          flex items-center'>XYZ</span>

        </div>
        <p className='mt-[30px] text-left lg:w-[400px] 
        text-sm text-white '>A simple paragraph is comprised of three major components. 
         The first sentence, which is often a declarative sentence.</p>
            <div className='relative mt-4'>
  <input type='text' placeholder="Youremail" 
  className='rounded-[1.25rem] px-4 py-3 w-[250px]'/>
  <button type ='submit' className='absolute left-[150px] top-0 text-[1.25rem] text-white
   bg-[#9A7AF1] rounded-[1.25rem] px-4 py-[0.6rem]'>Subscribe</button>

            </div>
       </div>
       <div>
        <h2 className='text-white font-semibold'>Platform</h2>
        <ul className='mt-4 text-white'>
          <li className='mb-2'><a href="">Overview</a></li>
          <li className='mb-2'><a href="">Features</a></li>
          <li className='mb-2'><a href="">About</a></li>
          <li className='mb-2'><a href="">pricing</a></li>


        </ul>
       </div>
       <div>
        <h2 className='text-white font-semibold'>Help</h2>
        <ul className='mt-4 text-white'>
          <li className='mb-2'><a href="">How does it works?</a></li>
          <li className='mb-2'><a href="">Where to ask question?</a></li>
          <li className='mb-2'><a href="">How to play?</a></li>
          <li className='mb-2'><a href="">What is needed for this?</a></li>


        </ul>
       </div>
       <div>
        <h2 className='text-white font-semibold'>Contact</h2>
        <ul className='mt-4 text-white'>
          <li><a href="">(012) 1234-567-890</a></li>
          <li><a href="">123 xyz xyz
qwuerybaihefv, qiwu - hrebcl
095467</a></li>
        </ul>
       </div>
       
      </div>

      <div className='bg-gray-400 max-w-screen-2xl mt-4 h-[1px] '></div>
      <div className='flex items-center justify-between mt-4'>
        <p className='text-gray-100'>@ XYZ 20XX --- 20XX. All rights reserved.</p>

      </div>

      
      
    </div>
  )
}

export default Footer
