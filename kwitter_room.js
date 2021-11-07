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
    
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="index.html";
 }
 