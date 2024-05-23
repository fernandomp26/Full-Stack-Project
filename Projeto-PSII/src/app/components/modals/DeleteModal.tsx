import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { XIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";

interface Route {
    url: string;
}

export default function DeleteModal({ url }: Route) {

    const id = useRef<HTMLInputElement>(null);

    const deleteData = async () => {
        const dUrl = `${url}/${id.current?.value}`
        try {
            await fetch(dUrl ,{
                method: "DELETE",
            })
            console.log("Instância excluida com sucesso!");
        } catch (error) {
            console.log("Erro ao excluir a instância -> " + error);
        }
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={"outline"}>
                        <XIcon className="w-4 h-4" />
                        Excluir
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        {url === 'http://127.0.0.1:8080/api/carros' && (
                            <DialogTitle>Excluir carro</DialogTitle>
                        )}
                        {url === 'http://127.0.0.1:8080/api/cidades' && (
                            <DialogTitle>Excluir cidade</DialogTitle>
                        )}
                        {url === 'http://127.0.0.1:8080/api/computadores' && (
                            <DialogTitle>Excluir computador</DialogTitle>
                        )}
                        {url === 'http://127.0.0.1:8080/api/times' && (
                            <DialogTitle>Excluir time</DialogTitle>
                        )}
                        <DialogDescription>Digite um ID da tabela para excluir.</DialogDescription>
                    </DialogHeader>
                    <form className="w-full flex flex-col justify-center gap-10" onSubmit={deleteData}>
                        <Input required placeholder="Exemplo: 1" ref={id} ></Input>
                        <div className="flex gap-3 mt-5">
                            <DialogClose asChild>
                                <Button variant={"secondary"}>Cancelar</Button>
                            </DialogClose>
                            <Button type="submit">Enviar</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}