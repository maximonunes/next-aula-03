'use client'

import { Joke } from '@/models/interfaces'
import { error } from 'console'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Erro: ${res.status}')
  }

  return res.json()
}

export default function JokesPage() {
  const url = 'api/jokes'

  const { data: jokes, error, isLoading } = useSWR<Joke[]>(url, fetcher)

  const [type, setType] = useState('')
  const [gosto, setGosto] = useState(0)
  const [filteredJokes, setFilteredJokes] = useState<Joke[]>([])
  const [visivel , setVisivel] = useState(false)

  useEffect(() => {
    if (!jokes) return
    setFilteredJokes(jokes.filter(t => t.type === type))
  }, [type])

  useEffect(() => {
    const salvadas = localStorage.getItem('gostos')

    if (!salvadas) {
      return
    }

    setGosto(Number(salvadas))
  }, [])

  useEffect(() => {
    const salvar = localStorage.setItem('gostos', gosto.toString())
  }, [gosto])

  if (error) return <div>{error}</div>
  if (isLoading) return <div>A carregar dados</div>
  if (!jokes || jokes.length == 0)
    return <div>Não há dados para carregar</div>

  return (
    <div>
      <h2>{type} Jokes!</h2>


      <button onClick={() => setType('general')}>
        General Jokes!
      </button>

      <button onClick={() => setType('programming')}>
        Programming Jokes
      </button>

      <ul>
        {filteredJokes.map((j, i) => (
          <div>
          <li key={i}>{j.setup}</li>
          <button onClick={ () => setVisivel(!visivel)}>
          {visivel && <p>{j.setup}</p>}
          </button>
          </div>
        ))}
      </ul>

      <div>
        {jokes.map((joke , i) => (
          <div key = {i}>
            <h3>{joke.type}</h3>
            <p>{joke.punchline}</p>
            <p>{joke.setup}</p>
          </div>
        ))}
      </div>

      <p>Gostaste das piadas?</p>
      <button onClick={e => setGosto(gosto + 1)}>
        {gosto}
      </button>
    </div>
  )
}
