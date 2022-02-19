// 1. Init Firebase
var config = {
    apiKey: "AIzaSyCVZc2v8dhL3-TCTvoFT0Q2UhllIi-94A8",
    authDomain: "portfolio-fb4a1.firebaseapp.com",
    databaseURL: "https://portfolio-fb4a1-default-rtdb.firebaseio.com",
    projectId: "portfolio-fb4a1",
    storageBucket: "portfolio-fb4a1.appspot.com",
    messagingSenderId: "496056002295"
};

firebase.initializeApp(config);

//reference messages collection
var newsletterRef = firebase.database().ref('newsletter');

//listen for submit
document.getElementById('small-form').addEventListener('submit', submitForm);

//submit form

function submitForm(e) {
    e.preventDefault();

    // Grabs user input
    var name = $('#newsName').val().trim();
    var email = $('#newsEmail').val().trim();

    //save user
    saveUser(name, email);
    console.log(name, email);
    //show alert
    document.querySelector('.alert-sm').style.display = 'block';
    // document.querySelector('.alert-sm').append('Thank you for subscribing, ' + name + '!');
    // document.querySelector('.alert-sm').append('Thank you for subscribing!');
    document.querySelector('.submitBtn').style.display = 'none';
    //hide alert
    setTimeout(function() {
        document.querySelector('.alert-sm').style.display = 'none';
        document.querySelector('.submitBtn').style.display = 'block';
    }, 3000);

    //clear form
    document.getElementById('small-form').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

//save to firebase

function saveUser(name, email) {
    var newUserRef = newsletterRef.push();
    newUserRef.set({
        name: name,
        email: email
    });
}
