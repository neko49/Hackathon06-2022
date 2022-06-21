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
                  __typename
                }
              }
            }
                `
        }
    }
}