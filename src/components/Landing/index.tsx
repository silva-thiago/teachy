import React from 'react'
import Link from 'next/link'

const Landing = () => {
  return (
    <React.Fragment>
      <div className='page-landing'>
        <div className='page-landing-content'>
          <div className='page-landing-brand text-center'>
            <img className='logo' src='/img/logo.svg' alt='Logotipo do Teachy' />
            <p>Sua plataforma de estudos online</p>
          </div>
          <img className='hero-image' src='/img/learning.svg' alt='Desenho representativo da plataforma' />
          <div className='btn-group'>
            <Link href=''>
              <a className='btn-link study' href=''>
                <img src='/img/icons/book.svg' alt='Ícone de um livro' />
                Aluno
              </a>
            </Link>
            <Link href=''>
              <a className='btn-link teach' href=''>
                <img src='/img/icons/board.svg' alt='Ícone de um quadro escolar' />
                Tutor
              </a>
            </Link>
          </div>
          <span className='total-connections'>
            <img src='/img/icons/purple-heart.svg' alt='Ícone de coração roxo' />
            Total de 200 conexões já realizadas
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Landing
