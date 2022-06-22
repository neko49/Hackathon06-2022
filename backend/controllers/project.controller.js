const express = require('express');
const projectService = require('../services/project.service');
const envVarService = require('../services/envVar.service');
const appService = require('../services/app.service');
const pipelineService = require('../services/pipeline.service');
const JSZip = require('jszip');
const fs = require("fs");
const zip = new JSZip();

function getAll(req, res, next) {
    const jwt = req.headers?.authorization
    return projectService.getAll(jwt).then(projects => {
        res.json({
            success: true,
            projects: projects?.data
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
            jobs: jobs?.data
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
            envVars: envVars?.data
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
            apps: apps?.data
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
    const jobs = await envVarService.getAll(jwt, req.params.id).then(jobs => {
        return jobs.data
    }).catch((fail) => {
        console.log(fail)
        return null;
    });
    const envVars = await envVarService.getAll(jwt, req.params.id).then(envVars => {
        return envVars.data
    }).catch((fail) => {
        console.log(fail)
        return null;
    });
    const apps = await appService.getAll(jwt, req.params.id).then(apps => {
        return apps.data
    }).catch((fail) => {
        console.log(fail)
        return null;
    });
    const pipelines = await pipelineService.getAll(jwt, req.params.id).then(pipelines => {
        return pipelines.data
    }).catch((fail) => {
        console.log(fail)
        return null;
    });
    const data = {
        jobs: jobs,
        envVars: envVars,
        apps: apps,
        pipelines: pipelines
    };
    const compressed = zip.file("data.json", JSON.stringify(data));
    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
        .pipe(fs.createWriteStream("data.zip"));
    res.setHeader('Content-Length', compressed.length);
    res.write(compressed, 'binary');
    res.end();
}

module.exports = {
    getAll,
    getJobs,
    getEnvVars,
    getApps,
    getPipelines,
    backup
}