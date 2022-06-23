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
import {Button} from "reactstrap";
import fileDownload from "js-file-download";
import Logout from "../Logout";

const ProjectList = () => {

    const [authentication, setAuthentication] = useRecoilState(authenticationState);
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const handleDownload = async (e) => {
        e.preventDefault()
        await axios.get(config.BACKEND_URL + "/project/" + e.target.id + "/backup", {
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + authentication
            }
        }).then(async (res) => {
            if (res?.data) {
                console.log(res.data)
                await fileDownload(JSON.stringify(res.data), e.target.id + ".json");
                successNotification('Projet téléchargé avec succès !')
            } else {
                errorNotification('Impossible de télécharger le projet !')
            }
        }).catch((fail) => {
            offlineApiNotification();
            console.error(fail)
        })
    }

    const fetch = () => {
        axios.get(config.BACKEND_URL + '/project', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + authentication
            }
        }).then((res) => {
            if (res?.data?.projects?.data?.projects) {
                res.data.projects.data.projects.forEach(project => {
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

    useEffect(() => {
        fetch()
    }, [])

    return (
        <Fragment>
            <div className='content'>
                <div className="title_content">
                    <div className="title">
                        SAAGIE
                    </div>
                    <h1>Liste de tous les projets Saggie</h1>
                    <div className="content_import_btn">
                        <Button color="warning">Importer</Button>
                        <Logout/>
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
                            <th>Copier/Backup</th>
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
                                        <td>
                                            <Button id={project.id} onClick={handleDownload} size="small" color="primary">Backup</Button>
                                            <Button id={project.id} disabled={true} size="small" color="secondary">Clone</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ProjectList;