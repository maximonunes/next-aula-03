'use client'


import useSWR from 'swr';
import Image from 'next/image';


const fetcher = (url: string) => fetch(url).then(res => res.json());


export default function Tecnologias() {
const { data, error, isLoading } = useSWR('/api/tecnologias', fetcher);


if (error) return <p className="p-4">Erro ao carregar tecnologias.</p>;
if (isLoading) return <p className="p-4">A carregar tecnologias...</p>;
if (!data || data.length === 0) return <p className="p-4">Sem tecnologias.</p>;


return (
<section className="bg-white shadow-md rounded-lg p-4">
<h2 className="text-2xl font-semibold mb-4">Tecnologias</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{data.map((tec: any) => (
<article key={tec.title} className="flex gap-4 items-start p-3 border rounded">
<div className="w-16 h-16 relative flex-shrink-0">
{/* next/image pede caminhos públicos ou remote - assumo que tens as imagens em public/images */}
<Image
src={`/images/${tec.image}`}
alt={tec.title}
width={64}
height={64}
className="object-contain"
/>
</div>


<div>
<h3 className="font-bold">{tec.title}</h3>
<p className="text-sm mt-1">{tec.description}</p>
<div className="mt-2 text-yellow-500">{renderStars(tec.rating)}</div>
</div>
</article>
))}
</div>
</section>
);
}

function renderStars(rat : number){
    const out = [];

    for(let i = 0; i < rat ; i++){
        out.push(<span key = {i}>{i < rat ?'★' : '☆'}</span>);
    }

    return <span aria-hidden>{out}</span>
}