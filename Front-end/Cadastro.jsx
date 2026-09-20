import { useState } from 'react'
import './Cadastro.css'

function Cadastro({ voltarParaLogin }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [numero_telefone, setNumeroTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErro('')
    setMensagem('')
    const telefoneNumerico = Number(numero_telefone.replace(/\D/g, ''))

    if (!nome || !email || !password || !numero_telefone || Number.isNaN(telefoneNumerico)) {
      setErro('Preencha todos os campos antes de cadastrar.')
      return
    }

    setCarregando(true)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/home/Cadastro`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome,
            email,
            senha: password,
            numero_telefone: telefoneNumerico,
          }),
        }
      )

      if (!response.ok) {
        let mensagemErro = 'Não foi possível enviar o cadastro.'

        if (response.status === 409) {
          mensagemErro = 'Já existe esse email cadastrado.'
        } else {
          try {
            const dadosErro = await response.json()
            mensagemErro = dadosErro.mensagem || dadosErro.message || mensagemErro
          } catch {
            // Mantém a mensagem padrão quando a API não enviar um corpo JSON.
          }
        }

        throw new Error(mensagemErro)
      }

      setMensagem('Cadastro realizado com sucesso!')
      setNome('')
      setEmail('')
      setPassword('')
      setNumeroTelefone('')
    } catch (error) {
      setErro(error.message || 'Não foi possível enviar o cadastro.')
    } finally {
      setCarregando(false)
    }
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

            <div className="mb-3">
              <label htmlFor="numeroTelefone" className="form-label">
                Número de Telefone
              </label>
              <input
                type="tel"
                className="form-control"
                id="numeroTelefone"
                value={numero_telefone}
                onChange={(event) => setNumeroTelefone(event.target.value)}
                placeholder="Digite seu número de telefone"
              />
            </div>

            {erro ? <div className="alert alert-danger">{erro}</div> : null}
            {mensagem ? <div className="alert alert-success">{mensagem}</div> : null}

            <button type="submit" className="btn btn-primary me-2" disabled={carregando}>
              {carregando ? 'Cadastrando...' : 'Cadastrar'}
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
