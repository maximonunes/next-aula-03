'use client'

import { useEffect, useState } from 'react'
import { tecnologias, Tecnologia } from '@/data/tecnologias'
import { Montserrat_Alternates } from 'next/font/google';

export default function TecnologiasPage() {


    const [rating , setRating] = useState(5);
    const [filterTecnologias , setfilterTecnologias] = useState<Tecnologia[]>([])
    const [gosto , setGosto] = useState(0);


    useEffect(() =>{
        const stored = localStorage.getItem('gosto');

        if(!stored) return;

        setGosto(Number(stored))
    }, [])


    useEffect(() => {
        localStorage.setItem('gosto' , JSON.stringify(gosto))
    }, [gosto])

    useEffect(() => {

        setfilterTecnologias( tecnologias.filter( t => t.rating >= rating))
    }, [rating])

    function gostar(){
        setGosto(gosto+1)
    }

    useEffect(() => {
        alert("BEM VINDOOO")
    }, [])


    useEffect(() => {
        alert("Gosto foi atualizado")
    } , [gosto])

    return(
        <div>
            <select value = {rating} onChange={ (e) => setRating(Number(e.target.value))}>
                <option value={5}>5 estrelas</option>
                <option value = {4}>4 estrelas</option>
                <option value = {3}> 3 estrelas</option>
            </select>


            {filterTecnologias.map(( t , i) =>
            <div>
            <h2>{t.title} - {t.rating}</h2>
            <p>{t.description}</p>
            </div>
            )}

            <button className='bg-green-500 hover:bg-green-600 active:bg-green-700' onClick={gostar}>
                Adoro esta página
            </button>
        </div>
    )


}

