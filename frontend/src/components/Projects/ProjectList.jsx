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
            <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={defaultTable} fullPagination />;
        </Fragment>
    )
}

export default ProjectList;