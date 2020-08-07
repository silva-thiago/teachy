import React from 'react'
import { useRouter } from 'next/router'

interface DisplayProps {
  display: string
}

const PageHeader: React.FC<DisplayProps> = (props) => {
  const router = useRouter()

  return (
    <React.Fragment>
      <header>
        <div className='content'>
          <nav className='navbar'>
            {/* <span>
              <img src='/img/icons/arrow-left.svg' alt='Seta à esquerda para voltar' />
            </span> */}
            <div className='navbar-brand' onClick={() => { router.back() }}>
              <img className='logo' src='/img/logo.svg' alt='Logotipo do Teachy' title='Clique para voltar na página inicial' />
            </div>
          </nav>
          <div className='display'>
            <strong>{props.display}</strong>
          </div>
          {props.children}
        </div>
      </header>
    </React.Fragment>
  )
}

export default PageHeader
