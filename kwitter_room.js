const firebaseConfig = {
      apiKey: "AIzaSyAzvtsx8OaJgsKN1yb-Byl0n9stWJpuWOQ",
      authDomain: "kwitter-407c4.firebaseapp.com",
      projectId: "kwitter-407c4",
      storageBucket: "kwitter-407c4.appspot.com",
      messagingSenderId: "444533382595",
      appId: "1:444533382595:web:5ae6a7ef0e18f3c8ffb176",
      measurementId: "G-YEP7PFG37V"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localstorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!" ;

function addroom() {
      room_name=document.getElementById("room_Name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose="adding room_name"
      });
 localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML=row
      
      });});}
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location="index.html";
}