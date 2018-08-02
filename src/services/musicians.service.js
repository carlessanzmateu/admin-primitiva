import firebase from 'firebase/app';

export default class MusiciansService {
  db;

  constructor() {
    const firestore = firebase.firestore();
    const settings = {
      timestampsInSnapshots: true,
    };
    firestore.settings(settings);

    this.db = firestore;
  }
  async getMusicians() {
    const musiciansRef = this.db.collection('musicos');
    const musicians = [];
    
    try {
      const querySnapshot = await musiciansRef.get();
      querySnapshot.forEach((doc) => {
        musicians.push(doc.data());
      });
    } catch (error) {
      console.log(error);
    }

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
