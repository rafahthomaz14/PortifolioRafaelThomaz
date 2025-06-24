import { Separator } from "@/components/ui/separator"

export default function Formacao() {
    return (
        <>
            <img
                src="logo.png"
                alt=""
                className="fixed top-0 right-0 z-0 pointer-events-none opacity-4"
            />
            <h1 className="text-3xl lg:text-4xl font-bold p-5">Formação Acadêmica</h1>
            <div className="p-6">
                <div className="space-y-1">
                    <h4 className="lg:text-2xl text-lg leading-none font-medium">Tecnologia da Informação</h4>
                    <p className="text-muted-foreground text-sm lg:text-lg">
                        Universidade Virtual do Estado de São Paulo UNIVESP
                    </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm lg:text-lg">
                    <div>Ensino Superior</div>
                    <Separator orientation="vertical" />
                    <div>Bacharelado</div>
                    <Separator orientation="vertical" />
                    <div>Cursando - 07/2025 à 07/2028</div>
                </div>
            </div>

            <div className="p-6">
                <div className="space-y-1">
                    <h4 className="lg:text-2xl text-lg leading-none font-medium">Análise Desenvolvimento de Sistemas</h4>
                    <p className="text-muted-foreground text-sm lg:text-lg">
                        Universidade Paulista UNIP
                    </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm lg:text-lg">
                    <div>Ensino Superior</div>
                    <Separator orientation="vertical" />
                    <div>Tecnologo</div>
                    <Separator orientation="vertical" />
                    <div>Concluido - 06/2023 à 06/2025</div>
                </div>
            </div>

            <div className="p-6">
                <div className="space-y-1">
                    <h4 className="lg:text-2xl text-lg leading-none font-medium">Desenvolvimento de Sistemas</h4>
                    <p className="text-muted-foreground text-sm lg:text-lg">
                        Universidade Paulista UNIP - 06/2023 à 06/2025
                    </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm lg:text-lg">
                    <div>Curso Técnico</div>
                    <Separator orientation="vertical" />
                    <div>Técnico</div>
                    <Separator orientation="vertical" />
                    <div>Concluido - 01/2022 à 06/2023</div>
                </div>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold p-5 mt-5">Cursos Complementares</h1>

            <div className="p-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">

                    <li className="mb-5">
                        <h4 className="lg:text-[20px] text-lg leading-none font-medium">React Js do zero ao avançado na prática </h4>
                        <p className="text-muted-foreground lg:text-lg">
                            Udemy Cursos
                        </p>
                        <p className="text-muted-foreground text-sm">
                            React Js | JavaScript | FireBase | TailwindCss
                        </p>
                    </li>

                    <li className="mb-5">
                        <h4 className="lg:text-[20px] text-lg leading-none font-medium">Front-End fundamentos HTML, CSS e JS</h4>
                        <p className="text-muted-foreground lg:text-lg">
                            Udemy Cursos
                        </p>
                        <p className="text-muted-foreground text-sm">
                            HTML | CSS | JavaScript
                        </p>
                    </li>

                    <li className="mb-5">
                        <h4 className="lg:text-[20px] text-lg leading-none font-medium">Fundamentos de lógica de programação</h4>
                        <p className="text-muted-foreground lg:text-lg">
                            Fundação Bradesco
                        </p>
                        <p className="text-muted-foreground text-sm">
                            Lógica de Programação
                        </p>
                    </li>

                    <li className="mb-5">
                        <h4 className="lg:text-[20px] text-lg leading-none font-medium">Curso de figma</h4>
                        <p className="text-muted-foreground lg:text-lg">
                            Cursa.com
                        </p>
                        <p className="text-muted-foreground text-sm">
                            Figma | Design
                        </p>
                    </li>

                    <li className="mb-5">
                        <h4 className="lg:text-[20px] text-lg leading-none font-medium">Masterclass Node.Js</h4>
                        <p className="text-muted-foreground lg:text-lg">
                            Rocketseat
                        </p>
                        <p className="text-muted-foreground text-sm">
                            Node.Js
                        </p>
                    </li>

                    <li className="mb-5">
                        <h4 className="lg:text-[20px] text-lg leading-none font-medium">ASP.NET Core</h4>
                        <p className="text-muted-foreground lg:text-lg">
                            Desenvoilvedor.io
                        </p>
                        <p className="text-muted-foreground text-sm">
                            C# | ASP.NET
                        </p>
                    </li>

                    <li className="mb-5">
                        <h4 className="lg:text-[20px] text-lg leading-none font-medium">Treinamento semana do programador</h4>
                        <p className="text-muted-foreground lg:text-lg">
                            Dev em Dobro
                        </p>
                        <p className="text-muted-foreground text-sm">
                            HTML | CSS | JavaScript
                        </p>
                    </li>

                    <li className="mb-5">
                        <h4 className="lg:text-[20px] text-lg leading-none font-medium">Ingles Básico</h4>
                        <p className="text-muted-foreground lg:text-lg">
                            Udemy Cursos
                        </p>
                       
                    </li>
                </ul>

            </div>

        </>

    )
}