import { useEffect, useState } from 'react'
import banner from './assets/dentista3.jpg'
import './App.css'
import Cadastro from './Cadastro'
import DashBoard from './DashBoard'
import SuporteIA from './SuporteIA'

function App() {
  const [telaAtual, setTelaAtual] = useState('login') // 'login', 'cadastro', 'dashboard'  
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erroLogin, setErroLogin] = useState('')
  const [carregandoLogin, setCarregandoLogin] = useState(false)
  

  useEffect(() => {
    fetch('http://localhost:8080/home/login')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.status)
        console.log(data.menssage)
      })
      .catch((error) => {
        console.error('Erro ao carregar a tela de login', error)
      })
  }, [])

  const fazerLogin = async (event) => {
    event.preventDefault()
    setErroLogin('')
    setCarregandoLogin(true)
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'

    try {
      const response = await fetch(
        `${apiUrl}/home/loginUsuario`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, senha })
        }
      )

      if (!response.ok) {
        throw new Error('Usuário ou senha incorreta.')
      }

      setEmail('')
      setSenha('')
      window.history.pushState({}, '', '/home/dashboard')
      setTelaAtual('dashboard')
    } catch (error) {
      setErroLogin(error.message || 'Não foi possível fazer login.')
    } finally {
      setCarregandoLogin(false)
    }
  }

  const irParaCadastro = (event) => {
    event.preventDefault()
    setTelaAtual('cadastro')
  }

  const irParaSuporte = (event) => {
    event.preventDefault()
    setTelaAtual('suporte')
  }

  if (telaAtual === 'cadastro') {
    return <Cadastro voltarParaLogin={() => setTelaAtual('login')} />
  }

  if (telaAtual === 'dashboard') {
    return <DashBoard />
  }

  if (telaAtual === 'suporte') {
    return <SuporteIA voltarParaInicio={() => setTelaAtual('login')} />
  }

  return (
    <>
      <div className="position-absolute end-0 p-3 d-flex flex-column gap-2" style={{ top: '18px', zIndex: 2 }}>
        <a href="#suporte" className="suporte-link d-flex align-items-center gap-2 text-decoration-none" onClick={irParaSuporte}>
          <i className="bi bi-search"></i>
           <span>Suporte</span>
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
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="digite seu email"
              required
            />
            <div className="form-text">Nunca compartilharemos seu email com mais ninguém.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              placeholder="digite sua senha"
              required
            />
          </div>

          {erroLogin ? <div className="alert alert-danger">{erroLogin}</div> : null}

          <button type="submit" className="btn btn-primary" disabled={carregandoLogin}>
            {carregandoLogin ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </>
  )
}

export default App
