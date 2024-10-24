import { db } from 'configs/FirebaseConfig';
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';

const FirestoreService = {};

FirestoreService.createDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (error) {
    throw new Error('Error adding document: ' + error.message);
  }
};

FirestoreService.getDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return documents;
  } catch (error) {
    throw new Error('Error getting documents: ' + error.message);
  }
};

FirestoreService.updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
  } catch (error) {
    throw new Error('Error updating document: ' + error.message);
  }
};


export default FirestoreService;