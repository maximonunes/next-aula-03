'use client'
import { useEffect, useState } from "react"

interface PreferidaProps {
   tecnologia: string;
}

export default function ContadorPorTecnologia({tecnologia}:PreferidaProps) {

    //
    // A. Gestão de estados
    const [likes, setLikes] = useState(() => {
        const storedLikes = localStorage.getItem(tecnologia)||'0'
        return parseInt(storedLikes)
    })

    //
    // B. Efeitos
    useEffect(() => {
        localStorage.setItem(tecnologia, `${likes}`);
        document.title = tecnologia + ` ${likes} ❤️`;
    }, [likes])


    //
    // C. Renderização de componentes
    return (
        <>
            : {likes} <button
                className="cursor-pointer"
                onClick={()=>setLikes(likes+1)}
            > 
                ❤️
            </button>
        </>
    )
}
