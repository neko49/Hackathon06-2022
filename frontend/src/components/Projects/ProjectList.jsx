import React, {Fragment} from 'react';
import './ProjectList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const defaultTable = import('../../data/defaultTable')

const ProjectList = () => {

    const [datatable, setDatatable] = React.useState(defaultTable);

    return (
        <Fragment>
            <p>Test</p>
        </Fragment>
    )
}

export default ProjectList;