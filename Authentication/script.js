import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD68u_-C9l7PPR_MEP94bLvewLFjGMbMOU",
  authDomain: "first-project-66a64.firebaseapp.com",
  projectId: "first-project-66a64",
  storageBucket: "first-project-66a64.firebasestorage.app",
  messagingSenderId: "1029281813000",
  appId: "1:1029281813000:web:eb213534189cb4e12677bd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let suBtn = document.getElementById('sign-up-btn')
const signUpPage=document.getElementById('sign-up')
const signInPage=document.getElementById('sign-in')
const back=document.getElementById('back-btn')
const signInBtn=document.getElementById('sign-in-btn')
const logBack = document.getElementById('login-back-btn')
const siginBtn =document.getElementById('signin-btn')
suBtn.addEventListener("click",()=>{
    
    let email=document.getElementById('sign-up-email').value
    let password=document.getElementById('sign-up-pass').value
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
 
    const user = userCredential.user;
    console.log(user);
    alert("Signed Up")
    signInPage.style.display='block'
    signUpPage.style.display='none'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

})

const welBox=document.getElementById('welcomeBox')
const note=document.getElementById('note')
signInBtn.addEventListener('click',()=>{
    let email=document.getElementById('sign-in-email').value
    let password=document.getElementById('sign-in-pass').value
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    signInPage.style.display='none'
    welBox.style.display='block'
    note.innerText=`Welcome ${user.email}`
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });        
})



siginBtn.addEventListener('click',()=>{
  signUpPage.style.display='none'
  signInPage.style.display='block'
})

back.addEventListener('click',()=>{
    signInPage.style.display='none';
    signUpPage.style.display='block';

})
logBack.addEventListener('click',()=>{
    welBox.style.display='none';
   signInPage.style.display='block'
})

