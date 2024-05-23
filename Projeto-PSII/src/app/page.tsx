'use client'

import { useState } from "react";

import CreateModal from "./components/modals/CreateModal";
import DeleteModal from "./components/modals/DeleteModal";
import DataSearch from "./components/tables/DataSearch";
import DataTable from "./components/tables/DataTable";
import UpdateModal from "./components/modals/UpdateModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RouteIcon, SearchIcon } from 'lucide-react'
import IdCard from "./components/idCard/IdCard";

export default function Home() {

  const [url, setUrl] = useState('http://127.0.0.1:8080/api/cidades');
  const [search, setSearch] = useState('');
  const [searchId, setSearchId] = useState('');
  const [searchBol, setSearchBol] = useState(false);

  const resetSearch = () => {
    if(!searchBol) {
      setSearchBol(true);
    }
    else {
      setSearchBol(false);
      setSearch('');
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <nav className="flex w-full gap-3 p-3 items-center">
        <RouteIcon className="max-lg:hidden" />
        <Button className="focus:underline" variant={"link"} onClick={(e) => setUrl('http://127.0.0.1:8080/api/carros')}>Carros</Button>
        <Button className="focus:underline" variant={"link"} onClick={(e) => setUrl('http://127.0.0.1:8080/api/cidades')}>Cidades</Button>
        <Button className="focus:underline" variant={"link"} onClick={(e) => setUrl('http://127.0.0.1:8080/api/computadores')}>Computadores</Button>
        <Button className="focus:underline" variant={"link"} onClick={(e) => setUrl('http://127.0.0.1:8080/api/times')}>Times</Button>
      </nav>
      <div className="w-[70%] max-lg:w-[100%] h-[80vh] gap-6 flex flex-col items-center justify-center">
        <div className="w-[100%] flex items-center justify-between gap-3 max-lg:flex-col max-lg:w-[100%]">
          <div className="flex gap-2 items-center w-[50%] max-lg:w-[80%]">
            {url == 'http://127.0.0.1:8080/api/cidades' ? (
              <Input
                placeholder="Digite um país..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            ) : url == 'http://127.0.0.1:8080/api/carros' || url == 'http://127.0.0.1:8080/api/computadores' ? (
              <Input
                placeholder="Digite uma marca..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            ) : (
              <Input
                placeholder="Digite um ano de fundação..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            )}
            <Button disabled={search.length <= 2 && !searchBol} onClick={resetSearch}>
              <SearchIcon className="w-4 h-4" />
              {!searchBol ? 'Filtrar' : 'Retirar filtro'}
            </Button>
          </div>
          <div className="flex gap-2 items-center">
            <CreateModal url={url} />
            <DeleteModal url={url} />
            <UpdateModal url={url} />
          </div>
        </div>
        {!searchBol ? (
          <DataTable url={url} />
        ) : (
          <DataSearch url={url} search={search} />
        )}
        <Input
          placeholder="Digite um ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        {searchId.length >= 1 && (
          <IdCard url={url} id={parseInt(searchId)} />
        )}
      </div>
    </div>
  );
}
