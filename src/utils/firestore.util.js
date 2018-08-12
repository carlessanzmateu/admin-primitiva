import firebase from 'firebase/app';

export default class FirestoreUtils {
  firebase = firebase;

  getFirestore() {
    const firestore = this.firebase.firestore();
    const settings = {
      timestampsInSnapshots: true,
    };
    firestore.settings(settings);

    return firestore;
  }

  singleDocumentReferenceBuilder(collectionName, documentReference) {
    const db = this.getFirestore();
    return db.collection(collectionName).doc(documentReference);
  }

  multipleDocumentReferenceBuilder(collectionName, documentsReferences) {
    const db = this.getFirestore();
    const references = [];

    documentsReferences.forEach((docReference) => {
      references.push(db.collection(collectionName).doc(docReference.docId));
    });

    return references;
  }
}
