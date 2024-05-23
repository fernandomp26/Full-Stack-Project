import { useEffect, useState } from "react";

interface Router {
    id?: number,
    url: string
}

export default function IdCard({ id, url }: Router) {

    const [datas, setDatas] = useState([]);
    const urlData = `${url}/${id}`;

    useEffect(() => {
        try {
            fetch(urlData)
                .then(response => response.json())
                .then(json => setDatas(json))
        } catch (e) {
            console.log('Erro inesperado! -> ' + e)
        }
    }, [id, url, urlData]);

    const isCarro = () => {
        return url === 'http://127.0.0.1:8080/api/carros';
    }

    const isCidade = () => {
        return url === 'http://127.0.0.1:8080/api/cidades';
    }

    const isComputador = () => {
        return url === 'http://127.0.0.1:8080/api/computadores';
    }

    const isTime = () => {
        return url === 'http://127.0.0.1:8080/api/times';
    }

    return (
        <div className='flex flex-col p-2 border rounded w-[100%]'>
            {datas && (
                <div>
                    {isCidade() && 'nome' in datas && (
                        <>
                            <h1 className="text-lg font-semibold mb-4">Cidade com ID {id}</h1>
                            <p><b>Cidade</b>: {datas.nome}</p>
                            <p><b>Estado</b>: {datas.estado}</p>
                            <p><b>País</b>: {datas.pais}</p>
                            <p><b>População</b>: {parseInt(datas.populacao).toLocaleString('pt-br')}</p>
                        </>
                    )}
                    {isCarro() && 'model' in datas && (
                        <>
                            <h1 className="text-lg font-semibold mb-4">Carro com ID {id}</h1>
                            <p><b>Modelo</b>: {datas.model}</p>
                            <p><b>Marca</b>: {datas.brand}</p>
                            <p><b>Ano de fabricação</b>: {datas.year}</p>
                            <p><b>Categoria</b>: {datas.category}</p>
                        </>
                    )}
                    {isComputador() && 'processador' in datas && (
                        <>
                            <h1 className="text-lg font-semibold mb-4">Computador com ID {id}</h1>
                            <p><b>Processador</b>: {datas.processador}</p>
                            <p><b>Marca</b>: {datas.marca}</p>
                            <p><b>Quantidade de RAM</b>: {datas.ram}</p>
                            <p><b>Quantidade de Disco</b>: {datas.disco}</p>
                        </>
                    )}
                    {isTime() && 'nome' in datas && (
                        <>
                            <h1 className="text-lg font-semibold mb-4">Time com ID {id}</h1>
                            <p><b>Nome</b>: {datas.nome}</p>
                            <p><b>Cidade</b>: {datas.cidade?.nome}</p>
                            <p><b>Estado</b>: {datas.cidade?.estado}</p>
                            <p><b>Ano de fundação</b>: {datas.ano}</p>
                        </>
                    )}
                </div>
            )}
            {!datas && (
                <h1>Não existe esse tipo de instância com ID {id}</h1>
            )}
        </div>
    );
}