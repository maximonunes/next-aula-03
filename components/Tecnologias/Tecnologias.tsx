import Preferida from "../Preferida/Preferida"

export default function Tecnologias() {

    // estados e variáveis

    const tecnologias:string[] = ['HTML', 'CSS', 'JS']

    // renderização
    return (
        <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

            <h2>Tecnologias Preferidas</h2>

            <ul>
                {tecnologias.map((tecnologia, index) => (
                    <li key={index}>
                        {tecnologia} 
                        <Preferida 
                            tecnologia={tecnologia}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}
