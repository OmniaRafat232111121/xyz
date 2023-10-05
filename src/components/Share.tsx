import Container from "./Container"
import share from '../assets/share2.png'
const Share = () => {
  return (
    <div>
      <Container>
      <div className='grad rounded-xl rounded-br-[80px] md:p-9 px-1 py-9 max-w-full'>

        <div className="flex md:flex-row flex-col items-center justify-between space-x-16">
          {/*left*/}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-white text-5xl font-bold lg:w-[600px] mb-4">Each student an share their discount code for friends</h2>
            <p className="text-white mb-4">A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”</p>
          <div className="mt-[60px] text-left">
          <button className="btn rounded">I have a code</button>

          </div>
          </div>
          {/*right*/}
          <div className="mr-[30px] w-full">
            <img src={share} alt="share" className="object-fit "/>


          </div>
        </div>
        </div>
      </Container>
      
    </div>
  )
}

export default Share
