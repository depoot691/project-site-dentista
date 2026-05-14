import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

return (
  <>
      <div className='container py-4'>
        <h1 className="text-primary">Dentista</h1>

        <button className='btn btn-success mt-3'>clique aq</button>
      </div>

   <div className="d-flex justify-content-center align-items-center min-vh-100">
    <form className='w-50 mx-3'>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
        />
        <div className="form-text">
          We'll never share your email with anyone else.
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
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          lembre-me
        </label>
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
