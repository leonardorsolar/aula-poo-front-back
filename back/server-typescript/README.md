# Server TypeScript

Servidor Express convertido para TypeScript, com um controller de usuário e endpoint de criação.

## Scripts

-   `npm run dev`: roda o servidor em desenvolvimento com ts-node-dev.
-   `npm run build`: compila para `dist/`.
-   `npm start`: executa o build gerado em `dist/`.

## Endpoints

-   `GET /` — healthcheck simples.
-   `POST /criarUsuario` — cria usuário (mock). Body JSON:

```json
{
    "name": "Seu Nome",
    "email": "email@exemplo.com",
    "password": "sua_senha"
}
```

Respostas:

-   `201` em caso de sucesso
-   `400` se faltar `name`, `email` ou `password`

## Estrutura

```
src/
  controllers/
    UserController.ts  # Classe com método criarUsuario
  index.ts             # App Express e rotas
```

## Observação

Caso esteja rodando outro processo na porta 3000, defina a porta com `PORT=xxxx`.
