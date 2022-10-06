import type { GetStaticProps, NextPage } from 'next'

export default function Home() {
  return (    
    <div className='h-screen w-screen'>
      <div className='flex flex-col justify-center'>
        <div> 
          <h1>Talo Studios</h1>
        </div>
        <div className='flex flex-row justify-center'>
          <div className='text-left text-2xl'> Button 1 </div>
          <div className='border rounded p-8'> Game </div>
          <div className='text-right text-2xl'> Button 2 </div>
        </div>
      </div>
    </div>
  )
}

/** 
export const getStaticProps: GetStaticProps = async () => {

}
*/
