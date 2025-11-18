# README

## 🚀 Frontend

### 📥 Clonar o repositório

```bash
git clone https://github.com/leonardorsolar/iff-basic-program-react-front
```

### ▶️ Executar o projeto

No terminal, dentro da pasta do projeto:

1. Instalar as dependências:

```bash
npm i
```

2. Rodar o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abrir no navegador:

```
http://localhost:5173/
```

### 🛰️ Exemplo de requisição fetch utilizada

```javascript
fetch("http://localhost:3000/criar-usuario", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
}).then((response) => {
    if (!response.ok) {
        // tratamento de erro
    }
})
```

---

## 🧩 Backend

### 🟦 Backend em TypeScript

No terminal, dentro da pasta do backend:

1. Instalar as dependências:

```bash
npm i
```

2. Executar o servidor:

```bash
npm run dev
```

3. Acessar no navegador ou via API:

```
http://localhost:3000/
```

---

### ☕ Backend em Java

No terminal:

1. Executar o projeto (via IDE ou comando Gradle/Maven, dependendo do setup)
2. Acessar:

```
http://localhost:3000/
```
