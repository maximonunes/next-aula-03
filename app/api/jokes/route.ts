export async function GET(){

    const url = 'https://official-joke-api.appspot.com/jokes/random/100'
    const res = await fetch(url)
    const data = await res.json()

    return Response.json(data)
}