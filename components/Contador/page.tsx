'use client'
import { useState } from "react"

export default function Contador() {

    // Gestão de Estados

    const [count , setCount] = useState(0)
    

    // Renderização de componentes
    return (
        <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

            <h2>Contador</h2>
            <p>Contador vai em <span>   </span>!</p>

            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 mx-2 border border-green-700 rounded"
                onClick={() => {setCount(count + 1)}}
            >Aumentar</button>


                <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 mx-2 border border-green-700 rounded"
                onClick={() => {setCount(count > 0 ? count - 1 : 0)}}
            >Diminuir</button>
        </section>
    )
}
