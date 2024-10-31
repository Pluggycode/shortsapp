import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-52d58.firebaseapp.com",
  projectId: "ai-course-52d58",
  storageBucket: "ai-course-52d58.appspot.com",
  messagingSenderId: "966564530680",
  appId: "1:966564530680:web:c6ef127afe12b6025fee0d",
  measurementId: "G-V9GW9KVRTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)