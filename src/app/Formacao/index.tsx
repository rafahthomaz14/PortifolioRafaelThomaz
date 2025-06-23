import { Separator } from "@/components/ui/separator"

export default function Formacao() {
    return (
        <>
            <img
                src="logo.png"
                alt=""
                className="fixed top-0 right-0 z-0 pointer-events-none opacity-4"
            />
            <h1 className="text-2xl lg:text-4xl font-bold p-5">Formação Acadêmica</h1>
            <div className="p-6">
                <div className="space-y-1">
                    <h4 className="text-lg leading-none font-medium">Tecnologia da Informação</h4>
                    <p className="text-muted-foreground text-sm">
                        Universidade Virtual do Estado de São Paulo UNIVESP
                    </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Ensino Superior</div>
                    <Separator orientation="vertical" />
                    <div>Bacharelado</div>
                    <Separator orientation="vertical" />
                    <div>Cursando - 06/2025 à 06/2028</div>
                </div>
            </div>

            <div className="p-6">
                <div className="space-y-1">
                    <h4 className="text-lg leading-none font-medium">Análise Desenvolvimento de Sistemas</h4>
                    <p className="text-muted-foreground text-sm">
                        Universidade Paulista UNIP
                    </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Ensino Superior</div>
                    <Separator orientation="vertical" />
                    <div>Tecnologo</div>
                    <Separator orientation="vertical" />
                    <div>Concluido - 06/2023 à 06/2025</div>
                </div>
            </div>

            <div className="p-6">
                <div className="space-y-1">
                    <h4 className="text-lg leading-none font-medium">Desenvolvimento de Sistemas</h4>
                    <p className="text-muted-foreground text-sm">
                        Universidade Paulista UNIP - 06/2023 à 06/2025
                    </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Curso Técnico</div>
                    <Separator orientation="vertical" />
                    <div>Técnico</div>
                    <Separator orientation="vertical" />
                    <div>Concluido - 01/2022 à 06/2023</div>
                </div>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold p-5 mt-5">Cursos Complementares</h1>

        </>

    )
}