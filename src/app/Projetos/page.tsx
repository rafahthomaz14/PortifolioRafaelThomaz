import { Button } from "@/components/ui/button"


export default function Projetos() {
    return (
        <>
            <img
                src="logo.png"
                alt=""
                className="fixed top-0 right-0 z-0 pointer-events-none opacity-4"
            />
            <h1 className="text-3xl lg:text-4xl font-bold p-5">Meus Projetos</h1>

            <div className="p-4 lg:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-center bg-gray-200 p-3 rounded-2xl ">
                    <img src="./canteen.jpg" className="w-full h-full object-cover rounded-md" alt="Imagem 1" />
                    <div className="flex w-[100%] justify-between">
                        <Button className=" cursor-pointer w-[49%] mt-2">Sobre</Button>
                        <a
                            href="https://github.com/rafahthomaz14/School_Canteen"
                            target="_blank"
                            className="w-[49%] mt-2 inline-block"
                        >
                            <Button className=" cursor-pointer w-full">GitHub</Button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center bg-gray-200 p-3 rounded-2xl ">
                    <img src="./mre.png" className="w-full h-full object-cover rounded-md" alt="Imagem 1" />
                    <div className="flex w-[100%] justify-between">
                        <Button className="cursor-pointer w-[49%] mt-2">Sobre</Button>
                        <a
                            href="https://github.com/rafahthomaz14/MRE_Solucoes"
                            target="_blank"
                            className="w-[49%] mt-2 inline-block"
                        >
                            <Button className="cursor-pointer w-full">GitHub</Button>
                        </a>
                    </div>
                </div>


                <div className="flex flex-col items-center bg-gray-200 p-3 rounded-2xl ">
                    <img src="./plantech.jpg" className="w-full h-full object-cover rounded-md" alt="Imagem 1" />
                    <div className="flex w-[100%] justify-between">
                        <Button className=" cursor-pointer w-[49%] mt-2">Sobre</Button>
                        <a
                            href="https://github.com/rafahthomaz14/Projeto_Plantech"
                            target="_blank"
                            className="w-[49%] mt-2 inline-block"
                        >
                            <Button className="cursor-pointer w-full">GitHub</Button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center bg-gray-200 p-3 rounded-2xl ">
                    <img src="./portifolio1.png" className="w-full h-full object-cover rounded-md" alt="Imagem 1" />
                    <div className="flex w-[100%] justify-between">
                        <Button className=" cursor-pointer w-[49%] mt-2">Sobre</Button>
                        <a
                            href="https://github.com/rafahthomaz14/Portifolio"
                            target="_blank"
                            className="w-[49%] mt-2 inline-block"
                        >
                            <Button className="cursor-pointer w-full">GitHub</Button>
                        </a>
                    </div>
                </div>


            </div>



        </>

    )
}