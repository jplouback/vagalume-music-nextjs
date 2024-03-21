import { MainContext } from '@/providers/MainProvider'
import React, { useContext } from 'react'
import { MusicCard } from '../MusicCard'

export const MusicGrid = () => {
  const { musicas } = useContext(MainContext)

  return (
    <div className='container mx-auto p-7'>
      
      {musicas.length > 0 ? (
        <div className='grid grid-cols-2 max-[320px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {
          musicas.map((musica, i) => {
             return <MusicCard musica={musica} key={`${musica.id}_${i}`} />
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
