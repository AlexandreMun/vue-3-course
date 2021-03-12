import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDJ9jCN9hMKoww8hL92YMoZ2WkeEUv4jcw',
  authDomain: 'vue-form-course.firebaseapp.com',
  projectId: 'vue-form-course',
  storageBucket: 'vue-form-course.appspot.com',
  messagingSenderId: '942126295835',
  appId: '1:942126295835:web:defd1b5673ea941bff41be'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.database()
export const chatsRef = db.ref('chats')

export default firebase
