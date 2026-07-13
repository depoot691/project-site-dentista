import { useEffect, useState } from 'react'
import banner from './assets/dentista3.jpg'
import './App.css'
import Cadastro from './Cadastro'

function App() {
  const [telaAtual, setTelaAtual] = useState('login')

  useEffect(() => {
    fetch('http://localhost:8080/api/login')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.status)
        console.log(data.menssage)
      })
      .catch((error) => {
        console.error('Erro ao carregar a tela de login', error)
      })
  }, [])

  const fazerLogin = (event) => {
    event.preventDefault()

    fetch('http://localhost:8080/api/login-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'admin',
        senha: 'admin'
      })
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  }

  const irParaCadastro = (event) => {
    event.preventDefault()
    setTelaAtual('cadastro')
  }

  if (telaAtual === 'cadastro') {
    return <Cadastro voltarParaLogin={() => setTelaAtual('login')} />
  }

  return (
    <>
      <div className="position-absolute end-0 p-3 d-flex flex-column gap-2" style={{ top: '18px', zIndex: 2 }}>
        <a href="#suporte" className="suporte-link d-flex align-items-center gap-2 text-decoration-none">
          <i className="bi bi-search"></i>
          <span>Suporte</span>
        </a>

        <a href="#cadastro" className="suporte-link d-flex align-items-center gap-2 text-decoration-none" onClick={irParaCadastro}>
          <i className="bi bi-person-plus"></i>
          <span>Cadastro</span>
        </a>
      </div>

      <div className="container-fluid p-0">
        <img
          src={banner}
          className="img-fluid w-100"
          alt="banner"
          style={{ height: '350px', width: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="d-flex justify-content-center py-4">
        <form className="w-50 mx-3" onSubmit={fazerLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="digite seu email" />
            <div className="form-text">Nunca compartilharemos seu email com mais ninguém.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="digite sua senha" />
          </div>

          <button type="submit" className="btn btn-primary">
            enviar
          </button>
        </form>
      </div>
    </>
  )
}

export default App
