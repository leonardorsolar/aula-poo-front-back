## 🚀 TUTORIAL: Rodando Projeto React + Vite do GitHub

### ✅ 1. **Pré-requisitos**

-   Node.js instalado (versão 16+ recomendada) → [https://nodejs.org](https://nodejs.org)
-   Git instalado → [https://git-scm.com](https://git-scm.com)

---

### 📥 2. **Baixando o projeto do GitHub**

Abra o terminal e execute:

```bash
git clone https://github.com/leonardorsolar/iff-basic-program-react-front.git
```

Entre na pasta do projeto:

```bash
cd iff-basic-program-react-front
```

---

### 📦 3. **Instalando as dependências (bibliotecas)**

Execute o comando abaixo para instalar as bibliotecas descritas no `package.json`:

```bash
npm install
```

Esse comando cria a pasta `node_modules` e baixa todas as bibliotecas do projeto, como `react`, `vite`, etc.

---

### 🧪 4. **Inicializando o projeto (npm init?)**

Se for criar um projeto novo, usamos `npm init` — **mas nesse caso o projeto já está iniciado**, então **não precisa rodar `npm init`**.

---

### 🌐 5. **Executar no navegador**

Para rodar o projeto localmente:

```bash
npm run dev
```

O Vite irá rodar o projeto em algo como:

```
http://localhost:5173
```

Abra o navegador e acesse esse endereço para ver o app rodando.

---

## 📂 Estrutura de Pastas (explicada)

```txt
iff-basic-program-react-front/
├── node_modules/           # Bibliotecas instaladas pelo npm (não editar)
├── public/                 # Arquivos públicos (ícones, imagens, favicon etc.)
│   └── vite.svg
├── src/                    # Código-fonte principal do projeto React
│   ├── assets/             # Imagens, ícones, arquivos estáticos usados no código
│   ├── components/         # Componentes reutilizáveis do React
│   ├── pages/              # Páginas principais do app (Ex: Home, Login)
│   ├── App.tsx             # Componente principal da aplicação
│   ├── main.tsx           # Ponto de entrada da aplicação React
├── .gitignore              # Arquivos/pastas ignorados pelo Git
├── index.html              # HTML principal usado pelo Vite
├── package.json            # Lista de dependências e scripts npm
├── tsconfig.json           # Configuração do TypeScript
├── vite.config.ts          # Configuração do Vite
```

---

## 🧼 Dica Extra: Scripts úteis do `package.json`

```json
"scripts": {
  "dev": "vite",             // Roda o projeto em modo desenvolvimento
  "build": "vite build",     // Gera versão otimizada para produção
  "preview": "vite preview"  // Visualiza a versão de produção localmente
}
```

---

## 🧪 Conclusão

Agora você tem:

-   Projeto React + Vite clonado
-   Dependências instaladas
-   Projeto rodando localmente com `npm run dev`
-   Estrutura básica compreendida
