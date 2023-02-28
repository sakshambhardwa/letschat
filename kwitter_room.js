const firebaseConfig = {
      apiKey: "AIzaSyCVcS3t5q8_lw-WZveaksJ-JgMAeWHbYLk",
      authDomain: "kwitter-e607b.firebaseapp.com",
      databaseURL: "https://kwitter-e607b-default-rtdb.firebaseio.com",
      projectId: "kwitter-e607b",
      storageBucket: "kwitter-e607b.appspot.com",
      messagingSenderId: "212112362482",
      appId: "1:212112362482:web:e5683009ad1fe7adf6b96b"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + " ! ";
function addroom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpouse : "adding room name"
      });
      localStorage.setItem("room_name",room_name );
      window.location = "kwitter_page.html"; 
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name" + Room_names);
       row = "<div class='room_name' id='" + Room_names + "' onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();
function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}