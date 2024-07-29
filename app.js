// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0JfPUe7dXWwnvvKLMWNJ7fYeNMEQ94xs",
  authDomain: "fir-authentication-b824b.firebaseapp.com",
  projectId: "fir-authentication-b824b",
  storageBucket: "fir-authentication-b824b.appspot.com",
  messagingSenderId: "223036711070",
  appId: "1:223036711070:web:b6958c8ce454104a57db8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector("#authForm");
const secretContent = document.querySelector("#secretContent");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

secretContent.style.display = "none";

async function userSignUp() {
  const userEmailValue = userEmail.value;
  const userPasswordValue = userPassword.value;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userEmailValue,
      userPasswordValue
    );
    const user = userCredential.user;
    // checkAuthState();
    console.log(user);
  } catch (error) {
    alert(error.code + ": " + error.message);
  }
}
async function userSignIn() {
  const userEmailValue = userEmail.value;
  const userPasswordValue = userPassword.value;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      userEmailValue,
      userPasswordValue
    );
    const user = userCredential.user;

    console.log(user);
  } catch (error) {
    alert(error.code + ": " + error.message);
  }
}
async function userSignOut() {
  try {
    await signOut(auth);
  } catch (error) {
    alert(error.code + ": " + error.message);
  }
}
async function checkAuthState() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      secretContent.style.display = "block";
      authForm.style.display = "none";
    } else {
      secretContent.style.display = "none";
      authForm.style.display = "block";
    }
  });
}
checkAuthState();
signUpButton.addEventListener("click", userSignUp);
signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);
