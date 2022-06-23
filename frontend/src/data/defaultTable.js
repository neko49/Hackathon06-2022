module.exports  = {
    columns: [
        {
          label: 'name',
          field: 'name',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'name',
          },
        },
        {
          label: 'description',
          field: 'description',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'description',
          },
        },
        {
          label: 'audit',
          field: 'audit',
          width: 270,
        },
        {
          label: 'Nombre de jobs',
          field: 'jobs',
          width: 270,
        },
        {
          label: 'Copier/Backup',
          field: 'Copier_Backup',
          width: 200,
        },    
      ],
      rows: [
        {
          name: 'Projet test',
          audit: 'Version 1.1',
          buttons: '',
        },
      ]
    }