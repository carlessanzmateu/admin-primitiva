import firebase from 'firebase/app';

export default class InstrumentsService {
  db;

  constructor() {
    const firestore = firebase.firestore();
    const settings = {
      timestampsInSnapshots: true,
    };
    firestore.settings(settings);

    this.db = firestore;
  }

  async getInstrument(docId) {
    this.docId = docId;

    const instrumentsRef = this.db.collection('instrumentos').doc(this.docId);

    try {
      const instrumentsDoc = await instrumentsRef.get();

      if (!instrumentsDoc.exists) {
        console.log(`${this.docId} does not exist`);
      }

      return instrumentsDoc.data();

    } catch (error) {
      console.log(error);
    }
  }
  async getAllInstruments() {
    const instrumentsRef = this.db.collection('instrumentos');
    const instruments = [];
    try {
      const querySnapshot = await instrumentsRef.get();
      querySnapshot.forEach((doc) => {
        const dataFromdoc = doc.data();
        const docId = {
          docId: doc.id,
        };
        instruments.push(Object.assign(docId, dataFromdoc));
      });
    } catch (error) {
      console.log(error);
    }

    return instruments;
  }
}
