import PageHeader from "@/components/pageHeader"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
    <PageHeader/>
    <div className="mt-16 grid text-center  ">
      Welcome to the Pokémon viewer page. <br/>
      Select "Pokémon List" to show the Pokémon viewer.
    </div>
    </main>
  )
}
