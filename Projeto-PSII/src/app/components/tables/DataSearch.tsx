import { useEffect, useState } from "react";

interface Route {
    url: string,
    search?: string
}

export default function DataSearch({ url, search }: Route) {

    const [datas, setDatas] = useState([]);
    const [sucess, setSucess] = useState(false);

    useEffect(() => {
        if (url === 'http://127.0.0.1:8080/api/carros' && search) {
            try {
                fetch(url + "/carro?brand=" + search)
                    .then(response => response.json())
                    .then(json => setDatas(json))
                setSucess(true)
            } catch (e) {
                console.log('Erro inesperado! -> ' + e)
            }
        }
        else if (url === 'http://127.0.0.1:8080/api/cidades' && search) {
            try {
                fetch(url + "/cidade?pais=" + search)
                    .then(response => response.json())
                    .then(json => setDatas(json))
                setSucess(true)
            } catch (e) {
                console.log('Erro inesperado! -> ' + e)
            }
        }
        else if (url === 'http://127.0.0.1:8080/api/computadores' && search) {
            try {
                fetch(url + "/computador?marca=" + search)
                    .then(response => response.json())
                    .then(json => setDatas(json))
                setSucess(true)
            } catch (e) {
                console.log('Erro inesperado! -> ' + e)
            }
        }
        else {
            if(search) {
                try {
                    fetch(url + "/time?fundacao=" + search)
                        .then(response => response.json())
                        .then(json => setDatas(json))
                    setSucess(true)
                } catch (e) {
                    console.log('Erro inesperado! -> ' + e)
                }
            }
        }
    }, [datas])

    return (
        <main className="w-[100%] flex flex-col border rounded p-2">
            {datas.length < 1 && sucess && (
                <h1>...</h1>
            )}
            {url === 'http://127.0.0.1:8080/api/carros' && (
                <>
                    {datas.map((d: any) =>
                        <h1>{d.id} - {d.model}</h1>
                    )}
                </>
            )}

            {url === 'http://127.0.0.1:8080/api/cidades' && (
                <>
                    {datas.map((d: any) =>
                        <h1>{d.id} - {d.nome}</h1>
                    )}
                </>
            )}

            {url === 'http://127.0.0.1:8080/api/times' && (
                <>
                    {datas.map((d: any) =>
                        <h1>{d.id} - {d.nome}</h1>
                    )}
                </>
            )}

            {url === 'http://127.0.0.1:8080/api/computadores' && (
                <>
                    {datas.map((d: any) =>
                        <h1>{d.id} - {d.processador}</h1>
                    )}
                </>
            )}
        </main>
    )
}