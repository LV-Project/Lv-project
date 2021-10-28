import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyDvIIfXALmC9RZGHM6Yau9L69j9o3KIVlM",
    authDomain: "personal-page-3da31.firebaseapp.com",
    projectId: "personal-page-3da31",
    storageBucket: "personal-page-3da31.appspot.com",
    messagingSenderId: "790377544043",
    appId: "1:790377544043:web:2817674cdd3a389436342e",
    measurementId: "G-2M7PGMV5JZ"
};
firebase.initializeApp(config);
const firestore = firebase.firestore();

export const createMessage= async (data) => {

    const message = firestore.doc(`messages/${data.email}`);
    

    const {fullName, email, company, project} = data;
    const createdAt = new Date();


    try{
        await message.set({
            fullName,
            email,
            company,
            project,
            createdAt
        });
    } catch (error){    
        console.log('error creating user', error.message);
    }
}

export default firebase;
