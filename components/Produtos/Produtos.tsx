'use client'

import useSWR from 'swr';
import {Produto} from '@/models/interfaces'
import Image from 'next/image';


const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Produtos() {

    //
    // A. Fetch de dados
    const { data, error, isLoading } = useSWR<Produto[]>('https://deisishop.pythonanywhere.com/products', fetcher);


    // 
    // B. Renderização de componentes
    if (error) return <p>Erro ao carregar</p>
    if (isLoading) return <p>Carregando...</p>
    if(!data || data.length === 0) return <p>Sem produtos</p>

    return <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl flex flex-col items-center justify-center">

        <h2>Lista de Produtos DEISIshop</h2>
        
            {data.map((produto) => (
                <article 
                    key={produto.id}
                    className="flex flex-col items-center justify-center mt-4"
                >
                    <Image 
                        src={produto.image}
                        width={100}
                        height={100}
                        alt={produto.title}
                    />
                    {produto.title}
                    </article>
            ))}
        
    </section>

}
