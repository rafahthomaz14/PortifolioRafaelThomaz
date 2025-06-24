"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Phone } from "lucide-react"
import { ToastContainer, toast } from 'react-toastify'

export default function Contato() {
  const [nome, setNome] = useState("")
  const [assunto, setAssunto] = useState("")
  const [telefone, setTelefone] = useState("")
  const [linkedinUrl, setLinkedinUrl] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")

  const handleEnviar = () => {
    if (
      !nome.trim() ||
      !assunto.trim() ||
      !telefone.trim() ||
      !email.trim() ||
      !mensagem.trim()
    ) {
      toast.error("Por favor, preencha todos os campos antes de enviar", {
        autoClose: 4000
      })
      return
    }

    const texto = `Nome: ${nome}\nAssunto: ${assunto}\nTelefone: ${telefone}\nLinkedIn: ${linkedinUrl}\nEmail: ${email}\nMensagem: ${mensagem}`
    const url = `https://wa.me/5516993696126?text=${encodeURIComponent(texto)}`
    window.open(url, "_blank")
    toast.success("Mensagem Enviada !", {
      autoClose: 3000
    })
  }

  return (
    <>
    <ToastContainer/>
      <img
        src="logo.png"
        alt=""
        className="fixed top-0 right-0 z-0 pointer-events-none opacity-4"
      />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Redes Sociais</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="https://www.linkedin.com/in/rafael-thomaz-92559920a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#0A66C2] text-white rounded-2xl p-4 flex items-center justify-center shadow-md">
              <Linkedin className="w-6 h-6 mr-2" />
              <span className="font-medium">LinkedIn</span>
            </div>
          </a>

          <a
            href="https://instagram.com/rafa_thomaz14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#dc2743] text-white rounded-2xl p-4 flex items-center justify-center shadow-md">
              <Instagram className="w-6 h-6 mr-2" />
              <span className="font-medium">Instagram</span>
            </div>
          </a>

          <a
            href="https://wa.me/5516993696126"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#25D366] text-white rounded-2xl p-4 flex items-center justify-center shadow-md">
              <Phone className="w-6 h-6 mr-2" />
              <span className="font-medium">WhatsApp</span>
            </div>
          </a>

          <a
            href="https://github.com/rafahthomaz14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#171515] text-white rounded-2xl p-4 flex items-center justify-center shadow-md">
              <Github className="w-6 h-6 mr-2" />
              <span className="font-medium">GitHub</span>
            </div>
          </a>
        </div>
      </div>

      <h1 className="text-3xl lg:text-4xl font-bold p-5">Entre em Contato ...</h1>

      <div className="p-6 space-y-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <p className="text-muted-foreground text-sm lg:text-lg">Nome Completo</p>
            <Input
              className="w-full"
              placeholder="Digite seu nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <p className="text-muted-foreground text-sm lg:text-lg">Assunto</p>
            <Select onValueChange={value => setAssunto(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o assunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Solicitação de Serviço">Solicitação de Serviço</SelectItem>
                <SelectItem value="Solicitação de Amizade">Solicitação de Amizade</SelectItem>
                <SelectItem value="Vagas de Emprego">Vagas de Emprego</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <p className="text-muted-foreground text-sm lg:text-lg">Telefone</p>
            <Input
              className="w-full"
              placeholder="Digite seu telefone"
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
            />
          </div>

          <div className="flex-1">
            <p className="text-muted-foreground text-sm lg:text-lg">Linkedin</p>
            <Input
              className="w-full"
              placeholder="Digite sua URL"
              value={linkedinUrl}
              onChange={e => setLinkedinUrl(e.target.value)}
            />
          </div>

          <div className="flex-1">
            <p className="text-muted-foreground text-sm lg:text-lg">Email</p>
            <Input
              className="w-full"
              placeholder="Digite seu email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <p className="text-muted-foreground text-sm lg:text-lg">Mensagem</p>
          <textarea
            className="w-full h-36 p-3 border rounded-md resize-y text-sm"
            placeholder="Deixe aqui sua mensagem"
            value={mensagem}
            onChange={e => setMensagem(e.target.value)}
          />
        </div>

        <div className="flex-1">
          <Button className="w-full" onClick={handleEnviar}>
            Enviar formulário
          </Button>
        </div>
      </div>
    </>
  )
}
