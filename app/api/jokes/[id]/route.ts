export async function GET(
    request : Request,
    {params} : {params: Promise<{id : string}>}
){

    const {id} = await params
    
     const url = 'https://official-joke-api.appspot.com/jokes/random/100'
     const res = await fetch(url)

     const data = await res.json()
     
}