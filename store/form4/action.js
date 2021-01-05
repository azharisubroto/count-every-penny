import { FORM4 } from './type'

export const form4 = (data) => (dispatch) => {
  const payload = data

  return dispatch({
    type: FORM4,
    payload: payload
  })
}
