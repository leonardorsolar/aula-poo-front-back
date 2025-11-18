import express, { Request, Response } from "express"
import cors from "cors"
import UserController from "./controllers/UserController"

const app = express()
const port = process.env.PORT ? Number(process.env.PORT) : 3000

// Middlewares
app.use(express.json())
app.use(cors())

// Health check / root
app.get("/", (_req: Request, res: Response) => {
    res.send("Hello, World!")
})

const userController = new UserController()

// Rotas de usuário
app.post("/criar-usuario", userController.criarUsuario)

// Start server
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
