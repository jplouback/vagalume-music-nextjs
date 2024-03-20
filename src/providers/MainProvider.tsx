'use client'
import { Musica } from '@/app/types/Musica'
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import { useEffect, createContext, useState } from 'react'

export interface ValuesPropsContext {
  musicas: any[]
  setMusicas: Dispatch<SetStateAction<any[]>>
}

export const MainContext = createContext<ValuesPropsContext>(
  {} as ValuesPropsContext
)

export function MainProvider({ children }: PropsWithChildren) {
  const [musicas, setMusicas] = useState<Musica[]>([])
  
  const valuesProps: ValuesPropsContext = {
    musicas,
    setMusicas
  }

  return (
    <MainContext.Provider value={valuesProps}>
      {children}
    </MainContext.Provider>
  )
}
