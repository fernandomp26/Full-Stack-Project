import { useRef } from 'react'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";

interface Route {
    url: string;
}

export default function CreateModal({ url }: Route) {

    const at1 = useRef<HTMLInputElement>(null);
    const at2 = useRef<HTMLInputElement>(null);
    const at3 = useRef<HTMLInputElement>(null);
    const at4 = useRef<HTMLInputElement>(null);
    const at5 = useRef<HTMLInputElement>(null);

    const postData = async () => {
        if (url === 'http://127.0.0.1:8080/api/cidades') {
            const data = {
                nome: at1.current?.value,
                estado: at2.current?.value,
                pais: at3.current?.value,
                populacao: at4.current && parseInt(at4.current.value)
            }

            await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => console.log(response));
        }

        else if (url === 'http://127.0.0.1:8080/api/carros') {
            const data = {
                model: at1.current?.value,
                brand: at2.current?.value,
                year: at3.current && parseInt(at3.current.value),
                category: at4.current?.value,
                computador: {
                    id: at5.current && parseInt(at5.current.value)
                }
            }

            await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => console.log(response));
        }

        else if (url === 'http://127.0.0.1:8080/api/computadores') {
            const data = {
                marca: at1.current?.value,
                processador: at2.current?.value,
                ram: at3.current && parseInt(at3.current.value),
                disco: at4.current && parseInt(at4.current.value)
            }

            await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => console.log(response));
        }

        else {
            const data = {
                nome: at1.current?.value,
                ano: at4.current && parseInt(at4.current.value),
                cidade: {
                    id: at5.current && parseInt(at5.current.value)
                }
            }

            await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => console.log(response));
        }
    }

    const resetDatas = () => {
        if (at1.current && at2.current && at3.current && at4.current && at5.current) {
            at1.current.value = '';
            at2.current.value = '';
            at3.current.value = '';
            at4.current.value = '';
            at5.current.value = '';
        }
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>
                        <PlusCircle className="w-4 h-4" />
                        Criar
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        {url === 'http://127.0.0.1:8080/api/cidades'? (
                            <DialogTitle>Nova cidade</DialogTitle>
                        ) : url === 'http://127.0.0.1:8080/api/carros' ? (
                            <DialogTitle>Novo carro</DialogTitle>
                        ) : url === 'http://127.0.0.1:8080/api/computadores' ? (
                            <DialogTitle>Novo computador</DialogTitle>
                        ) : (
                            <DialogTitle>Novo time</DialogTitle>
                        )}
                        <DialogDescription>Digite as informações necessárias e clique no botão para enviar.</DialogDescription>
                    </DialogHeader>
                    <form className="w-full flex flex-col justify-center gap-10" onSubmit={postData}>
                        <div className="flex flex-col gap-3 mt-5">
                            {url === 'http://127.0.0.1:8080/api/carros' && (
                                <>
                                    <Input required placeholder="Modelo" type="text" ref={at1}></Input>
                                    <Input required placeholder="Marca" type="text" ref={at2}></Input>
                                    <Input required placeholder="Ano de fabricação" type="text" ref={at3}></Input>
                                    <Input required placeholder="Categoria" type="text" ref={at4}></Input>
                                    <Input required placeholder="ID do computador que o carro tem" type="text" ref={at5}></Input>
                                </>
                            )}

                            {url === 'http://127.0.0.1:8080/api/cidades' && (
                                <>
                                    <Input required placeholder="Nome" type="text" ref={at1}></Input>
                                    <Input required placeholder="Estado" type="text" ref={at2}></Input>
                                    <Input required placeholder="País" type="text" ref={at3}></Input>
                                    <Input required placeholder="População" type="text" ref={at4}></Input>
                                </>
                            )}

                            {url === 'http://127.0.0.1:8080/api/computadores' && (
                                <>
                                    <Input required placeholder="Marca" type="text" ref={at1}></Input>
                                    <Input required placeholder="Processador" type="text" ref={at2}></Input>
                                    <Input required placeholder="Quantidade de RAM" type="text" ref={at3}></Input>
                                    <Input required placeholder="Quantidade de disco" type="text" ref={at4}></Input>
                                </>
                            )}

                            {url === 'http://127.0.0.1:8080/api/times' && (
                                <>
                                    <Input required placeholder="Nome" type="text" ref={at1}></Input>
                                    <Input required placeholder="Ano de fundação" type="text" ref={at4}></Input>
                                    <Input required placeholder="ID da cidade de origem" type="text" ref={at5}></Input>
                                </>
                            )}
                        </div>
                        <div className="flex gap-3 mt-5">
                            <DialogClose asChild onClick={resetDatas}>
                                <Button variant={"secondary"}>Cancelar</Button>
                            </DialogClose>
                            <Button type="submit">Criar</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}