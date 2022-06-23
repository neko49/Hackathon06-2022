const express = require('express');
const projectService = require('../services/project.service');
const envVarService = require('../services/envVar.service');
const appService = require('../services/app.service');
const pipelineService = require('../services/pipeline.service');
const JSZip = require('jszip');
const fs = require("fs");
const { v4: uuid } = require('uuid');
const {load} = require("debug");

function getAll(req, res, next) {
    const jwt = req.headers?.authorization
    return projectService.getAll(jwt).then(projects => {
        res.json({
            success: true,
            projects: projects?.data?.data?.projects
        });
    }).catch((fail) => {
        console.log(fail)
        res.json({
            success: false,
            message: fail
        });
    });
}


function getJobs(req, res) {
    const jwt = req.headers?.authorization
    return projectService.getJobs(jwt, req.params.id).then(jobs => {
        res.json({
            success: true,
            jobs: jobs?.data?.data?.jobs
        });
    }).catch((fail) => {
        console.log(fail)
        res.json({
            success: false,
            message: fail
        });
    });
}


function getEnvVars(req, res) {
    const jwt = req.headers?.authorization
    return envVarService.getAll(jwt, req.params.id).then(envVars => {
        res.json({
            success: true,
            envVars: envVars?.data?.data?.projectEnvironmentVariables
        });
    }).catch((fail) => {
        console.log(fail)
        res.json({
            success: false,
            message: fail
        });
    });
}


function getApps(req, res) {
    const jwt = req.headers?.authorization
    return appService.getAll(jwt, req.params.id).then(apps => {
        res.json({
            success: true,
            apps: apps?.data?.data?.labWebApps
        });
    }).catch((fail) => {
        console.log(fail)
        res.json({
            success: false,
            message: fail
        });
    });
}


function getPipelines(req, res) {
    const jwt = req.headers?.authorization
    return pipelineService.getAll(jwt, req.params.id).then(pipelines => {
        res.json({
            success: true,
            pipelines: pipelines?.data
        });
    }).catch((fail) => {
        console.log(fail)
        res.json({
            success: false,
            message: fail
        });
    });
}


async function backup(req, res) {
    const jwt = req.headers?.authorization
    const project = await projectService.getById(jwt, req.params.id).then(project => {
        return project.data?.data?.project
    }).catch((fail) => {
        console.log(fail)
        return null;
    })
    const jobs = await projectService.getJobs(jwt, req.params.id).then(jobs => {
        return jobs.data?.data?.jobs
    }).catch((fail) => {
        console.log(fail)
        return null;
    });
    const envVars = await envVarService.getAll(jwt, req.params.id).then(envVars => {
        return envVars.data?.data?.projectEnvironmentVariables
    }).catch((fail) => {
        console.log(fail)
        return null;
    });
    const apps = await appService.getAll(jwt, req.params.id).then(apps => {
        return apps.data?.data?.labWebApps
    }).catch((fail) => {
        console.log(fail)
        return null;
    });
    const pipelines = await pipelineService.getAll(jwt, req.params.id).then(pipelines => {
        return pipelines.data?.data?.pipelines
    }).catch((fail) => {
        console.log(fail)
        return null;
    });
    const data = {
        project,
        jobs: jobs,
        envVars: envVars,
        apps: apps,
        pipelines: pipelines
    };

    const UUID = uuid();
    const compressed = JSON.stringify(data);
    await fs.writeFileSync('storage/' + req.params.id + '.json', compressed)
    const loadedFile = await fs.readFileSync('storage/' + req.params.id + '.json')
    res.set('Content-Type', 'application/json')
    res.set('Content-Disposition', 'attachment; filename=' + req.params.id + '.json');
    res.set('Content-Length', loadedFile.length);
    res.end(loadedFile, 'binary');
}

module.exports = {
    getAll,
    getJobs,
    getEnvVars,
    getApps,
    getPipelines,
    backup
}