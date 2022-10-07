import type { GetStaticProps, NextPage } from 'next'

export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col text-center'>
      <div className='h-1/4 border text-2xl'>
        <h1>Area 0 - Header </h1>
      </div>
      <div className='p-2' />
      <div className='h-full flex'>
        <div className='w-1/4 border flex items-center justify-center'> 
          <button className='btn'> 
            Art
          </button>
        </div>
        <div className='w-1/2 border flex items-center justify-center'> Area 2 - Game </div>
        <div className='w-1/4 border flex items-center justify-center'> 
          <button className='btn'> 
            Writing
          </button>
        </div>
      </div>
      <div className='h-1/4 border flex items-center justify-center'>
        <button className='btn'> 
          Dev
        </button>
      </div>
    </div>
  )
}
