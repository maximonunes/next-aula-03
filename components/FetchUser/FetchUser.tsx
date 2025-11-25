'use client'

import useSWR from 'swr';
import {User} from '@/models/interfaces'

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function FetchUser() {

    //
    // A. Fetch de dados
    const { data, error, isLoading } = useSWR<User>('https://jsonplaceholder.typicode.com/users/1', fetcher);

    // data → resultado da API
    // error → captura de erro
    // SWR faz cache automático e revalida


    
    // 
    // B. Renderização de componentes
    if (error) return <p>Erro ao carregar</p>;
    if (isLoading) return <p>Carregando...</p>
    if(!data) return <p>Sem utilizadores</p>

    return <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

        <h2>Fetch de Info de User</h2>

        <p>Nome: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Empresa: {data.company.name}</p>
    </section>

}
