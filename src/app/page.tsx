import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <img
        src="logo.png"
        alt=""
        className="fixed top-0 right-0 z-0 pointer-events-none opacity-4"
      />
      <div className="flex">
        <div className="p-10 flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <img src="Rafa.jpg" alt="" className="w-100 rounded-lg mb-2" />
          <Button className="w-100 cursor-pointer">Baixar Curriculo</Button>
        </div>

        <div className="p-10">
          <h1>Titulo aqui</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio officia aperiam hic ratione, facilis neque expedita totam. Labore, ea. Alias eaque laborum unde, doloribus excepturi reprehenderit pariatur dolor ipsam.</p>
        </div>
      </div>

    </>
  )
}
