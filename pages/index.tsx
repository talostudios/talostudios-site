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
          <button className='px-4 py-2 font-medium tracking-wide bg-indigo-300 text-indgo-300'> 
            Art
          </button>
        </div>
        <div className='w-1/2 border flex items-center justify-center'> Area 2 - Game </div>
        <div className='w-1/4 border flex items-center justify-center'> Area 3 - Right Button </div>
      </div>
      <div className='h-1/4 border flex items-center justify-center'>
        <h1>Area 4 - Botton Button </h1>
      </div>
    </div>
  )
}
