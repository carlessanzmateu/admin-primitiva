import firebase from 'firebase/app';

export default class ActTypeService {
  db;

  constructor() {
    const firestore = firebase.firestore();
    const settings = {
      timestampsInSnapshots: true,
    };
    firestore.settings(settings);

    this.db = firestore;
  }

  async getActType(docId) {
    this.docId = docId;

    const actTypeRef = this.db.collection('ipos-acto').doc(this.docId);

    try {
      const actTYpeDoc = await actTypeRef.get();

      if (!actTYpeDoc.exists) {
        console.log(`${this.docId} does not exist`);
      }

      return actTYpeDoc.data();

    } catch (error) {
      console.log(error);
    }
  }

  async getAllActTypes() {
    const actTypeRef = this.db.collection('tipos-acto');
    const actTypes = [];
    try {
      const querySnapshot = await actTypeRef.get();
      querySnapshot.forEach((doc) => {
        const dataFromdoc = doc.data();
        const docId = {
          docId: doc.id,
        };
        actTypes.push(Object.assign(docId, dataFromdoc));
      });
    } catch (error) {
      console.log(error);
    }

    return actTypes;
  }
}
