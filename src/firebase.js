import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDyahlSwyC25OJ6u6PG0mIQsR6m-Two7m4",
  authDomain: "gswarehouste.firebaseapp.com",
  projectId: "gswarehouste",
  storageBucket: "gswarehouste.firebasestorage.app",
  messagingSenderId: "623243154404",
  appId: "1:623243154404:web:48537efe0977a8bad86df1",
  measurementId: "G-N1BWL877X5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
