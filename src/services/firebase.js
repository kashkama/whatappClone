import * as firebase from "firebase";

export const initialize = () => firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: "whatsappclone-20181.firebaseapp.com",
    databaseURL: "https://whatsappclone-20181.firebaseio.com",
    projectId: "whatsappclone-20181",
    storageBucket: "whatsappclone-20181.appspot.com",
    messagingSenderId: "315651881181"
});

export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on("value", updaterFn);
    return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint, data) => {
    return firebase.database().ref(endpoint).push(data);
}