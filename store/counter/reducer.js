import { INCREMENT_COUNTER, DECREMENT_COUNTER, FORM_COUNTER } from './type'

const initialState = {
  server: '',
  client: '',
  counter: 0,
  form: {
    covertype: 'none',
    postcode: '',
    age: '',
    fund: 'none',
    hospital_covers: '',
    extra_covers: '',
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
