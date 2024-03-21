import React from 'react'
import { SearchInput } from '../searchInput'

export const Header = () => {
  
  return (
    <section className='bg-slate-900'>
      <div className='container mx-auto p-4'>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className='mb-5 md:mb-0'>
            <img src="https://www.vagalume.com.br/img/logos/vgl-logo.svg" alt="Logo Vagalume" width={180} className='w-[250px] md:w-[180px]' />
          </div>
          <div className="w-full md:w-2/3 px-1 lg:px-5">
            <SearchInput />
          </div>
          <div>
            <p className='text-white mt-3 lg:mt-0'>Seja Bem-vindo(a)!</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}
