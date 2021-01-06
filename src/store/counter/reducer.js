import { INCREMENT_COUNTER, DECREMENT_COUNTER, FORM_COUNTER } from './type'

const initialState = {
  server: '',
  client: '',
  counter: 0,
  form: {
    step_passed: 1,
    covertype: 'none',
    postcode: '',
    age: '',
    fund: 'none',
    hospitalCovers: ['private_hospital_shared'],
    extraCovers: [],
    name: '',
    phone: '',
    email: ''
  }
}

// Creating my reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: action.payload }
    case DECREMENT_COUNTER:
      return { ...state, counter: action.payload }
    case FORM_COUNTER:
      return { ...state, form: action.payload }
    default:
      return state
  }
}
