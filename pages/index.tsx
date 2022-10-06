import type { GetStaticProps, NextPage } from 'next'

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-row justify-center">
      <div className="text-center text-2xl"> Button 1 </div>

      <div> Game </div>

      <div className="text-center text-2xl"> Button 2 </div>
    </div>
  )
}

/** 
export const getStaticProps: GetStaticProps = async () => {

}
*/
