export default class AuthService {
  firebaseListener() {
    return firebase.auth().onAuthStateChanged(user => user);
  }
  createUserWithEmail(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email,password);
  }
  signOut() {
    firebase.auth().signOut();
  }
  signIn(user, password) {
    firebase.auth().signInWithEmailAndPassword(user, password);
  }
}