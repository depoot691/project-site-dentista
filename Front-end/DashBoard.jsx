import { useEffect, useState } from 'react'
import './Dashboard.css'

function Dashboard() {
  const [status, setStatus] = useState('Carregando dashboard...')

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'

    fetch(`${apiUrl}/home/dashboard`)
      .then(async (response) => {
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Não foi possível carregar o dashboard.')
        }

        setStatus(data.status)
      })
      .catch((error) => {
        setStatus(error.message || 'Não foi possível carregar o dashboard.')
      })
  }, [])

  return (
    <div className="dashboard-page">

<header data-bs-theme="dark">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>

            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button
                className="btn btn-outline-primary dashboard-search-button"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>







    
    <main>
      <div className="container pt-5">
        <p>{status}</p>
      </div>

      <div
        id="myCarousel"
        className="carousel slide dashboard-carousel"
        data-bs-ride="carousel"
      >
      
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"

          
        ></button>

        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>

        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>


      <div className="carousel-inner">

        <div className="carousel-item active">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="100%"
              height="100%"
              fill="var(--bs-secondary-color)"
            />
          </svg>

          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>

              <p className="opacity-75">
                Some representative placeholder content for the first slide
                of the carousel.
              </p>

              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Sign up today
                </a>
              </p>
            </div>
          </div>
        </div>


        <div className="carousel-item">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="100%"
              height="100%"
              fill="var(--bs-secondary-color)"
            />
          </svg>

          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>

              <p>
                Some representative placeholder content for the second slide.
              </p>

              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Leia mais
                </a>
              </p>
            </div>
          </div>
        </div>


        <div className="carousel-item">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="100%"
              height="100%"
              fill="var(--bs-secondary-color)"
            />
          </svg>

          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>

              <p>
                Some representative placeholder content for the third slide.
              </p>

              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  navegar pela galeria
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>


      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>

        <span className="visually-hidden">
          Previous
        </span>
      </button>


      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>

        <span className="visually-hidden">
          Next
        </span>
      </button>

      </div>

      <section className="container marketing py-5">
        <div className="row g-4 text-center">
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clínica odontológica">
              <title>Clínica odontológica</title>
              <rect width="100%" height="100%" fill="#6ea8fe" />
            </svg>
            <h2 className="fw-normal mt-3">Equipamentos</h2>
            <p>Equipamentos e produtos odontologicos de qualidade para sua clínica.</p>
            <p><a className="btn btn-secondary" href="#clinica">Ver detalhes</a></p>
          </div>

          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Especialidades">
              <title>Especialidades</title>
              <rect width="100%" height="100%" fill="#6ea8fe" />
            </svg>
            <h2 className="fw-normal mt-3">Especialidades</h2>
            <p>Conheça os tratamentos disponíveis para manter sua saúde bucal em dia.</p>
            <p><a className="btn btn-secondary" href="#especialidades">Ver detalhes</a></p>
          </div>

          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Agendamento">
              <title>Agendamento</title>
              <rect width="100%" height="100%" fill="#6ea8fe" />
            </svg>
            <h2 className="fw-normal mt-3">Agendamento</h2>
            <p>Escolha o melhor horário e agende sua consulta de forma simples.</p>
            <p><a className="btn btn-secondary" href="#agendamento">Ver detalhes</a></p>
          </div>
        </div>

        <hr className="featurette-divider my-5" />

        <div className="row featurette align-items-center" id="clinica">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Cuidado que começa no atendimento.</h2>
            <p className="lead">Nossa equipe oferece uma experiência acolhedora e tratamentos pensados para cada paciente.</p>
          </div>
          <div className="col-md-5">
            <div className="featurette-placeholder" aria-label="Imagem da clínica"></div>
          </div>
        </div>

        <hr className="featurette-divider my-5" />

        <div className="row featurette align-items-center" id="especialidades">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Tratamentos para todas as fases.</h2>
            <p className="lead">Da prevenção à estética, você encontra acompanhamento odontológico completo.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <div className="featurette-placeholder" aria-label="Imagem de tratamento odontológico"></div>
          </div>
        </div>
      </section>
    </main>

    </div>
  );
}

export default Dashboard;