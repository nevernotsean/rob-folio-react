import { SET_PROJECT_DATA, SET_ACTIVE_PROJECT_DATA } from './actions'

const DEFAULT_STATE = {
  winh: null,
  projectData: [],
  activeProjectData: [],
}

const setProjectData = (state, action) => {
  return Object.assign({}, state, { projectData: action.projectData })
}

const setActiveProjectData = (state, action) => {
  return Object.assign({}, state, {
    activeProjectData: action.activeProjectData,
  })
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case SET_PROJECT_DATA:
    return setProjectData(state, action)
  case SET_ACTIVE_PROJECT_DATA:
    return setActiveProjectData(state, action)
  default:
    return state
  }
}

export default rootReducer
