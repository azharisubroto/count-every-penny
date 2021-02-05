import { firebase } from '@firebase/app'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB8IrKreJZDn6OF3bQE02BoS4hNXt_tHY0',
  authDomain: 'count-every-penny-blog.firebaseapp.com',
  projectId: 'count-every-penny-blog',
  storageBucket: 'count-every-penny-blog.appspot.com',
  messagingSenderId: '156763202345',
  appId: '1:156763202345:web:97d85eaecd08521a504d38',
  measurementId: 'G-NFHFNR6LN1'
}
try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const fire = firebase
export default fire
