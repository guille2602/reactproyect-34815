import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuKzIiS8ioDkDDBaSl43vLgcjV5KEVihM",
  authDomain: "rt34815mundoceramica.firebaseapp.com",
  projectId: "rt34815mundoceramica",
  storageBucket: "rt34815mundoceramica.appspot.com",
  messagingSenderId: "332947504724",
  appId: "1:332947504724:web:adb7992e4bf4596bdd37c1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Traer un elemento

export async function getItem(id) {
  const itemRef = doc(db, "products", id);
  const itemSnap = await getDoc(itemRef);
  if (itemSnap.exists()) {
    return {
      ...itemSnap.data(),
      id: itemSnap.id
    };
  } else {
    console.log("Item no encontrado");
  }
}

//Traer todos los elementos

export async function getItems() {
    const prodsCollection = collection(db, "products");
    const prodsSnapshot = await getDocs(prodsCollection);
    const prodsArray = prodsSnapshot.docs.map( (item) => {
      return {
        ...item.data(),
        id: item.id
      }
    });
    return prodsArray;
}

//Traer una categoría 

export async function getItemsByCategory(category) {
  const prodsCollection = collection(db, "products");
  const q = query(prodsCollection, where("categoria", "==", category));
  const prodsSnapshot = await getDocs(q);
  const prodsArray = prodsSnapshot.docs.map( (item) => {
    return {
      ...item.data(),
      id: item.id
    }
  });
  return prodsArray;
}

//Crear orden de compra

export async function createOrder(order){
  const ordersCollection = collection(db, "orders");
  const docRef = await addDoc(ordersCollection, order);
  return docRef;
}

export default getItems;