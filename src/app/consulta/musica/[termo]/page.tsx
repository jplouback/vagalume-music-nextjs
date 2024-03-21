import { useEffect, useState } from "react"

interface PropsPage {
  params: { termo: string }
}

export default async function Page({ params }: PropsPage ) {
  const termo = params.termo
    
  return <>{termo}</>
}