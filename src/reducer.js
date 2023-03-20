const defaultState = {
  activeTab: 'Самый дешёвый',
  sort: {
    all: false,
    noStops: false,
    oneStop: false,
    twoStops: false,
    threeStops: false,
  },
}

const CHANGE_TAB = 'CHANGE_TAB'
const TOGGLE_FILTERS = 'TOGGLE_FILTERS'

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
    case 'CHANGE_TAB':
      return { ...state, activeTab: action.payload }

    case 'TOGGLE_FILTERS':
      return toggleFilters(state, action)
    default:
      return state
  }
}

export const changeTabAction = (payload) => ({ type: CHANGE_TAB, payload })
export const toggleFiltersAction = (payload) => ({ type: TOGGLE_FILTERS, payload })
