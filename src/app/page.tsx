import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <>
            <img
                src="logo.png"
                alt=""
                className="fixed top-0 right-0 z-0 pointer-events-none opacity-4"
            />
            <h1 className="text-3xl lg:text-4xl font-bold lg:mb-[-5px] m-6">Sejam bem-vindos ao meu portfólio!</h1>

            <div className="flex flex-col lg:flex-row ">
                <div className="lg:p-10  flex flex-col items-center justify-center lg:items-start lg:justify-start ">
                    <img src="Rafa.jpg" alt="" className="w-95 rounded-lg mb-2" />
                    <a href="/Curriculo.pdf" download="Curriculo-Rafael-Thomaz.pdf" className=" flex flex-col  items-center justify-center  w-100">
                        <Button className="w-95 cursor-pointer">
                            Baixar Currículo
                        </Button>
                    </a>

                </div>

                <div className="p-8">
                    <h4 className="lg:text-2xl text-lg font-medium">Meu nome é Rafael Henrique Thomaz,</h4>
                    <p className="lg:text-lg">Sou desenvolvedor com foco em Front-End, apaixonado por tecnologia e sempre em busca de evolução constante na área da programação. Desde 2022, venho estudando e aprimorando meus conhecimentos no desenvolvimento web e adquirindo experiência prática em diferentes projetos e tecnologias.</p>
                    <p className="lg:text-lg mt-5">Já trabalhei com ferramentas e linguagens como HTML, CSS, JavaScript, SQL, Firebase, C#, ReactJS, Next.js e Tailwind CSS, sempre buscando criar interfaces funcionais, modernas e com boa experiência para o usuário.</p>
                    <p className="lg:text-lg mt-5">Minha jornada é movida pela curiosidade, pelo aprendizado contínuo e pela vontade de entregar soluções eficientes. Gosto de explorar novas ferramentas, aplicar boas práticas e colaborar com projetos que tragam impacto real.Estou aberto a novas conexões, parcerias e oportunidades que me permitam crescer profissionalmente e contribuir com ideias e código de qualidade.</p>
                    <p className="lg:text-lg mt-10"> Seja bem-vindo(a) ao meu portfólio!</p>
                </div>
            </div>

        </>
    )
}
