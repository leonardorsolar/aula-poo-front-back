import { Request, Response } from "express"

/**
 * Controller responsável por operações de Usuário
 */
export default class UserController {
    /**
     * Criar usuário
     * Requer name, email, password no body (JSON)
     */
    public criarUsuario = (req: Request, res: Response) => {
        const { name, email, password } = (req.body || {}) as {
            name?: string
            email?: string
            password?: string
        }

        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ error: "Nome, email e senha são obrigatórios" })
        }

        // Aqui poderia existir a lógica de persistência (DB). Por enquanto, só loga.
        console.log(`Nome: ${name}`)
        console.log(`Email: ${email}`)
        console.log(`Senha: ${password}`)

        return res.status(201).json({ name: name })
    }
}
