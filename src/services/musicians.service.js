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
        const dataFromdoc = doc.data();
        const docId = {
          docId: doc.id,
        };
        musicians.push(Object.assign(docId, dataFromdoc));
      });
    } catch (error) {
      console.log(error);
    }

    return musicians;
  }

  async getMusician(docId) {
    this.docId = docId;

    const musicianRef = this.db.collection('musicos').doc(this.docId);

    try {
      const musicianDoc = await musicianRef.get();
      if (!musicianDoc.exists) {
        console.log(`${this.docId} does not exists`);
      }
      const dataFromdoc = musicianDoc.data();
      const newDocId = {
        docId: musicianDoc.id,
      };

      return Object.assign(newDocId, dataFromdoc);

    } catch (error) {
      console.log(error);
    }
  }
}
