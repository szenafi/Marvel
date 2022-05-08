import app from 'firebase/compat/app';
import 'firebase/compat/auth';

const Config = {
    apiKey: "AIzaSyAAByB8Dm_cjDXpxRwRNsWvMCNLy8IHbPw",
    authDomain: "marvel-quiz-79b5f.firebaseapp.com",
    projectId: "marvel-quiz-79b5f",
    storageBucket: "marvel-quiz-79b5f.appspot.com",
    messagingSenderId: "348214118518",
    appId: "1:348214118518:web:39a6968ec892fd29a47757"
  };

class Firebase {
    constructor () {
        app.initializeApp(Config);
        this.auth = app.auth();

        
    }
        // inscription
        signupUser = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);
    
        // Connexion
        loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password); 
        
        // Déconnexion
        singoutUser = () => this.auth.signOut();


}

export default Firebase;