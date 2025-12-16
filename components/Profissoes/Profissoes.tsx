'use client'


import { useState } from 'react';
import { profissoes } from '@/data/profissoes';
import { InputOtp } from '@heroui/react';

export default function Profissoes(){

    const [busca , setBusca] = useState('');

    const filtrados = profissoes.filter(p => p.titulo.toLocaleLowerCase().includes(busca.toLocaleLowerCase()) || 
p.descricao.toLowerCase().includes(busca.toLowerCase()));


return (
    <section className="bg-white shadow-md rounded-lg p-4">

        <h2 className='text-2xl font-semibold mb-4'>Profissões do futuro</h2>

        <input type = 'text'
        placeholder='Escreve algo...'
        value = {busca}
        onChange={e => setBusca(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        />

        <ul className=''>
            {filtrados.map(( p => (
                <li key = {p.titulo} className="p-3 border rounded">

                    <h3>{p.titulo}</h3>
                    <p>{p.descricao}</p>
                </li>
            )))}
        </ul>

         {filtrados.length == 0 }
    </section>
)
}