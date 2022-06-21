import React, { Fragment } from 'react'

function Recherche() {
  return (
    <Fragment>
        <title>SAAGIE</title>
        <div>Recherche</div>

        <DataGrid
  columns={[ 
    {
      field: 'Nom de projet',
      headerName: 'Nom de projet',
      editable: true,
      sortable: true,
      filterable: true,
    },
    
  ]}
  checkboxSelection
  disableSelectionOnClick
  pagination
/>
    </Fragment>
  )
}

export default Recherche