import { Musica } from '@/app/types/Musica'
import React from 'react'
import slugify from 'slugify'

interface MusicCardProps {
  musica: Musica
}

export const MusicCard = ({ musica }: MusicCardProps) => {
  const bandslug = slugify(musica.band).toLocaleLowerCase()
  var urlBand = `https://www.vagalume.com.br/${bandslug}/images/${bandslug}.jpg`
  
  return (
    <div className='rounded border border-slate-300 p-2 flex flex-col justify-between'>
      <div className='relative w-full h-[200px] bg-center bg-no-repeat bg-cover' style={{backgroundImage: 'url(https://www.vagalume.com.br/img/default-artist.jpg)'}}>
        <div 
          className='absolute top-0 bottom-0 right-0 left-0 bg-center bg-no-repeat bg-cover' 
          style={{backgroundImage: `url(${urlBand})`}}/>
      </div>
      <div className='flex flex-col justify-between grow'>
        <div>
          <p className='font-bold'>{musica.title}</p>
          <p className='mb-3'>{musica.band}</p>
        </div>
        <div>
          <a 
            className="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-900 transition-colors duration-150 bg-slate-300 rounded-lg focus:shadow-outline hover:bg-slate-400" 
            href={`https://www.vagalume.com.br${musica.url}`}
            target='_blank'
          >
              Ver música
          </a>

          {/* <a 
            href={`https://www.vagalume.com.br${musica.url}`}
            target='_blank'
            className="h-8 py-2 px-4 text-sm text-gray-800 transition-colors duration-150 bg-gray-100 rounded-lg border border-gray-400 cursor-pointer focus:shadow-outline hover:bg-gray-200 shadow">
            Ver música
          </a> */}
        </div>
      </div>
    </div>
  )
}
