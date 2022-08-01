function adduser() {
    user_name=documet.getElementbyId("user_Name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}