import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAKt-m-9_rIpk6CvAOeXF_iWkL1CqYmUFg",
  authDomain: "job-lagbe-e56e2.firebaseapp.com",
  projectId: "job-lagbe-e56e2",
  storageBucket: "job-lagbe-e56e2.firebasestorage.app",
  messagingSenderId: "557072590982",
  appId: "1:557072590982:web:276b638d7b0286cb4e0907",
  measurementId: "G-RCCD073SYB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
