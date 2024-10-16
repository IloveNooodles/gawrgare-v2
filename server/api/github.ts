import { Octokit } from "octokit"
import { projectQueryParamSchema } from "~/types/query"

export default defineEventHandler(async (event) => {
  event.node.res.setHeader('Content-Type', 'application/json');

  let page = 1;
  let per_page = 15;
  try {
    let query = await getValidatedQuery(event, projectQueryParamSchema.parse)
    page = parseInt(query.page || '1')
    per_page = parseInt(query.per_page || '15')
  } catch (err) {
    setResponseStatus(event, 400, "Bad Request")
    return {
      message: `page should be an integer`
    }
  }

  const octokit = new Octokit()
  const repositories = await octokit.rest.repos.listForUser({
    username: "ILoveNooodles",
    per_page: per_page,
    page: page,
    sort: "updated",
    direction: "desc"
  })
  const projects = repositories.data
  const mapProjects = projects.map((project) => {
    return {
      "id": project.id,
      "name": project.name,
      "private": project.private,
      "description": project.description,
      "created_at": project.created_at,
      "updated_at": project.updated_at,
      "pushed_at": project.pushed_at,
      "svn_url": project.svn_url,
      "language": project.language,
      "license": project.license?.name,
      "topics": project.topics,
      "visibility": project.visibility,
      "stargazers_count": project.stargazers_count,
      "forks": project.forks,
      "open_issues": project.open_issues,
      "watchers": project.watchers,
    }
  })

  return {
    data: mapProjects
  }
})
