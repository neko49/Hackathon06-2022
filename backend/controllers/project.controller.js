const express = require('express');
const projectService = require('../services/project.service');

function getAll(req, res, next) {
    projectService.getAll().then(projects => {
        res.json({
            projects: projects
        });
    }).catch(next => {
        res.sendStatus(404);
    });
}

module.exports = {
    getAll,
}