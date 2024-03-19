export const dynamic = "force-static";

// api > hello > [slug] > route.ts
import {NextRequest, NextResponse} from "next/server";

export async function GET (request: NextRequest){
    try {
      
      const termo = request.nextUrl.searchParams.get('termo')
      const urlGet = `https://api.vagalume.com.br/search.excerpt?q=${termo}`

      const req = await fetch(urlGet)
      const resp = await req.json()

      // console.log(paramGreeting)
      const docs = resp.response.docs

      return NextResponse.json(docs)

    } catch (error) {
      const err = {
        erro: error
      }
      return NextResponse.json([err])
    }
}
