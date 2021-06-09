import Firebase from "firebase/app";
import "Firebase/firestore";
import "Firebase/auth";

//nous devons en quelque sorte semer la base de données

//nous avons besoin de la configuration ici

const config = {};

const firebase = Firebase.initializeApp(config);

export { firebase };
