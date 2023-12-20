import { useState } from 'react';
import useFetch from '@/lib/fetch/get';
import Image from 'next/image';
import PageHeader from "@/components/pageHeader"


import '../app/globals.css'

const List = () => {
  const [pokemonNumber, setPokemonNumber] = useState(1);

  const {fetchData,isLoading,error} = useFetch('https://pokeapi.co/api/v2/pokemon/' + pokemonNumber)

  function handleChange (event:Event) {
    const target:any = event.target as HTMLInputElement
    let number:number = Number(target.value)
    if(number <= 0 || undefined){
      number = 1
    }else if(number > 151){
      number = 151
    }
    setPokemonNumber(number)
  }

  return (
    <>
    <main className="flex flex-col items-center justify-between p-24">
      <PageHeader/>
      <div className="mt-16 pokeViewer">
        <input type="number" min={1} max={151} value={pokemonNumber} onChange={handleChange}/>
        {error && <div>Error</div>}
        {isLoading && <div>Loading</div>}
        {fetchData && 
        <div className="mt-8">{fetchData.name}
        <Image width={100} height={100} alt={fetchData.name} src={fetchData.sprites.front_default}/>
        </div>}
      </div>
    </main>
    </>
  )
}
export default List