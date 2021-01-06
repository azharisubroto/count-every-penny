import { INCREMENT_COUNTER, DECREMENT_COUNTER, FORM_COUNTER } from './type'

export const incrementCounter = (incrementState) => (dispatch) => {
  const increase = incrementState + 1

  return dispatch({
    type: INCREMENT_COUNTER,
    payload: increase
  })
}

export const decrementCounter = (decrementState) => (dispatch) => {
  const decrease = decrementState - 1

  return dispatch({
    type: DECREMENT_COUNTER,
    payload: decrease
  })
}

export const formCounter = (data) => (dispatch) => {
  const payload = data

  return dispatch({
    type: FORM_COUNTER,
    payload: payload
  })
}
