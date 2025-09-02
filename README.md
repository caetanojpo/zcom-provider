# ZCOM — Provedor (zcom-provider)

> Landing page estática para ZCOM — Provedor de Internet em Cândido Mota
>
> Site público:
> [**https://www.zcomprovedor.com.br**](https://www.zcomprovedor.com.br/?utm_source=chatgpt.com) \
> \
> <img  alt="logo" src="https://github.com/user-attachments/assets/18e4dc22-60d7-44e3-91ac-0aa05b0f3407" />

\
\
Este repositório contém a landing page estática do projeto **zcom-provider** (protótipos desktop e
mobile já disponíveis). A arquitetura é Next.js com TypeScript, com uso de tailwind e shadcn para
estilização.

---

# Sumário

- Sobre o projeto
- Demo / Protótipos
- Principais features
- Stack tecnológica
- Como rodar localmente
- Build & deploy
- Testes & pre-push
- Contato / Créditos

---

# Sobre o projeto

**zcom-provider** é uma landing page estática que apresenta os planos, contatos e diferenciais do
provedor regional ZCOM, focado em Cândido Mota (SP). O objetivo é comunicar planos de fibra para
residências e empresas, destacar instalação rápida, suporte 24/7 e infraestrutura local dedicada.

---

# Demo / Protótipos

- Site público:
  [**https://www.zcomprovedor.com.br**](https://www.zcomprovedor.com.br/?utm_source=chatgpt.com)

## Protótipos:

ℹ Por questão de legibilidade do documento, vamos apenas colacionar as imagens desktop.

### Página em Construção

#### Desktop

<img alt="EMCONSTRUCAODESKTOP" src="https://github.com/user-attachments/assets/02d84506-d28e-4148-a42b-74c90cefaee7" />

### Landing Page

#### Desktop: ❗ **(Devido ao tamanho, esta imagem teve sua qualidade prejudicada)** ❗

![ZCOM Prototipo Low 2](https://github.com/user-attachments/assets/169dbb6f-2a6a-43ba-953f-59a04ede4989)

---

# Principais features

- Landing page estática (Next.js)
- SEO e metadados completos (title, description, keywords)
- Layout responsivo com versões mobile e desktop (protótipos)
- Conteúdo voltado para conversão (contato/contratação)

---

# Stack tecnológica

- Next.js (React)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Jest + React Testing Library
- Husky (hooks git; pre-push)
- Ferramentas: ESLint, Prettier

---

# Como rodar localmente

```bash
# instalar dependências
npm install
# rodar em desenvolvimento
npm run dev
# rodar testes
npm run test           # (ou npm run test:coverage)
# build de produção
npm run build
```

---

# Build & deploy

Deploy é feito automaticamente para a Vercel.

---

# Testes & pre-push

Garantia de qualidade antes de subir PRs / commits:

- Testes unitários com **Jest** + **React Testing Library**.
- Cobertura: `npm run test:coverage`
- Hooks git com Husky

---

# Contato / Créditos

- Publisher / Desenvolvimento: **T_YOU Tecnologia**
- Projeto: **ZCOM** — Cândido Mota (SP)
- Site:
  [**https://www.zcomprovedor.com.br**](https://www.zcomprovedor.com.br/?utm_source=chatgpt.com)
