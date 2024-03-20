export const dynamic = "force-dynamic"

// api > hello > [slug] > route.ts
import {NextRequest, NextResponse} from "next/server";

export async function GET (request: NextRequest){
    try {
      console.log(request.url)
      const termo = request.nextUrl.searchParams.get('termo')
      const urlGet = `https://api.vagalume.com.br/search.excerpt?q=${termo}`

      const req = await fetch(urlGet)
      const resp = await req.json()

      const docs = resp.response.docs
      
      return NextResponse.json(docs)

    } catch (error) {
      const err = {
        erro: error
      }
      return NextResponse.json([err])
    }
}
