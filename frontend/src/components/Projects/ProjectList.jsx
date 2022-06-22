import React, {Fragment} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import './ProjectList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import defaultTable from '../../data/defaultTable';



const ProjectList = () => {

    const [datatable, setDatatable] = React.useState(defaultTable);
    console.log(defaultTable)
    return (
        <Fragment>
            <div className='content'>
                <div className="title_content">
                <div class="title">
                    SAAGIE
                </div>        
                <h1>Liste de tous les projets Saggie</h1>
                <div class="content_import_btn">
                    <button class="BtnImp">Importer</button> 
                </div>
                </div>
                <div className='content_table'>
                    <MDBDataTableV5
                        hover
                        entriesOptions={[5, 20, 25]}
                        entries={5}
                        pagesAmount={4}
                        data={defaultTable}
                        pagingTop
                        searchTop
                        searchBottom={false}
                        barReverse
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default ProjectList;