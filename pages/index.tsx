import type { GetStaticProps, NextPage } from 'next'

export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col text-center'>
      <div className='h-1/4 border text-2xl'>
        <h1>Area 0 </h1>
      </div>
      <div className='p-2' />
      <div className='h-full flex flex-row'>
        <div className='w-1/4 border text-2xl'> Area 1 </div>
        <div className='w-1/2 border text-2xl'> Area 2</div>
        <div className='w-1/4 border text-2xl'> Area 3 </div>
      </div>
      <div className='h-1/4 border text-2xl'>
        <h1>Area 4 </h1>
      </div>
    </div>
  )
}

/** 
export const getStaticProps: GetStaticProps = async () => {

}
*/
