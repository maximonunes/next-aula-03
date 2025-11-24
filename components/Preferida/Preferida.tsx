'use client'
import { useEffect, useState } from "react"

interface PreferidaProps {
   tecnologia: string;
}

export default function Preferida({tecnologia}:PreferidaProps) {

    // Estados
    const [likes, setLikes] = useState(() => {
        const storedLikes = localStorage.getItem('likes')||'0'
        return parseInt(storedLikes)
    })

    // Efeitos
    useEffect(() => {
        localStorage.setItem(tecnologia, `${likes}`);
    }, [likes])


    // Render
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
