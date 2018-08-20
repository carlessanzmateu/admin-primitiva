import firebase from 'firebase/app';

export default class ActsService {
  db;

  constructor() {
    const firestore = firebase.firestore();
    const settings = {
      timestampsInSnapshots: true,
    };
    firestore.settings(settings);

    this.db = firestore;
  }

  async getAct(docId) {
    this.docId = docId;

    const actRef = this.db.collection('actos').doc(this.docId);

    try {
      const actDoc = await actRef.get();

      if (!actDoc.exists) {
        console.log(`${this.docId} does not exist`);
      }
      const docId = {
        docId: actDoc.id,
      };
      
      return Object.assign(docId, actDoc.data());

    } catch (error) {
      console.log(error);
    }
  }
  async getAllActs() {
    const actsRef = this.db.collection('actos');
    const acts = [];
    try {
      const querySnapshot = await actsRef.get();
      querySnapshot.forEach((doc) => {
        const dataFromdoc = doc.data();
        const docId = {
          docId: doc.id,
        };
        acts.push(Object.assign(docId, dataFromdoc));
      });
    } catch (error) {
      console.log(error);
    }

    return acts;
  }
  async getPaginatedActs() {}
  async createAct(act) {
    const payload = Object.assign({}, act);
    let actCreated = false;
    try {
      await this.db.collection('actos').add(payload);
      console.log('Act written successfully');
      actCreated = true;
    } catch (error) {
      actCreated = false;
      console.log('Error creating act', error);
    }

    return actCreated;
  }
  async updateAct() {}
  async removeAct() {}
}
