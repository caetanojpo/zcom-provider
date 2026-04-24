# ZCOM — Provedor (zcom-provider)

> Landing page estática para ZCOM — Provedor de Internet em Cândido Mota (SP)
>
> Site público: [**https://www.zcomprovedor.com.br**](https://www.zcomprovedor.com.br)

<img alt="logo" src="https://github.com/user-attachments/assets/18e4dc22-60d7-44e3-91ac-0aa05b0f3407" />

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Stack tecnológica](#stack-tecnológica)
- [Arquitetura](#arquitetura)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar localmente](#como-rodar-localmente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Build e deploy](#build-e-deploy)
- [Testes](#testes)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Protótipos](#protótipos)
- [Contato e créditos](#contato-e-créditos)

---

## Sobre o projeto

**zcom-provider** é a landing page institucional do provedor regional **ZCOM**, com foco em Cândido
Mota (SP). O site apresenta os planos de internet fibra para residências e empresas, o mapa de
cobertura da cidade, o aplicativo ZCOM TV, os parceiros comerciais e os canais de contato direto via
WhatsApp.

O projeto é completamente estático — sem backend, sem banco de dados e sem variáveis de ambiente.

---

## Stack tecnológica

| Tecnologia                   | Versão          | Papel                               |
| ---------------------------- | --------------- | ----------------------------------- |
| Next.js                      | 15 (App Router) | Framework principal                 |
| React                        | 19              | Renderização de UI                  |
| TypeScript                   | 5               | Tipagem estática                    |
| Tailwind CSS                 | 4               | Estilização utilitária              |
| shadcn/ui                    | —               | Componentes base (Button, Carousel) |
| Framer Motion                | 12              | Animações de scroll e entrada       |
| Embla Carousel               | 8               | Carrossel de parceiros              |
| Jest + React Testing Library | 30 / 16         | Testes unitários                    |
| Husky                        | 9               | Git hooks (pre-push)                |
| ESLint + Prettier            | 9 / 3           | Linting e formatação                |
| pnpm                         | 9+              | Gerenciador de pacotes              |

---

## Arquitetura

O projeto segue **Atomic Design**:

```
src/
├── app/                        # Rotas do Next.js App Router
│   ├── layout.tsx              # Layout raiz (metadados SEO, fontes, JSON-LD)
│   └── page.tsx                # Composição das seções da landing page
│
├── components/
│   ├── atoms/                  # Elementos base: botões, ícones, tipografia, overlays
│   ├── molecules/              # Composições simples: drawer mobile, menus, cards de plano
│   ├── organisms/              # Seções completas: Navbar, Footer, PlanCard
│   │   └── map/                # Componentes do mapa de cobertura de Cândido Mota
│   ├── pages/                  # Montagem de cada seção da landing page
│   └── ui/                     # Componentes shadcn/ui (Button, Carousel)
│
├── config/                     # Metadados Open Graph/Twitter e schema JSON-LD
├── data/                       # Todo o conteúdo estático: copywriting, planos, links, parceiros
├── enums/                      # Enumerações (DataStorageEnum, RecurrenceEnum)
├── lib/                        # Utilitário cn() para merge de classes Tailwind
├── types/                      # SVGIcon e declaração de módulo *.svg
└── utils/                      # Constantes globais (URL do site, telefone comercial)
```

**Princípio central:** nenhum componente carrega dados diretamente. Todo o conteúdo vive em
`src/data/` e é importado nos componentes. Não há chamadas de API nem estado global.

---

## Pré-requisitos

- **Node.js** `>= 18.17` — exigido pelo Next.js 15
- **pnpm** `>= 9` — gerenciador de pacotes utilizado no projeto

```bash
# verificar versões instaladas
node -v
pnpm -v
```

> Para instalar o pnpm: `npm install -g pnpm`

---

## Como rodar localmente

```bash
# 1. clonar o repositório
git clone <url-do-repositorio>
cd zcom-provider

# 2. instalar dependências
#    (o script "prepare" configura os hooks do Husky automaticamente)
pnpm install

# 3. iniciar o servidor de desenvolvimento com Turbopack
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Scripts disponíveis

| Script               | Descrição                                        |
| -------------------- | ------------------------------------------------ |
| `pnpm dev`           | Servidor de desenvolvimento com Turbopack        |
| `pnpm build`         | Build de produção                                |
| `pnpm start`         | Servidor de produção (requer build anterior)     |
| `pnpm lint`          | ESLint com auto-fix em arquivos `.ts` e `.tsx`   |
| `pnpm format`        | Prettier com auto-fix em todos os arquivos       |
| `pnpm format:check`  | Verifica formatação sem corrigir                 |
| `pnpm type-check`    | Checagem de tipos TypeScript sem emitir arquivos |
| `pnpm test`          | Executa os testes unitários com Jest             |
| `pnpm test:watch`    | Testes em modo watch                             |
| `pnpm test:coverage` | Testes com relatório de cobertura de código      |

---

## Build e deploy

O deploy é feito automaticamente via **Vercel** a cada push na branch `main`. Nenhuma configuração
adicional de ambiente é necessária — o projeto é totalmente estático.

Para um build de produção local:

```bash
pnpm build
pnpm start
```

---

## Testes

Testes unitários com **Jest** + **React Testing Library**, cobrindo componentes atoms, molecules e
organisms.

```bash
# rodar todos os testes
pnpm test

# cobertura de código
pnpm test:coverage
```

Um hook **pre-push** (via Husky) executa `pnpm test` automaticamente antes de cada push. O push é
bloqueado se algum teste falhar.

---

## Variáveis de ambiente

Este projeto **não requer variáveis de ambiente**. Todo o conteúdo é estático e configurado em:

- `src/utils/constants.utils.ts` — URL do site, telefone comercial
- `src/data/links.data.ts` — links de WhatsApp, Instagram, lojas de aplicativo
- `src/data/plans.data.ts` — dados dos planos de internet

Não há arquivo `.env` necessário.

---

## Protótipos

> Por questão de legibilidade, apenas as versões desktop são exibidas aqui.

### Página em Construção

<img alt="Em Construção — Desktop" src="https://github.com/user-attachments/assets/02d84506-d28e-4148-a42b-74c90cefaee7" />

### Landing Page

> ❗ Devido ao tamanho, esta imagem teve sua qualidade reduzida.

![ZCOM Protótipo Landing Page](https://github.com/user-attachments/assets/169dbb6f-2a6a-43ba-953f-59a04ede4989)

---

## Contato e créditos

- **Desenvolvimento:** T_YOU Tecnologia
- **Cliente:** ZCOM — Provedor de Internet, Cândido Mota (SP)
- **Site:** [https://www.zcomprovedor.com.br](https://www.zcomprovedor.com.br)
