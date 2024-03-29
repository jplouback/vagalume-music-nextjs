'use client'
import { MusicGrid } from '@/components/MusicGrid'
import { Header } from '@/components/header'
import { MainContext } from '@/providers/MainProvider'
import Image from 'next/image'
import { useContext } from 'react'

export default function Home() {
  const { musicas } = useContext(MainContext)
  return (
    <div>
      <Header/>
      <MusicGrid />
    </div>
  )
}
