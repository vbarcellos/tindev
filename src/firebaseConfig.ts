import firebase from 'firebase'
import {localLogin} from './State'

const config = {
    apiKey: "AIzaSyAj1-ax129DEvrtPttkGBp6ST42GTnDL-U",
    authDomain: "tindev-7aa57.firebaseapp.com",
    projectId: "tindev-7aa57",
    storageBucket: "tindev-7aa57.appspot.com",
    messagingSenderId: "490678806738",
    appId: "1:490678806738:web:8140a95e3b31490adb650b",
    measurementId: "G-B077X7CC7G"
}

firebase.initializeApp(config)

export async function authenticate(email: string, password: string) {
    // Recebe email e senha do frontend, e tenta autenticar no firebase
    const firebaseUser = await firebase.auth().signInWithEmailAndPassword(email, password)

    return firebaseUser?.user;

}

// firebase.auth().onAuthStateChanged(firebaseUser => {
//     // Mudou o AuthState
//     console.log('firebaseUser :>> ', firebaseUser?.email);

//     authUser(firebaseUser)

// })