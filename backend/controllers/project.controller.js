const express = require('express');
const projectService = require('../services/project.service');

function getAll(req, res, next) {
    const jwt = req.headers?.authorization
    return projectService.getAll(jwt).then(projects => {
        res.json({
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

module.exports = {
    getAll,
    getJobs
}