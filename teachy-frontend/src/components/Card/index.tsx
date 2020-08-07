import React from 'react'
import Link from 'next/link'

const Card = () => {
  return (
    <React.Fragment>
      <article className='card-container'>
        <div className='card-header'>
          <img src='https://avatars0.githubusercontent.com/u/20340261?s=460&u=b4dcb566ab84c0268a210f6a4c1bbeb903397d7d&v=4' alt='Foto do perfil' />
          <div>
            <p>
              <strong>Thiago Silva</strong>
            </p>
            <span>Inglês</span>
          </div>
        </div>
        <p className='card-body'>
          My name is Thiago Silva and I'm from Brazil brazil. I have been working as a front-end developer since 2015 and
          I am currently studying software engineering at Metrópole Digital Institute at the Federal University of Rio Grande do Norte.
          I have my space on GitHub, where I make it as my personal code lab, sharing many things there :)
        </p>
        <div className='card-footer'>
          <div className='card-footer-container'>
            <p>R$ / hora</p>
            <span><strong>100,00</strong></span>
          </div>
          <button className='btn-link' title='Clique para enviar uma mensagem'>
            <img src='/img/icons/whatsapp.svg' alt='Logo do WhatsApp' />
            <Link href='#'>
              <a target='_blank' rel='noopener noreferrer'>WhatsApp</a>
            </Link>
          </button>
        </div>
      </article>
    </React.Fragment>
  )
}

export default Card
