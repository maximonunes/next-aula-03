import ContadorPorTecnologia from "../ContadorPorTecnologia/ContadorPorTecnologia"

export default function Tecnologias() {

    //
    // A. Variáveis
    const tecnologias:string[] = ['HTML', 'CSS', 'JS']

    //
    // B. renderização de componentes
    return (
        <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

            <h2>Contadores de Tecnologias Preferidas</h2>

            <ul>
                {tecnologias.map((tecnologia, index) => (
                    <li key={index}>
                        {tecnologia} 
                        <ContadorPorTecnologia 
                            tecnologia={tecnologia}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}
