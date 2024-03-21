'use client'
import type { Musica } from '@/app/types/Musica'
import { MainContext } from '@/providers/MainProvider'
import { getMusicas } from '@/utils'
import React, { FormEvent, useContext } from 'react'

type FormItens = {
  search: HTMLInputElement
}

interface SearchInputProps {
  onSubmitCallback: (search: string) => void
}

export const SearchInput = () => {
  const { setMusicas } = useContext(MainContext)

  const handlerSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const form = event.currentTarget
    const formElements = form.elements as typeof form.elements & FormItens

    const search = formElements.search.value

    if(search) {
      const data = await getMusicas(search)
      setMusicas(data)    
    } else {
      setMusicas([])    
    }
    
  }

  return (
    <form className="mx-auto px-2" onSubmit={e => handlerSubmit(e)}>   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <input 
            type="search" 
            name="search"
            id="default-search" 
            className="block w-full p-4 pe-16 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Buscar Música." 
            required />
          <button type="submit" 
            className="top-1 bottom-1 right-1 text-white absolute end-2.5 bg-slate-800 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:bg-slate-900 font-medium rounded-lg text-sm px-4 py-2">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </button>
        </div>
    </form>

  )
}
