import React from 'react'
import { GiSofa } from "react-icons/gi";


function Siege() {
  return (
    <section className='w-[90%] h-[65vh] lg:w-[35%] lg:h-[65%] glass rounded-3xl lg:mr-[5%] flex flex-col rounded-3xl z-0'>
           
        <section className='h-[30%] w-full flex flex-row rounded-t-3xl z-0 overflow-hidden '>
            <h2 className='m-5'>Movie Title</h2>
        </section>
   
        <section className='h-[70%] w-full rounded-b-3xl  z-0 relative flex flex-col items-center justify-center'>
        <div className='box absolute h-[110%] rounded-b-3xl w-[100%] border-t-greeny top-[-10%] z-10 glass bg-greeny/[0.15] flex justify-center'>
            <p className='mt-6 text-xl h-[10%] text-greeny'>Lux Hall</p>
        </div>
        <section className='w-full h-[60%] flex flex-col text-greeny'>
            <div className='w-full flex flex-row justify-center'>
        < GiSofa className='w-[20%] h-[50%] rotate-[185deg]' />  < GiSofa className='w-[20%] h-[50%] rotate-[180deg]' />  < GiSofa className='w-[20%] h-[50%] rotate-[180deg]' /> < GiSofa className='w-[20%] h-[50%] rotate-[170deg]' />
            </div>
            <div className='w-full flex flex-row justify-center'>
            < GiSofa className='w-[20%] h-[50%] rotate-[185deg]' />  < GiSofa className='w-[20%] h-[50%] rotate-[180deg]' />  < GiSofa className='w-[20%] h-[50%] rotate-[180deg]' /> < GiSofa className='w-[20%] h-[50%] rotate-[170deg]' /></div>
            <div className='w-full flex flex-row justify-center'>
            < GiSofa className='w-[20%] h-[50%] rotate-[180deg]' />  < GiSofa className='w-[20%] h-[50%] rotate-[180deg]' />
            </div>
        </section>
        </section>
    </section>
  )
}

export default Siege
