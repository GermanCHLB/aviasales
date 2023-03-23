import { addErrorAction, getDataAction, getSearchIdAction, removeErrorAction, startLoadingAction } from '../reducer'

export const fetchSearchId = () => {
  return (dispatch) => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((response) => response.json())
      .then((json) => dispatch(getSearchIdAction(json)))
      .catch((err) => {
        alert('Ошибка, перезагрузите страницу')
        throw new Error(err)
      })
  }
}

export const fetchTickets = (searchId) => {
  return (dispatch) => {
    dispatch(startLoadingAction())
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(removeErrorAction())
        dispatch(getDataAction(json))
      })
      .catch((error) => {
        dispatch(addErrorAction())
        throw new Error(error)
      })
  }
}
