module.exports  = {
    columns: [
        {
          label: 'Nom de projet',
          field: 'Nom_de_projet',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Nom de projet',
          },
        },
        {
          label: 'Audit',
          field: 'Audit',
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
          Nom_de_projet: 'Projet test',
          Audit: 'Version 1.1',
          Copier_Backup: 'Edinburgv',
        },
      ]
    }