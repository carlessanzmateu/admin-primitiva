export default class AuthService {
  firebase;

  constructor(firebase) {
    this.firebase = firebase;
  }
  firebaseListener() {
    console.log('listener');
    return this.firebase.auth().onAuthStateChanged(user => user);
  }
  createUserWithEmail(email, password) {
    this.firebase.auth().createUserWithEmailAndPassword(email,password);
  }
  async signOut() {
    await this.firebase.auth().signOut();
  }
  async signIn(user, password) {
    const userInfo = await this.firebase.auth().signInWithEmailAndPassword(user, password);
    return userInfo;
  }
}