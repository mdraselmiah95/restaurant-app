import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANDeBBQs1qA6m4nuulHqgs7OBbo5YmGj8",
  authDomain: "restaurantapp-7471a.firebaseapp.com",
  databaseURL: "https://restaurantapp-7471a-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-7471a",
  storageBucket: "restaurantapp-7471a.appspot.com",
  messagingSenderId: "124579204505",
  appId: "1:124579204505:web:903a10992bdd053b38d708",
};

console.log(firebaseConfig);
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
