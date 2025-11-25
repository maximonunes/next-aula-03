'use client'
import { useState } from 'react'

export default function SeletorTecno() {
  
    // 
    // A. Gestão de Estados


    // 
    // B. Renderização de componentes
    return (
        <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

            <h2>Selecione uma Tecnologia</h2>
            
            <select
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 m-2 border border-green-700 rounded"
            >
                <option value="">Selecione uma tecnologia</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
            </select>

            <p>Tecnologia escolhida:</p> 
        </section>
    )
}