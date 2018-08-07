import firebase from 'firebase/app';

export default class ClothesService {
  db;

  constructor() {
    const firestore = firebase.firestore();
    const settings = {
      timestampsInSnapshots: true,
    };
    firestore.settings(settings);

    this.db = firestore;
  }

  async getClothes(docId) {
    this.docId = docId;

    const clothesRef = this.db.collection('ropa').doc(this.docId);

    try {
      const clothesDoc = await clothesRef.get();

      if (!clothesDoc.exists) {
        console.log(`${this.docId} does not exist`);
      }

      return clothesDoc.data();

    } catch (error) {
      console.log(error);
    }
  }
  async getAllClothes() {
    const clothesRef = this.db.collection('ropa');
    const clothes = [];
    try {
      const querySnapshot = await clothesRef.get();
      querySnapshot.forEach((doc) => {
        const dataFromdoc = doc.data();
        const docId = {
          docId: doc.id,
        };
        clothes.push(Object.assign(docId, dataFromdoc));
      });
    } catch (error) {
      console.log(error);
    }

    return clothes;
  }
}
