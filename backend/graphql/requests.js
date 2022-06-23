module.exports = {
    PROJECTS_MINIMAL: {
        query: `
            query{
              projects{
                id,
                name,
                creator,
                description,
                jobsCount,
                status
              }
            }
        `
    },

    PROJECT_INFORMATIONS: (projectId) => {
        return {
            query: `
            query{
              project(id: "` + projectId + `"){
                id,
                name,
                creator,
                description,
                jobsCount,
                status
              }
            }
        `
        }
    },

    PROJECT_JOBS: (projectId) => {
        return {
            query: `
            query{
              jobs(projectId: "` + projectId + `"){
                id,
                name,
                technology {
                  id,
                  label
                }
              }
            }
                `
        }
    },

    PROJECT_ENV_VARS: (projectId) => {
        return {
            query: `
            query{
                projectEnvironmentVariables(projectId: "` + projectId + `"){
                        id,
                        name,
                        scope,
                        value,
                        description,
                        isPassword
                    }
                }
            `
        }
    },

    PROJECT_APPS: (projectId) => {
        return {
            query: `
            query{
                labWebApps(projectId: "` + projectId + `"){
                        id,
                        name,
                        description,
                        creationDate,
                        technology{
                            id,
                            __typename
                        },
                        instances{
                            id,
                            status,
                            statusDetails,
                            startTime,
                            endTime,
                            __typename                            
                        },
                        versions{
                            isCurrent,
                            exposedPorts{
                                name,
                                port,
                                isAuthenticationRequired,
                                __typename
                            },
                            __typename,
                        }
                    }
                }
            `
        }
    },

    PROJECT_PIPELINES: (projectId) => {
        return {
            query: `
            query{
                pipelines(projectId: "` + projectId + `"){
                        id,
                        name,
                        description,
                        alerting{
                            emails,
                            loginEmails{
                                login,
                                email
                            },
                            statusList
                        },
                        pipelineInstanceCount,
                        instances{
                            id,
                            status,
                            startTime,
                            endTime
                        },
                        creationDate,
                        creator,
                        isScheduled,
                        cronScheduling,
                        scheduleStatus,
                        scheduleTimezone,
                        isLegacyPipeline
                }
            }
            `
        }
    }
}