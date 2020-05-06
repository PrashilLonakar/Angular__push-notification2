importScripts('https://www.gstatic.com/firebasejs/6.4.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.4.2/firebase-messaging.js');
var firebaseConfig = {
  apiKey: "AIzaSyDSDvZcLs1RiJQc_4kzV2u_aJxT7rn8m4c",
  authDomain: "push-notification-f4273.firebaseapp.com",
  databaseURL: "https://push-notification-f4273.firebaseio.com",
  projectId: "push-notification-f4273",
  storageBucket: "push-notification-f4273.appspot.com",
  messagingSenderId: "1005492827984",
  appId: "1:1005492827984:web:f8cdf296a0015d58e09e55",
  measurementId: "G-HSMZ1D5W58"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
