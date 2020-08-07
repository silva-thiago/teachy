import React from 'react'

import PageTitle from '../components/PageTitle'
import ListTutors from '../components/ListTutors'

const ListingTutors = () => {
  return (
    <React.Fragment>
      <PageTitle title=' | Lista de tutores' />
      <div id='root'>
        <ListTutors />
      </div>
    </React.Fragment>
  )
}

export default ListingTutors
