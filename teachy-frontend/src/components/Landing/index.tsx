import React from 'react'
import Link from 'next/link'

const Landing = () => {
  return (
    <React.Fragment>
      <div className='page-landing container'>
        <div className='page-landing-content'>
          <div className='page-landing-brand text-center'>
            <img className='logo' src='/img/logo.svg' alt='Logotipo do Teachy' />
            <p>Sua plataforma de estudos online</p>
          </div>
          <img className='hero-image' src='/img/learning.svg' alt='Desenho representativo da plataforma' />
          <div className='btn-group'>
            <Link href={{ pathname: '/list-tutors', query: { name: 'available' } }}>
              <a className='btn-link study' title='Clique para procurar um tutor'>
                <img src='/img/icons/book.svg' alt='Ícone de um livro' />
                Estudar
              </a>
            </Link>
            <Link href={{ pathname: '/form-tutors', query: { name: 'aplly-to-teach' } }}>
              <a className='btn-link teach' title='Clique para se candidatar como tutor'>
                <img src='/img/icons/board.svg' alt='Ícone de um quadro escolar' />
                Ensinar
              </a>
            </Link>
          </div>
          <span className='total-connections'>
            <img src='/img/icons/purple-heart.svg' alt='Ícone de um coração roxo' />
            Total de 200 conexões já realizadas
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Landing
