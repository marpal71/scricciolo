import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, increment } from "firebase/firestore";

// Configuriamo l'oggetto usando le variabili d'ambiente di Astro
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID
};

// Inizializza l'App
const app = initializeApp(firebaseConfig);

// Inizializza Firestore e esportalo
const db = getFirestore(app);

/**
 * Increments a specific field in a Firestore document
 * @param {string} collectionName - Name of the collection
 * @param {string} docId - ID of the document
 * @param {string} fieldName - The field to increase
 */

export async function incrementValue(collectionName, docId, fieldName) {
    const docRef = doc(db, collectionName, docId);
  
    try {
      await updateDoc(docRef, {
        [fieldName]: increment(1)
      });
      console.log("Value successfully incremented!");
    } catch (error) {
      console.error("Error updating document: ", error);
      throw error;
    }
  }