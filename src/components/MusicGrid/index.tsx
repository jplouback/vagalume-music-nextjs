import { MainContext } from '@/providers/MainProvider'
import React, { useContext } from 'react'
import { MusicCard } from '../MusicCard'

export const MusicGrid = () => {
  const { musicas } = useContext(MainContext)

  return (
    <div className='container mx-auto p-7'>
      
      {musicas.length > 0 ? (
        <div className='grid grid-cols-5 gap-4'>
          {
          musicas.map(musica => {
             return <MusicCard musica={musica} />
          })
          }
        </div>
      ) : (
        <>
          <p className='text-center'>Faça uma busca para encontrar resultados</p>
        </>
      )}
    </div>
  )
}
