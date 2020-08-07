import React from 'react'
import Card from '../Card'

import PageHeader from '../PageHeader'

const ListTutors = () => {
  return (
    <React.Fragment>
      <div className='heading container'>
        <PageHeader display='Estes são os tutores disponíveis'>
          <form className='search-tutors'>
            <div className='form-group'>
              <label htmlFor='subject'>Matéria</label>
              <input type='text' id='subject' />
            </div>
            <div className='form-group'>
              <label htmlFor='day_week'>Dia da semana</label>
              <input type='text' id='day_week' />
            </div>
            <div className='form-group'>
              <label htmlFor='time'>Hora</label>
              <input type='text' id='time' />
            </div>
          </form>
        </PageHeader>

        <main>
          <div className='container'>
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default ListTutors
