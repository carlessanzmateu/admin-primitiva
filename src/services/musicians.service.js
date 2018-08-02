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

  async getMusician(alias) {
    this.alias = alias;
    let musician = undefined;
    const musicianRef = this.db.collection('musicos').where('alias','==',this.alias);
    try {
    const querySnapshot = await musicianRef.get();
    querySnapshot.forEach((doc) => {
      musician = doc.data();
    });
    } catch (error) {
      console.log(error);
    }

    return musician;
  }
}
