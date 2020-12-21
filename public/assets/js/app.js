db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

$('#form').submit(function(e) {
    $('#name').text($("#name-input").val());
  
    // Prevent reload page
    e.preventDefault();
});