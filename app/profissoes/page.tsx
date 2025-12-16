'use client'
import { profissoes} from '@/data/profissoes'
import { useEffect, useState } from 'react'


interface Profissao {
  titulo: string
  descricao: string
}


export default function ProfissoesPage() {

  //
  // Estados
  const [search, setSearch] = useState('')
  const [filteredProfissoes, setFilteredProfissoes] = useState<Profissao[]>([])
  const [gosto , setGosto] = useState(0)


  function gostar(){
    setGosto(Math.min(gosto+1, 10));
  }

  useEffect(() => {

    const gostosSalvos = localStorage.getItem('gosto')

    if(!gostosSalvos){
      return
    }

    setGosto(Number(gostosSalvos))
  }, [])


  useEffect(() => {

    localStorage.setItem('gosto' , JSON.stringify(gosto))
  }, [gosto])
  //
  // Efeito
  useEffect(() => {
    setFilteredProfissoes(
      profissoes.filter(profissao =>
        profissao.titulo.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search])

  //
  // Renderização
  if (!filteredProfissoes.length) {
    return <p className="p-4">Não existem profissões</p>
  }

  return (
    <>

    <button onClick={gostar}>
      Adoro o teu site
    </button>
      {/* Campo de pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar profissão..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="text-xl p-2 m-2 font-bold bg-blue-200 rounded-xl"
      />

      {/* Lista */}
      {filteredProfissoes.map((profissao, index) => (
        <div
          key={index}
          className="py-3 px-4 m-2 bg-yellow-300 rounded-2xl"
        >
          <p className="font-bold text-lg">
            {profissao.titulo}
          </p>
          <p>
            {profissao.descricao}
          </p>
        </div>
      ))}
    </>
  )
}
