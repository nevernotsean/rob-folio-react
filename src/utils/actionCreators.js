import {SET_PROJECT_DATA, SET_ACTIVE_PROJECT_DATA} from './actions'
import slugify from '../utils/slugify'

export function setProjectData(projectData) {
  return {type: SET_PROJECT_DATA, projectData: projectData}
}

export function setActiveProjectData(activeProjectData) {
  return {type: SET_ACTIVE_PROJECT_DATA, activeProjectData: activeProjectData}
}

export function getActiveProjectData(projectSlug) {
  return function(dispatch, getState) {
    const activeProject = getState().projectData.filter(project => {
      let testSlug = project.fields.projectSlug
      testSlug = !testSlug ? slugify(project.fields.title) : testSlug
      return testSlug === projectSlug
    })
    if (
      activeProject.length &&
      activeProject[0].fields !== getState().activeProjectData
    ) {
      dispatch(setActiveProjectData(activeProject[0].fields))
    }
  }
}
