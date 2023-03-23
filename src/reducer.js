const defaultState = {
  activeTab: 'Самый дешёвый',
  sort: {
    all: true,
    noStops: true,
    oneStop: true,
    twoStops: true,
    threeStops: true,
  },
  data: {
    tickets: [],
    stop: false,
  },
  searchId: '',
  error: false,
  loading: true,
}

const CHANGE_TAB = 'CHANGE_TAB'
const TOGGLE_FILTERS = 'TOGGLE_FILTERS'
const GET_DATA = 'GET_DATA'
const GET_SEARCH_ID = 'GET_SEARCH_ID'
const START_LOADING = 'START_LOADING'
const STOP_LOADING = 'STOP_LOADING'
const ADD_ERROR = 'ADD_ERROR'
const REMOVE_ERROR = 'REMOVE_ERROR'

const toggleFilters = (state, action) => {
  const newState = { ...state.sort }

  if (action.payload === 'all') {
    Object.keys(newState).map((key) => {
      newState[key] = !state.sort.all
    })
  } else {
    newState[action.payload] = !newState[action.payload]
    newState['all'] = Object.values(newState).slice(1).indexOf(false) === -1
  }
  return { ...state, sort: newState }
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return { ...state, activeTab: action.payload }

    case TOGGLE_FILTERS:
      return toggleFilters(state, action)

    case GET_DATA:
      return {
        ...state,
        data: { tickets: [...state.data.tickets, ...action.payload.tickets], stop: action.payload.stop },
        loading: false,
      }

    case GET_SEARCH_ID:
      return { ...state, searchId: action.payload.searchId }

    case START_LOADING:
      return { ...state, loading: true }

    case STOP_LOADING:
      return { ...state, loading: false }

    case ADD_ERROR:
      return { ...state, loading: false, error: true }

    case REMOVE_ERROR:
      return { ...state, error: false }

    default:
      return state
  }
}

export const changeTabAction = (payload) => ({ type: CHANGE_TAB, payload })
export const toggleFiltersAction = (payload) => ({ type: TOGGLE_FILTERS, payload })
export const getDataAction = (payload) => ({ type: GET_DATA, payload })
export const getSearchIdAction = (payload) => ({ type: GET_SEARCH_ID, payload })
export const startLoadingAction = () => ({ type: START_LOADING })
export const stopLoadingAction = () => ({ type: STOP_LOADING })
export const addErrorAction = () => ({ type: ADD_ERROR })
export const removeErrorAction = () => ({ type: REMOVE_ERROR })
