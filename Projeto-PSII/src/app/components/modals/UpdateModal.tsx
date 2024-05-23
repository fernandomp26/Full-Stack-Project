import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { UploadIcon } from 'lucide-react';
import { useRef } from "react";

interface Route {
  url: string
}

export default function UpdateModal({ url }: Route) {

  const id = useRef<HTMLInputElement>(null);
  const at1 = useRef<HTMLInputElement>(null);
  const at2 = useRef<HTMLInputElement>(null);
  const at3 = useRef<HTMLInputElement>(null);
  const at4 = useRef<HTMLInputElement>(null);
  const at5 = useRef<HTMLInputElement>(null);

  const setData = async () => {
    const idData = id.current && parseInt(id.current.value)
    // verificações para realizar o PUT da maneira certa (atributos e tipo das variáveis corretos)
    if (url === 'http://127.0.0.1:8080/api/carros') {

      // definição do corpo json enviado para o back-end
      const data = {
        id: id.current && parseInt(id.current.value),
        model: at1.current?.value,
        brand: at2.current?.value,
        year: at3.current && parseInt(at3.current.value),
        category: at4.current?.value,
        computador: {
          id: at5.current && parseInt(at5.current.value)
        }
      }

      // chamada do método PUT
      await fetch(url + "/" + idData, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then(response => console.log(response))
    }

    else if (url === 'http://127.0.0.1:8080/api/cidades') {

      const data = {
        id: id.current && parseInt(id.current.value),
        nome: at1.current?.value,
        estado: at2.current?.value,
        pais: at3.current?.value,
        populacao: at4.current && parseInt(at4.current.value)
      }

      await fetch(url + "/" + idData, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then(response => console.log(response))
    }

    else if (url === 'http://127.0.0.1:8080/api/computadores') {
      const data = {
        id: id.current && parseInt(id.current.value),
        processador: at1.current?.value,
        marca: at2.current?.value,
        ram: at3.current && parseInt(at3.current.value),
        disco: at4.current && parseInt(at4.current.value)
      }

      await fetch(url + "/" + idData, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then(response => console.log(response))
    }

    else {
      const data = {
        id: id.current && parseInt(id.current.value),
        nome: at1.current?.value,
        ano: at4.current && parseInt(at4.current.value),
        cidade: {
          id: at5.current && parseInt(at5.current.value)
        }
      }
      await fetch(url + "/" + idData, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then(response => console.log(response))
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <UploadIcon className="w-4 h-4" />
          Atualizar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {url === 'http://127.0.0.1:8080/api/carros' && (
            <DialogTitle>Alterar carro</DialogTitle>
          )}
          {url === 'http://127.0.0.1:8080/api/cidades' && (
            <DialogTitle>Alterar cidade</DialogTitle>
          )}
          {url === 'http://127.0.0.1:8080/api/computadores' && (
            <DialogTitle>Alterar computador</DialogTitle>
          )}
          {url === 'http://127.0.0.1:8080/api/times' && (
            <DialogTitle>Alterar time</DialogTitle>
          )}
          <DialogDescription>Escreva o ID da instância que deseja alterar e adicione  suas respectivas alterações.</DialogDescription>
        </DialogHeader>

        <form className="w-full flex flex-col justify-center gap-4" onSubmit={setData}>
          {url === 'http://127.0.0.1:8080/api/carros' && (
            <>
              <Input required placeholder="ID do carro para alteração de dados" ref={id}></Input>
              <Input placeholder="Novo modelo" ref={at1}></Input>
              <Input placeholder="Nova marca" ref={at2}></Input>
              <Input placeholder="Novo ano de fabricação" ref={at3}></Input>
              <Input placeholder="Nova categoria" ref={at4}></Input>
              <Input placeholder="Novo ID do computador que o carro tem" ref={at5}></Input>
            </>
          )}

          {url === 'http://127.0.0.1:8080/api/cidades' && (
            <>
              <Input required placeholder="ID da cidade" ref={id}></Input>
              <Input placeholder="Novo nome" ref={at1}></Input>
              <Input placeholder="Novo estado" ref={at2}></Input>
              <Input placeholder="Novo país" ref={at3}></Input>
              <Input placeholder="Nova população" ref={at4}></Input>
            </>
          )}

          {url === 'http://127.0.0.1:8080/api/computadores' && (
            <>
              <Input required placeholder="ID do computador" ref={id}></Input>
              <Input required placeholder="Nova marca" type="text" ref={at1}></Input>
              <Input required placeholder="Novo processador" type="text" ref={at2}></Input>
              <Input required placeholder="Nova quantidade de RAM" type="text" ref={at3}></Input>
              <Input required placeholder="Nova quantidade de disco" type="text" ref={at4}></Input>
            </>
          )}

          {url === 'http://127.0.0.1:8080/api/times' && (
            <>
              <Input required placeholder="ID do time" ref={id}></Input>
              <Input required placeholder="Novo nome" type="text" ref={at1}></Input>
              <Input required placeholder="Novo ano de fundação" type="text" ref={at4}></Input>
              <Input required placeholder="Novo ID da cidade de origem" type="text" ref={at5}></Input>
            </>
          )}
          <div className="flex gap-3 mt-5">
            <DialogClose asChild>
              <Button variant={"secondary"}>Cancelar</Button>
            </DialogClose>
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}