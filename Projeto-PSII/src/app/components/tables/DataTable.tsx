import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableCell,
  TableRow
}
  from "@/components/ui/table";

import { useEffect, useState } from "react";

interface Route {
  url: string;
}

export default function DataTable({ url }: Route) {

  const [datas, setDatas] = useState([])

  useEffect(() => {
    setDatas([])
    fetch(url)
      .then(response => response.json())
      .then(json => setDatas(json))
  }, [url])

  function getHeader() {
    if (url === 'http://127.0.0.1:8080/api/carros') {
      return (
        <TableHeader>
          <TableHead>ID</TableHead>
          <TableHead>Modelo</TableHead>
          <TableHead>Marca</TableHead>
          <TableHead>Ano de Fabricação</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>ID do computador</TableHead>
        </TableHeader>
      )
    }
    else if (url === 'http://127.0.0.1:8080/api/cidades') {
      return (
        <TableHeader>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>País</TableHead>
          <TableHead>População</TableHead>
        </TableHeader>
      )
    }
    else if (url === 'http://127.0.0.1:8080/api/computadores') {
      return (
        <TableHeader>
          <TableHead>ID</TableHead>
          <TableHead>Marca</TableHead>
          <TableHead>Processador</TableHead>
          <TableHead>Quantidade de RAM</TableHead>
          <TableHead>Quantidade de Disco (em GB)</TableHead>
        </TableHeader>
      )
    }
    else {
      return (
        <TableHeader>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Ano de fundação</TableHead>
          <TableHead>Cidade</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>ID da cidade</TableHead>
        </TableHeader>
      )
    }
  }

  function getBody(datas: any[]) {
    if (url === 'http://127.0.0.1:8080/api/carros') {
      return (
        <>
          {datas.length >= 1 ? (
            <>
              {datas.map((d: any) =>
                <TableRow key={d.id}>
                  <TableCell>{d.id}</TableCell>
                  <TableCell>{d.model}</TableCell>
                  <TableCell>{d.brand}</TableCell>
                  <TableCell>{d.year}</TableCell>
                  <TableCell>{d.category}</TableCell>
                  <TableCell>{d.computador?.id}</TableCell>
                </TableRow>
              )}
            </>
          ) : (
            <TableRow>
              <TableCell colSpan={6}>
                <p>Crie um carro!</p>
              </TableCell>
            </TableRow>
          )}
        </>

      )
    }
    else if (url === 'http://127.0.0.1:8080/api/cidades') {
      return (
        <>
          {datas.map((d: any) =>
            <TableRow key={d.id}>
              <TableCell>{d.id}</TableCell>
              <TableCell>{d.nome}</TableCell>
              <TableCell>{d.estado}</TableCell>
              <TableCell>{d.pais}</TableCell>
              <TableCell>{parseInt(d.populacao).toLocaleString('pt-br')}</TableCell>
            </TableRow>
          )}
        </>
      )
    }
    else if (url === 'http://127.0.0.1:8080/api/computadores') {
      return (
        <>
          {datas.map((d: any) =>
            <TableRow key={d.id}>
              <TableCell>{d.id}</TableCell>
              <TableCell>{d.processador}</TableCell>
              <TableCell>{d.marca}</TableCell>
              <TableCell>{d.ram}</TableCell>
              <TableCell>{d.disco}</TableCell>
            </TableRow>
          )}
        </>
      )
    }
    else {
      return (
        <>
          {datas.length >= 1 ? (
            <>
              {datas.map((d: any) =>
                <TableRow key={d.id}>
                  <TableCell>{d.id}</TableCell>
                  <TableCell>{d.nome}</TableCell>
                  <TableCell>{d.ano}</TableCell>
                  <TableCell>{d.cidade?.nome}</TableCell>
                  <TableCell>{d.cidade?.estado}</TableCell>
                  <TableCell>{d.cidade?.id}</TableCell>
                </TableRow>
              )}
            </>
          ) : (
            <TableRow>
              <TableCell colSpan={6}>
                <p>Crie um time!</p>
              </TableCell>
            </TableRow>
          )}
        </>
      )
    }
  }

  return (
    <>
      <Table className="border rounded-sm">
        {getHeader()}
        <TableBody>
          {datas.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                <p>Carregando...😴</p>
              </TableCell>
            </TableRow>
          ) : (
            <>
              {getBody(datas)}
            </>
          )}
        </TableBody>
      </Table>
    </>
  )
}
