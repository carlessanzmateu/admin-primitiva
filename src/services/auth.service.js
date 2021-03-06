import firebase from 'firebase/app';

export default class AuthService {
  firebase;

  constructor() {
    this.firebase = firebase;
  }
  firebaseListener() {
    return this.firebase.auth().onAuthStateChanged(user => user);
  }
  createUserWithEmail(email, password) {
    this.firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  async signOut() {
    await this.firebase.auth().signOut();
  }
  async signIn(user, password) {
    const userInfo = await this.firebase.auth().signInWithEmailAndPassword(user, password);
    return userInfo;
  }
}
