import { useState } from 'react'
import './Cadastro.css'

function Cadastro({ voltarParaLogin }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ nome, email, password })
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Cadastro</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                placeholder="Digite seu nome"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="emailCadastro" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="emailCadastro"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Digite seu email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="senhaCadastro" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="senhaCadastro"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Digite sua senha"
              />
            </div>

            <button type="submit" className="btn btn-primary me-2">
              Cadastrar
            </button>
            <button type="button" className="btn btn-primary me-2" onClick={voltarParaLogin}>
              Voltar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
