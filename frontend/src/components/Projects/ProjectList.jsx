import React, {Fragment, useEffect, useState} from 'react';
import './ProjectList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import axios from "axios";
import config from "../../config/config"
import {useRecoilState} from "recoil";
import authenticationState from "../../atoms/authentication.atom";
import {errorNotification, offlineApiNotification, successNotification} from "../../helpers/notification.helper";

const ProjectList = () => {

    const [authentication, setAuthentication] = useRecoilState(authenticationState);
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

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
            if (res?.data?.projects?.data?.projects) {
                res.data.projects.data.projects.forEach(project => {
                    //setProjects([...projects, project])
                    projects.push(project)
                })
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

                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Creator</th>
                            <th>NB jobs</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            projects?.map((project, key) => {
                                return (
                                    <tr>
                                        <td>#{project.id}</td>
                                        <td>{project.name}</td>
                                        <td>{project.description}</td>
                                        <td>{project.creator}</td>
                                        <td>{project.jobsCount}</td>
                                        <td>{project.status}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>

                    {/* <MDBDataTableV5
                        hover
                        entriesOptions={[5, 20, 25]}
                        entries={5}
                        pagesAmount={4}
                        data={projects}
                        pagingTop
                        searchTop
                        searchBottom={false}
                        barReverse
                    />  */}
                </div>
            </div>
        </Fragment>
    )
}

export default ProjectList;