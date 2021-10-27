import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import firebaseConfig from "lib/firebaseConfig"

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :
firebase.app()

const db = app.firestore()
const auth = app.auth()
const storage= app.storage()
const provider = new firebase.auth.GoogleAuthProvider()
const serverTimeStamp = firebase.firestore.FieldValue.serverTimeStamp()
const increment = firebase.firestore.FieldValue.increment

export {auth, storage, provider, serverTimeStamp, increment}

export default db
