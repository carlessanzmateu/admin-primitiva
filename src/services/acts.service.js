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

  async getAct() {}
  async getAllActs() {
    const actsRef = this.db.collection('actos');
    const acts = [];
    try {
      const querySnapshot = await actsRef.get();
      querySnapshot.forEach((doc) => {
        acts.push(doc.data());
      });
    } catch (error) {
      console.log(error);
    }

    return acts;
  }
  async getPaginatedActs() {}
  async createAct() {}
  async updateAct() {}
  async removeAct() {}
}
