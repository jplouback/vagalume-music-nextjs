// https://api.vagalume.com.br/search.excerpt?q=u2

import { Musica } from "@/app/types/Musica"

export const getMusicas = async (termo: string) => {
  try {
    const url = `https://api.vagalume.com.br/search.excerpt?q=${termo}`
    const request = await fetch(url) 
    const data = await request.json()
    const docs : Musica[] = await data.response.docs
    return docs
  } catch (error) {
    return [] 
  }
}