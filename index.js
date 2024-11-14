// Asegúrate de que no hay variables no utilizadas
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Elimina las variables que no estás utilizando
// const onRequest = functions.https.onRequest; // Eliminar si no se usa
// const logger = admin.firestore().logger();  // Eliminar si no se usa

// Aquí va tu código de funciones
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);
import { collection, addDoc } from "firebase/firestore"; 

async function addCollection() {
  try {
    // Añadir un documento a la colección (si no existe, se crea automáticamente)
    const docRef = await addDoc(collection(db, "nombreDeTuColeccion"), {
      campo1: "valor1",
      campo2: "valor2"
    });
    console.log("Documento añadido con ID: ", docRef.id);
  } catch (e) {
    console.error("Error al añadir documento: ", e);
  }
}

// Llama a la función para añadir la colección
addCollection();
