import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import banner from './assets/dentista.png'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

return (
  <>

  <div className="container-fluid p-0">
    <img 
        src={banner}
        className="img-fluid w-100"
        alt="banner"
        style={{ height: "500px", objectFit: "cover" }}
    />
  </div>

   <div className="d-flex justify-content-center align-items-center min-vh-100">
    <form className='w-50 mx-3'>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email 
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder='digite seu email'
        />
        <div className="form-text">
          Nunca compartilharemos seu email com mais ninguém.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder='digite sua senha'
        />
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
