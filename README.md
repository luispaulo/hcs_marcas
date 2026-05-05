# HCS Registro de Marcas

Landing page institucional da **HCS Registro de Marcas**, especializada em registro de marcas no INPI.

Construída com **TanStack Start (React 19 + Vite 7)** e **Tailwind CSS v4**.

---

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) 20+ (recomendado 22)
- [Bun](https://bun.sh/) (gerenciador de pacotes usado no projeto)
  - Instalação: `curl -fsSL https://bun.sh/install | bash`
- Git

---

## 🚀 Como subir o projeto localmente

### 1. Descompacte o arquivo
```bash
unzip hcs-registro-marcas.zip
cd hcs-registro-marcas
```

### 2. Instale as dependências
```bash
bun install
```
> Se preferir usar npm: `npm install`

### 3. Rode o servidor de desenvolvimento
```bash
bun run dev
```
Acesse: [http://localhost:8080](http://localhost:8080)

### 4. Build de produção
```bash
bun run build
```
Os arquivos otimizados serão gerados na pasta `.output/`.

### 5. Preview do build
```bash
bun run start
```

---

## 📦 Subindo para o GitHub

### 1. Crie um repositório novo no GitHub
Acesse [github.com/new](https://github.com/new) e crie um repositório (ex: `hcs-registro-marcas`). **Não** inicialize com README, .gitignore ou license.

### 2. Inicialize o git localmente
```bash
cd hcs-registro-marcas
git init
git add .
git commit -m "Primeiro commit - HCS Registro de Marcas"
git branch -M main
```

### 3. Conecte ao repositório remoto e envie
```bash
git remote add origin https://github.com/SEU-USUARIO/hcs-registro-marcas.git
git push -u origin main
```
> Substitua `SEU-USUARIO` pelo seu usuário do GitHub.

---

## 🌐 Deploy

A aplicação pode ser publicada em qualquer plataforma compatível com TanStack Start:

- **Cloudflare Workers** (configuração padrão via `wrangler.jsonc`)
- **Vercel**
- **Netlify**

Para Cloudflare:
```bash
bun run build
bunx wrangler deploy
```

---

## 📁 Estrutura do projeto

```
src/
├── assets/         # Imagens (hero, etc.)
├── components/ui/  # Componentes shadcn/ui
├── routes/
│   ├── __root.tsx  # Layout raiz + SEO meta tags
│   └── index.tsx   # Landing page
└── styles.css      # Tokens de design (cores, gradientes)
```

---

## 📞 Contato

- **Telefone / WhatsApp:** (61) 98248-1004
- **E-mail:** luispaulolpsn@gmail.com
# hcs_marcas
# hcs_marcas
