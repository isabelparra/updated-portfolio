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
var usersRef = firebase.database().ref('users');

//listen for submit
document.getElementById('hp-form').addEventListener('submit', submitForm);

//submit form

function submitForm(e) {
    e.preventDefault();

    // Grabs user input
    var name = $('#hpInputName').val().trim();
    var email = $('#hpInputEmail').val().trim();
    var last = $('#hpInputLast').val().trim();
    // var phone = $('#hpInputPhone').val().trim();
    // var company = $('#hpCompany').val().trim();
    // var message = $('#hpMessage').val().trim();

    //save user
    saveUser(name, last, email);
console.log(name, last, email);
    //show alert
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.submitBtn').style.display = 'none';

    //hide alert
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
        document.querySelector('.submitBtn').style.display = 'block';
    }, 3000);

    //clear form
    document.getElementById('hp-form').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

//save to firebase

function saveUser(name, last, email) {
    var newUserRef = usersRef.push();
    newUserRef.set({
        name: name,
        last: last,
        email: email
      
    });
}

// var database = firebase.database();

// var uName = '';
// var uEmail = '';
// var uPhone = '';
// var uBusiness = '';
// var uComments = '';
// 2. Button for Homepage Form
// $('#submit-hp').on('click', function(event) {
    // Prevent page from refreshing
    // event.preventDefault();

    // Grabs user input
    // var uName = $('#hpInputName').val().trim();
    // var uEmail = $('#hpInputEmail').val().trim();
    // var uPhone = $('#hpInputPhone').val().trim();
    // var uBusiness = $('#hpBusinessName').val().trim();
    // var uComments = $('#hpInputComment').val().trim();

    // console.log(uName);

    // create local 'temp' object for holding data
    // var newUser = {
    //     name: uName,
    //     email: uEmail,
    //     phone: uPhone,
    //     business: uBusiness,
    //     comments: uComments
    // }

    // uploads user data to the database

    // database.ref().push(newUser);

    //log everything to console
    // console.log(newUser.name);
    // console.log(newUser.email);

    // alert('Form submitted!');

    // clears all inputs
//     $('#hpInputName').val('');
//     $('#hpInputEmail').val('');
//     $('#hpInputPhone').val('');
//     $('#hpBusinessName').val('');
//     $('#hpInputComment').val('');
// });

// 3. Create Firebase event for adding user // Create new child to ref database

// database.ref().on('child_added', function(snapshot) {
//     var uName = snapshot.val().uName;
// });

// var storeResponse;


// database.ref().on('child_added', function(childSnapshot, prevChildKey) {

//     console.log(childSnapshot.val());
//     console.log(prevChildKey);

//     // store everything into a variable
//     var uName = childSnapshot.val().name;
//     var uEmail = childSnapshot.val().email;
//     var uPhone = childSnapshot.val().phone;
//     var uBusiness = childSnapshot.val().business;
//     var uComments = childSnapshot.val().comments;

//     // user info

//     console.log(uName);
//     console.log(uEmail);

//     $()
// });

// const form = document.querySelector('.hp-form');

//push on form submit
// if (form) {
//     form.add
// }
// function writeUserData(uName, uEmail, uPhone, uBusiness, uComments) {
//     firebase.database().ref('users/' + uName).set({
//         username: uName,
//         email: uEmail
//     });
// }

//
//
//
// NEW FORM 2023

// function designForm() {
//     alert('Coming Soon!');

// }

// function designForm() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//   }