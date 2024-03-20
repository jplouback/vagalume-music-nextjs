import { Musica } from '@/app/types/Musica'
import React from 'react'

interface MusicCardProps {
  musica: Musica
}

export const MusicCard = ({ musica }: MusicCardProps) => {
  return (
    <div className='rounded border border-slate-300 p-2'>
      {musica.title}
      <br />
      {musica.band}
    </div>
  )
}
