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
    }
}