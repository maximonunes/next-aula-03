'use client'

import useSWR from 'swr';
import {User} from '@/models/interfaces'

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function FetchUsers() {

    //
    // A. Fetch de dados
    const { data, error, isLoading } = useSWR<User[]>('https://jsonplaceholder.typicode.com/users', fetcher);


    // 
    // B. Renderização de componentes
    if (error) return <p>Erro ao carregar</p>
    if (isLoading) return <p>Carregando...</p>
    if(!data || data.length === 0) return <p>Sem utilizadores</p>

    return <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

        <h2>Lista de Utilizadores de API</h2>
        <ul>
            {data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </section>

}
