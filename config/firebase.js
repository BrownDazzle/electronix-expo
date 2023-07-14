import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { API_KEY, APP_ID, AUTH_DOMAIN, PROJECT_ID, MEASUREMENT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID } from '@env'


// Firebase config
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID

};

// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
//const analytics = getAnalytics(initializeApp(firebaseConfig));