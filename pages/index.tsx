import type { GetStaticProps, NextPage } from 'next'

export default function Home() {
  return (    
    <div className='h-screen w-screen'>
      <div className='flex flex-col justify-center text-center'>
        <div> 
          <h1>Area 0 </h1>
        </div>
        <div className='flex flex-row'>
          <div className='w-1/4 border text-2xl'> Area 1 </div>
          <div className='game-container w-1/2 border text-2xl'>
            <canvas className="game-canvas border">

            </canvas>
          </div>
          <div className='w-1/4 border text-2xl'> Area 3 </div>
        </div>
      </div>
    </div>
  )
}

/** 
export const getStaticProps: GetStaticProps = async () => {

}
*/
