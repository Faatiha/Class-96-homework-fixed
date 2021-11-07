const firebaseConfig = {
    apiKey: "AIzaSyDq0OSx6wK7Pqf7J9wgxux_v7ebBeO6L34",
    authDomain: "lets-chat-app-homework.firebaseapp.com",
    databaseURL: "https://lets-chat-app-homework-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-homework",
    storageBucket: "lets-chat-app-homework.appspot.com",
    messagingSenderId: "169441460260",
    appId: "1:169441460260:web:41c4a09f14e982449d58b1"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}