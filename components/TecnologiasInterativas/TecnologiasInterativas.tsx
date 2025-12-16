'use client'

import useSWR from 'swr';
import Image from 'next/image';
import { useState } from 'react';
import { devIndicatorServerState } from 'next/dist/server/dev/dev-indicator-server-state';
import { takeCoverage } from 'v8';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function TecnologiasInterativas() {
  const { data, error, isLoading } = useSWR('/api/tecnologias', fetcher);
  const [likes, setLikes] = useState<{ [key: string]: number }>({});
  const [historico, setHistorico] = useState<string[]>([]);
  const [filtro, setFiltro] = useState('');

  if (error) return <p className="p-4">Erro ao carregar tecnologias.</p>;
  if (isLoading) return <p className="p-4">A carregar tecnologias...</p>;
  if (!data || data.length === 0) return <p className="p-4">Sem tecnologias.</p>;


  const filtradas = data.filter((tec : any) =>
    tec.title.toLowerCase().includes(filtro.toLocaleLowerCase())
  );

  const darLike = (title : string) => {
    setLikes(prev => ({
      ...prev , [title] : prev[title] ?Math.min(prev[title] + 1, 10) : 1,
    }));

    setHistorico(prev => [...prev , `${title} liked`]);
  }


  