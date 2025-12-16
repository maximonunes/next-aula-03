'use client'

import { Geo } from '@/models/interfaces'
import { useEffect, useState } from 'react'

// fetcher simples
const fetcher = async (url: string): Promise<Geo> => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Erro: ${res.status}`)
  }

  return res.json()
}

export default function GeoPage() {

  //
  // Estados
  const [geo, setGeo] = useState<Geo | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  //
  // Efeito
  useEffect(() => {
    fetcher('/api/geo')
      .then(data => setGeo(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  //
  // Renderização
  if (loading) return <p>A carregar localização...</p>
  if (error) return <p>{error}</p>
  if (!geo) return <p>Sem dados de localização</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Coordenadas Geográficas</h1>

      <div className="bg-blue-200 p-4 rounded-xl">
        <p>
          <span className="font-bold">Latitude:</span> {geo.lat}
        </p>
        <p>
          <span className="font-bold">Longitude:</span> {geo.lng}
        </p>
      </div>
    </div>
  )
}
