import {useEffect, useState} from "react";
import {initializeApp} from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDukd84l0yXIlmrcxey4zI0PjWS5hfDA_o',
    authDomain: "products-assignment-1.firebaseapp.com",
    projectId: "products-assignment-1",
    storageBucket: "products-assignment-1.appspot.com",
    messagingSenderId: "702289775924",
    appId: "1:702289775924:web:20c4271ce8be20e6b82961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);


export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth);
}

// Custom Hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}

// Storage
export async function upload(file, currentUser, setIsLoading) {

    setIsLoading(true);
    const fileRef = ref(storage, currentUser.uid + '.png');

    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    await updateProfile(currentUser, {photoURL});

    setIsLoading(false);

    alert("Uploaded file!");

    return photoURL;
}