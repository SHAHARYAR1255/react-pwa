importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');


if('serviceWorker' in navigator) { 
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
  .then(function(registration) {
   console.log("Service Worker Registered");
  messaging.useServiceWorker(registration);  
    }); 
    }

firebase.initializeApp({
    messagingSenderId: "994287712221",
})

const initMessaging = firebase.messaging()