const express = require('express');
const projectService = require('../services/project.service');
const envVarService = require('../services/envVar.service');

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

module.exports = {
    getAll,
    getJobs,
    getEnvVars
}