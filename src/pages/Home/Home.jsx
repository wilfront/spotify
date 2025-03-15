import React from 'react'
import './Home.css'
import { LuLibrary } from "react-icons/lu";
import { BiPlus } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import capa1 from '../../assets/capa1.jpeg'
import capa2 from '../../assets/capa2.jpeg'
import capa3 from '../../assets/capa3.jpg'
import capa4 from '../../assets/capa4.jpg'
import capa5 from '../../assets/capa5.jpeg'
import capa6 from '../../assets/capa6.jpg'
import capa7 from '../../assets/capa1.jpeg'
import capa8 from '../../assets/capa2.jpeg'
import capa9 from '../../assets/capa3.jpg'
import capa10 from '../../assets/capa4.jpg'
import capa11 from '../../assets/capa5.jpeg'
import capa12 from '../../assets/capa6.jpg'
import capa13 from '../../assets/capa1.jpeg'
import capa14 from '../../assets/capa2.jpeg'
import capa15 from '../../assets/capa3.jpg'

function Home() {
  return (
    <div className="container">
      <div className='home'>
        <div className="left">
          <div className="library-mais">
            <div className="library">
              <LuLibrary />
              <h6>Sua Biblioteca</h6>
            </div>
            <div className="mais">
              <BiPlus />
            </div>
          </div>
          <div className="caixa-fundo">
            <div className="grid-caixa">
              <div className="caixa-1">
                <h1>Crie sua primeira playlist</h1>
                <p>É facil vamos te ajudar.</p>
                <button className='criar'>Criar playlist</button>
              </div>
              <div className="caixa-2">
                <h1>Que tal seguir um novo podcast?</h1>
                <p>Avisaremos você sobre novos episódios.</p>
                <button className='explore'>Explore podcasts</button>
              </div>
            </div>
          </div>
          <div className="caixa-paginas">
            <ul className="paginas">
              <li><NavLink className='nav' to='/'>Legal</NavLink></li>
              <li><NavLink className='nav'>Segurança e Centro de privacidade</NavLink></li>
              <li><NavLink className='nav'>Política de privacidade</NavLink></li>
              <li><NavLink className='nav'>Cookies</NavLink></li>
              <li><NavLink className='nav'>Sobre anúncios</NavLink></li>
              <li><NavLink className='nav'>Acessibilidade</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="right">
          <h1>Artistas populares</h1>
          <div className="scrool">
            <div className="grid-list">
              <div className="card">
                <img className='img1' src={capa1} width='100%' height='150px' alt="capa1" />
                <h2>Henrique e Juliano</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img className='img2' src={capa2} width='100%' height='150px' alt="capa2" />
                <h2>MC Tuto</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img className='img3' src={capa3} width='100%' height='150px' alt="capa3" />
                <h2>Jorge & Matheus</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img className='img4' src={capa4} width='100%' height='150px' alt="capa4" />
                <h2>Grupo Menos é Mais</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img className='img5' src={capa5} width='100%' height='150px' alt="capa5" />
                <h2>Matheus & Kauan</h2>
                <p>Artista</p>
              </div>
            </div>
            <div className="singles">
              <h1>Singles e álbuns que todo mundo gosta</h1>
            </div>
            <div className="grid-list2">
              <div className="card">
                <img src={capa6} alt="capa6" width='100%' height='150px' alts='capa6' />
                <h2>Zé neto & Cristiano</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img src={capa7} alt="capa7" width='100%' height='150px' alts='capa7' />
                <h2>Henrique & Juliano</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img src={capa8} alt="capa8" width='100%' height='150px' alts='capa8' />
                <h2>MC Tuto</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img src={capa9} alt="capa9" width='100%' height='150px' alts='capa9' />
                <h2>Jorge & Matheus</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img src={capa10} alt="capa10" width='100%' height='150px' alts='capa10' />
                <h2>Grupo Menos é Mais</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img src={capa11} alt="capa11" width='100%' height='150px' alts='capa11' />
                <h2>Matheus & Kauan</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img src={capa12} alt="capa12" width='100%' height='150px' alts='capa12' />
                <h2>Zé neto & Cristiano</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img src={capa13} alt="capa13" width='100%' height='150px' alts='capa13' />
                <h2>Henrique e Juliano</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img src={capa14} alt="capa14" width='100%' height='150px' alts='capa14' />
                <h2>MC Tuto</h2>
                <p>Artista</p>
              </div>
              <div className="card">
                <img src={capa15} alt="capa15" width='100%' height='150px' alts='capa15' />
                <h2>Jorge & Matheus</h2>
                <p>Artista</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
