import { FORMEBOOK } from './type'

export const formEbook = (data) => (dispatch) => {
  const payload = data

  return dispatch({
    type: FORMEBOOK,
    payload: payload
  })
}
