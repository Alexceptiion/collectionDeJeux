import Firebase from "firebase/app";
import "Firebase/firestore";
import "Firebase/auth";

//nous devons en quelque sorte semer la base de données

//nous avons besoin de la configuration ici

const config = {
  apiKey: "AIzaSyACT87J2nycNqH1Gyv5ReNarVPTFQ4kzXU",
  authDomain: "origo-59dc3.firebaseapp.com",
  projectId: "origo-59dc3",
  storageBucket: "origo-59dc3.appspot.com",
  messagingSenderId: "398516317755",
  appId: "1:398516317755:web:919b624d6707d7032f761e",
  measurementId: "G-VP9XPB61BX",
};

const firebase = Firebase.initializeApp(config);

export { firebase };

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyACT87J2nycNqH1Gyv5ReNarVPTFQ4kzXU",
//     authDomain: "origo-59dc3.firebaseapp.com",
//     projectId: "origo-59dc3",
//     storageBucket: "origo-59dc3.appspot.com",
//     messagingSenderId: "398516317755",
//     appId: "1:398516317755:web:919b624d6707d7032f761e",
//     measurementId: "G-VP9XPB61BX"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
