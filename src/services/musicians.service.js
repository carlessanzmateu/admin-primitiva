export default class MusiciansService {
  db;

  constructor(firebase) {
    this.db = firebase.firestore();
  }
  async getMusicians() {
    const musiciansRef = this.db.collection('musicos');
    const musicians = [];

    musiciansRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          musicians.push(doc.data());
        });
      })
      .catch((error) => {
        console.log(error);
      });

    return musicians;
  }
  getMusician() {
    const musiciansRef = this.db.collection('musicos').doc('carles-sanz');

    musiciansRef.get().then((doc) => {
      if (doc.exists) {
        console.log('Document data:', doc.data());
      } else {
        console.log('no hay documento');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }
}
