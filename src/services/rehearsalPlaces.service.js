import firebase from 'firebase/app';

export default class RehearsalPlacesService {
  db;

  constructor() {
    const firestore = firebase.firestore();
    const settings = {
      timestampsInSnapshots: true,
    };
    firestore.settings(settings);

    this.db = firestore;
  }

  async getRehearsalPlaces(docId) {
    this.docId = docId;

    const rehearsalPlacesRef = this.db.collection('sitios-de-ensayo').doc(this.docId);

    try {
      const rehearsalPlacesDoc = await rehearsalPlacesRef.get();

      if (!rehearsalPlacesDoc.exists) {
        console.log(`${this.docId} does not exist`);
      }

      const dataFromdoc = rehearsalPlacesDoc.data();
      const newDocId = {
        docId: dataFromdoc.id,
      };

      return Object.assign(newDocId, dataFromdoc);

    } catch (error) {
      console.log(error);
    }
  }
  async getAllRehearsalPlaces() {
    const rehearsalPlacesRef = this.db.collection('sitios-de-ensayo');
    const rehearsalPlaces = [];
    try {
      const querySnapshot = await rehearsalPlacesRef.get();
      querySnapshot.forEach((doc) => {
        const dataFromdoc = doc.data();
        const docId = {
          docId: doc.id,
        };
        rehearsalPlaces.push(Object.assign(docId, dataFromdoc));
      });
    } catch (error) {
      console.log(error);
    }

    return rehearsalPlaces;
  }
}
