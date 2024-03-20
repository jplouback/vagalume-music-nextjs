import React from 'react'
import { SearchInput } from '../searchInput'

export const Header = () => {
  
  return (
    <section className='bg-slate-900'>
      <div className='container mx-auto p-4'>
        <div className="flex items-center justify-between">
          <div>
            <img src="https://www.vagalume.com.br/img/logos/vgl-logo.svg" alt="Logo Vagalume" width={180} />
          </div>
          <div className="w-2/3 px-5">
            <SearchInput />
          </div>
          <div>
            <p className='text-white'>Seja Bem-vindo(a)!</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}
