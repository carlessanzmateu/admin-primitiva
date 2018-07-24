export default class MusiciansService {
  db;

  constructor(firebase) {
    this.db = firebase.firestore();
  }
  async getMusicians() {
    const musiciansRef = this.db.collection('musicos');

    musiciansRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc) => {
        console.log(doc.id, " => ", doc.data());
      }
    })

    
  });
  
  
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
