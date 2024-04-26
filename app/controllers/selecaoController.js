import conexao from '../controllers/database/conexao.js'
import selecaoRepositorio from './repositories/selecaoRepositorio.js'

class selecaoController {
    async index(req, res) {
        const row = await selecaoRepositorio.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await selecaoRepositorio.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const selecao = req.body
        try{
            const row = await selecaoRepositorio.create(selecao)
            res.json(row)
        }
        catch(erro){
            res.status(500).json(erro)
        }
    
    }

    async update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const row = await selecaoRepositorio.update(selecao, id)
        res.json(row)
        
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await selecaoRepositorio.delete(id)
        res.json(row)
    }
}

export default new selecaoController
