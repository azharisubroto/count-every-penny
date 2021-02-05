import { FORMEBOOK } from './type'

const initialState = {
  server: '',
  client: '',
  form: {
    lifestage: 'none',
    postcode: '',
    name: '',
    phone: '',
    email: ''
  }
}

// Creating my reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FORMEBOOK:
      return { ...state, form: action.payload }
    default:
      return state
  }
}
