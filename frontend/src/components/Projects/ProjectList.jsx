import React, {Fragment, useEffect, useState} from 'react';
import {MDBDataTableV5} from 'mdbreact';
import './ProjectList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import defaultTable from '../../data/defaultTable';
import axios from "axios";
import config from "../../config/config"
import {useRecoilState} from "recoil";
import authenticationState from "../../atoms/authentication.atom";
import {errorNotification, offlineApiNotification, successNotification} from "../../helpers/notification.helper";

const ProjectList = () => {

    const [authentication, setAuthentication] = useRecoilState(authenticationState);
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState({});

    useEffect(() => {
        fetch()
    }, [])

    const fetch = () => {
        axios.get(config.BACKEND_URL + '/project', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + authentication
            }
        }).then((res) => {
            if(res?.data?.projects?.data?.projects) {
                const table = defaultTable;
                table.rows = [];
                res.data.projects.data.projects.forEach(project => {
                    table.rows.push({
                        id: project.id,
                        name: project.name,
                        description: project.description,
                        audit: 'this is an example',
                        creator: project.creator,
                        status: project.status,
                        jobs: project.jobsCount,
                        buttons: '<h2>Loading</h2>',
                    });
                })
                setProjects(table);
                setLoading(false)
                successNotification('Projects récupérés avec succès !')
            } else {
                errorNotification('Impossible de récupérer les projets !')
            }
        }).catch((fail) => {
            offlineApiNotification();
            console.error(fail)
        })
    }

    return (
        <Fragment>
            <div className='content'>
                <div className="title_content">
                <div className="title">
                    SAAGIE
                </div>        
                <h1>Liste de tous les projets Saggie</h1>
                <div className="content_import_btn">
                    <button className="BtnImp">Importer</button>
                </div>
                </div>
                <div className='content_table'>
                    <MDBDataTableV5
                        hover
                        entriesOptions={[5, 20, 25]}
                        entries={5}
                        pagesAmount={4}
                        data={projects}
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