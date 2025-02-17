import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <main className='bg-[#F2F0F1] mt-16 lg:mt-24 md:h-[600px] md:px-10 flex flex-col md:flex-row justify-between items-start max-w-screen-2xl mx-auto'>
      <div className='md:pl-0 md:w-[500px] lg:w-[600px] space-y-5 sm:pt-7 mt-10 px-3'>
        <h1 className='text-4xl md:text-5xl lg:text-7xl font-extrabold'>ENCONTRE ROUPAS QUE COMBINE COM SEU ESTILO</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nisi fuga assumenda in blanditiis quisquam temporibus minus voluptate! Minima, deserunt?</p>
        <button className='w-full sm:w-[140px] text-sm bg-black text-white py-2 px-8 rounded-[20px]'>Comprar</button>
        <div className='flex justify-evenly md:justify-between flex-wrap md:flex-nowrap gap-y-4 mt-4 ml-4 space-x-4'>
          <div className='border-r pr-2'>
            <h1 className='text-2xl md:text-5xl'>200+</h1>
            <p className='text-xs md:text-[15px] text-gray-500'>Marcas Internacionais</p>
          </div>

          <div className='border-r pr-5'>
            <h1 className='text-2xl md:text-5xl'>2,000+</h1>
            <p className='text-xs md:text-[15px] text-gray-500'>Produtos de Alta Qualidade</p>
          </div>
          <div className='border-r pr-5'>
            <h1 className='text-2xl md:text-5xl'>30,000+</h1>
            <p className='text-xs md:text-[15px] text-gray-500'>Boas Avaliações</p>
          </div>
        </div>
      </div>

      <div className='relative'>
        <Image src={"/profile4.png"} alt='profile' className='w-[500px] h-[600px]' width={200} height={200} sizes={'w-[500px] h-[600px]'}  />
        <Image src={"/star.png"} className='w-[70px] sm:w-[100px] absolute top-[60px] right-6' width={200} height={200} alt='star' />
        <Image src={"/star.png"} className='w-[50px] sm:w-[70px] absolute top-[230px] left-[0px] sm:left-[-30px]' width={200} height={200} alt='star' />
      </div>
    </main>
  )
}

export default Hero