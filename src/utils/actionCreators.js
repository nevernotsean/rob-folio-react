import { SET_PROJECT_DATA, SET_ACTIVE_PROJECT_DATA } from './actions'

export function setProjectData(projectData) {
  return { type: SET_PROJECT_DATA, projectData: projectData }
}

export function setActiveProjectData(activeProjectData) {
  return { type: SET_ACTIVE_PROJECT_DATA, activeProjectData: activeProjectData }
}
