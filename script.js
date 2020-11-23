$(document).ready(function(){
  //initialize the firebase app
  var config = {
    apiKey: "AIzaSyBRVp_tmWmJC5S6wU8IS85VhIlb4IED6ms",
  };
  firebase.initializeApp(config);

  //create firebase references
  // var Auth = firebase.auth(); 
  var auth = null;
  const fba = firebase.auth();
  var result = '';
  const btnSignup = document.getElementById("trySignup");
  const btnLogin = document.getElementById("doLogin");
  const calculateButton = document.getElementById("calculate_button");

  function usMaleToEU(val){
    switch(val) {
      case 0.5:
      return 32;
      break;

      case 1:
      return 32.5;
      break;

      case 1.5:
      return 33;
      break;

      case 2:
      return 33.5;
      break;

      case 2.5:
      return 34;
      break;

      case 3:
      return 34.5;
      break;

      case 3.5:
      return 35;
      break;

      case 4:
      return 35.5;
      break;

      case 4.5:
      return 36.5;
      break;

      case 5:
      return 37;
      break;

      case 5.5:
      return 37.5;
      break;

      case 6:
      return 38;
      break;

      case 6.5:
      return 39;
      break;

      case 7:
      return 39.5;
      break;

      case 7.5:
      return 40;
      break;

      case 8:
      return 40.5;
      break;

      case 8.5:
      return 41.5;
      break;

      case 9:
      return 41.5;
      break;

      case 9.5:
      return 42.5;
      break;

      case 10:
      return 43.5;
      break;

      case 10.5:
      return 44;
      break;

      case 11:
      return 44.5;
      break;

      case 11.5:
      return 45.5;
      break;

      case 12:
      return 46;
      break;

      case 12.5:
      return 46.5;
      break;

      case 13:
      return 47;
      break;

      case 13.5:
      return 47.5;
      break;

      case 14:
      return 48.5;
      break;

      case 14.5:
      return 49;
      break;

      case 15:
      return 49.5;
      break;

      default:
      return 0;
    } 
  }
  function usFemaleToEU(val){
    switch(val) {
      case 2:
      return 32;
      break;

      case 3.5:
      return 32.5;
      break;

      case 3:
      return 33;
      break;

      case 3.5:
      return 33.5;
      break;

      case 4:
      return 34;
      break;

      case 4.5:
      return 34.5;
      break;

      case 5:
      return 35;
      break;

      case 5.5:
      return 35.5;
      break;

      case 6:
      return 36.5;
      break;

      case 6.5:
      return 37;
      break;

      case 7:
      return 37.5;
      break;

      case 7.5:
      return 38;
      break;

      case 8:
      return 39;
      break;

      case 8.5:
      return 39.5;
      break;

      case 9:
      return 40;
      break;

      case 9.5:
      return 40.5;
      break;

      case 10:
      return 41.5;
      break;

      case 10.5:
      return 41.5;
      break;

      case 11:
      return 42.5;
      break;

      case 11.5:
      return 43.5;
      break;

      case 12:
      return 44;
      break;

      case 12.5:
      return 44.5;
      break;

      case 13:
      return 45.5;
      break;

      case 13.5:
      return 46;
      break;

      case 14:
      return 46.5;
      break;

      case 14.5:
      return 47;
      break;

      case 15:
      return 47.5;
      break;

      case 15.5:
      return 48.5;
      break;

      case 16:
      return 49;
      break;

      case 16.5:
      return 49.5;
      break;

      default:
      return 0;
    } 
  }
  function euToUsMale(val){
    switch(val) {
      case 32:
      return 0.5;
      break;

      case 32.5:
      return 1;
      break;

      case 33:
      return 1.5;
      break;

      case 33.5:
      return 2;
      break;

      case 34:
      return 2.5;
      break;

      case 34.5:
      return 3;
      break;

      case 35:
      return 3.5;
      break;

      case 35.5:
      return 4;
      break;

      case 36.5:
      return 4.5;
      break;

      case 37:
      return 5;
      break;

      case 37.5:
      return 5.5;
      break;

      case 38:
      return 6;
      break;

      case 39:
      return 6.5;
      break;

      case 39.5:
      return 7;
      break;

      case 40:
      return 7.5;
      break;

      case 40.5:
      return 8;
      break;

      case 41.5:
      return 8.5;
      break;

      case 41.5:
      return 9;
      break;

      case 42.5:
      return 9.5;
      break;

      case 43.5:
      return 10;
      break;

      case 44:
      return 10.5;
      break;

      case 44.5:
      return 11;
      break;

      case 45.5:
      return 11.5;
      break;

      case 46:
      return 12;
      break;

      case 46.5:
      return 12.5;
      break;

      case 47:
      return 13;
      break;

      case 47.5:
      return 13.5;
      break;

      case 48.5:
      return 14;
      break;

      case 49:
      return 14.5;
      break;

      case 49.5:
      return 15;
      break;

      default:
      return 0;
    }
  }

  function euToUsFemale(val){
    switch(val) {
      case 32:
      return 2;
      break;

      case 32.5:
      return 2.5;
      break;

      case 33:
      return 3;
      break;

      case 33.5:
      return 3.5;
      break;

      case 34:
      return 4;
      break;

      case 34.5:
      return 4.5;
      break;

      case 35:
      return 5;
      break;

      case 35.5:
      return 5.5;
      break;

      case 36.5:
      return 6;
      break;

      case 37:
      return 6.5;
      break;

      case 37.5:
      return 7;
      break;

      case 38:
      return 7.5;
      break;

      case 39:
      return 8;
      break;

      case 39.5:
      return 8.5;
      break;

      case 40:
      return 9;
      break;

      case 40.5:
      return 9.5;
      break;

      case 41.5:
      return 10;
      break;

      case 41.5:
      return 10.5;
      break;

      case 42.5:
      return 11;
      break;

      case 43.5:
      return 11.5;
      break;

      case 44:
      return 12;
      break;

      case 44.5:
      return 12.5;
      break;

      case 45.5:
      return 13;
      break;

      case 46:
      return 13.5;
      break;

      case 46.5:
      return 14;
      break;

      case 47:
      return 14.5;
      break;

      case 47.5:
      return 15;
      break;

      case 48.5:
      return 15.5;
      break;

      case 49:
      return 16;
      break;

      case 49.5:
      return 16.5;
      break;

      default:
      return 0;
    } 
  }

  function ukToEU(val){
    switch(val) {
      case 0:
      return 32;
      break;

      case 0.5:
      return 32.5;
      break;


      case 1:
      return 33;
      break;

      case 1.5:
      return 33.5;
      break;

      case 2:
      return 34;
      break;

      case 2.5:
      return 34.5;
      break;

      case 3:
      return 35;
      break;

      case 3.5:
      return 35.5;
      break;

      case 4:
      return 36.5;
      break;

      case 4.5:
      return 37;
      break;

      case 5:
      return 37.5;
      break;

      case 5.5:
      return 38;
      break;

      case 6:
      return 39;
      break;

      case 6.5:
      return 39.5;
      break;

      case 7:
      return 40;
      break;

      case 7.5:
      return 40.5;
      break;

      case 8:
      return 41.5;
      break;

      case 8.5:
      return 41.5;
      break;

      case 9:
      return 42.5;
      break;

      case 9.5:
      return 43.5;
      break;

      case 10:
      return 44;
      break;

      case 10.5:
      return 44.5;
      break;

      case 11:
      return 45.5;
      break;

      case 11.5:
      return 46;
      break;

      case 12:
      return 46.5;
      break;

      case 12.5:
      return 47;
      break;

      case 13:
      return 47.5;
      break;

      case 13.5:
      return 48.5;
      break;

      case 14:
      return 49;
      break;

      case 14.5:
      return 49.5;
      break;

      case 15:
      return 50;
      break;

      default:
      return 0;
    } 
  }
  function euToUk(val){
    switch(val) {
      case 32:
      return 0;
      break;

      case 32.5:
      return 0.5;
      break;


      case 33:
      return 1;
      break;

      case 33.5:
      return 1.5;
      break;

      case 34:
      return 2;
      break;

      case 34.5:
      return 2.5;
      break;

      case 35:
      return 3;
      break;

      case 35.5:
      return 3.5;
      break;

      case 36.5:
      return 4;
      break;

      case 37:
      return 4.5;
      break;

      case 37.5:
      return 5;
      break;

      case 38:
      return 5.5;
      break;

      case 39:
      return 6;
      break;

      case 39.5:
      return 6.5;
      break;

      case 40:
      return 7;
      break;

      case 40.5:
      return 7.5;
      break;

      case 41.5:
      return 8;
      break;

      case 41.5:
      return 8.5;
      break;

      case 42.5:
      return 9;
      break;

      case 43.5:
      return 9.5;
      break;

      case 44:
      return 10;
      break;

      case 44.5:
      return 10.5;
      break;

      case 45.5:
      return 11;
      break;

      case 46:
      return 11.5;
      break;

      case 46.5:
      return 12;
      break;

      case 47:
      return 12.5;
      break;

      case 47.5:
      return 13;
      break;

      case 48.5:
      return 13.5;
      break;

      case 49:
      return 14;
      break;

      case 49.5:
      return 14.5;
      break;

      case 50:
      return 15;
      break;

      default:
      return 0;
    } 
  }

  // sanitization check for range validation
  function validateRange(start, end, check){
    return check >= start && check <= end
  }

  function showMessage(msg){
    $('#messageModalLabel').html(msg);
    $('#messageModal').modal('show');
  }

  //sanitization check validation of email
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

// removing any trailing spaces etc for sanitization purpose
function sanitizeSpaces(str) {
  return str.trim();
}

//attaching the checks with calculate button
//and calling pre defined functions from above
//
calculateButton.addEventListener('click', e => {
  const selected_gender = document.getElementById("selected_gender").value;
  const selection_type = document.getElementById("selection_type").value;
  const shoes_size = document.getElementById("shoes_size").value;

  if(selected_gender == "Male" && selection_type == "US2EU"){

    if(validateRange(0.5,14, shoes_size)){
      result = usMaleToEU(parseFloat(shoes_size));
    }else{
      showMessage("Please give value in range 0.5-14")
    }

  } else if(selected_gender == "Female" && selection_type == "US2EU"){

    if(validateRange(2,15.5, shoes_size)){
     result = usFemaleToEU(parseFloat(shoes_size));
   }else{
    showMessage("Please give value in range 2-15.5")
  }
} 


else if(selected_gender == "Male" && selection_type == "EU2US"){

  if(validateRange(32,48.5, shoes_size)){
    result = euToUsMale(parseFloat(shoes_size));
  }else{
    showMessage("Please give value in range 32 - 48.5")
  }

} else if(selected_gender == "Female" && selection_type == "EU2US"){

  if(validateRange(32,48.5, shoes_size)){
   result = euToUsFemale(parseFloat(shoes_size));
 }else{
  showMessage("Please give value in range 32 - 48.5")
}
} 




else if(selected_gender == "Male" && selection_type == "UK2US"){

  if(validateRange(0,15, shoes_size)){
    result = euToUsMale(parseFloat(ukToEU(parseFloat(shoes_size))));
  }else{
    showMessage("Please give value in range 0 - 15")
  }

} else if(selected_gender == "Female" && selection_type == "UK2US"){

  if(validateRange(0,15, shoes_size)){
   result =  euToUsFemale(parseFloat(ukToEU(parseFloat(shoes_size))));
 }else{
  showMessage("Please give value in range 0 - 15")
}
} 





else if(selection_type == "UK2EU"){

  if(validateRange(0,15, shoes_size)){
   var result = ukToEU(parseFloat(shoes_size));
 }else{
  showMessage("Please give value in range 0-15")
}
}



else if(selection_type == "EU2UK"){

  if(validateRange(32,50, shoes_size)){
   var result = euToUk(parseFloat(shoes_size));
 }else{
  showMessage("Please give value in range 32 - 50")
}
}


document.getElementById("result").value = ""+result;
})


 // attaching the click listener to
  // login button and checking for null fields, validated email 
  // before proceed
  // 
  btnLogin.addEventListener('click', e => {
    const email = sanitizeSpaces(document.getElementById("loginEmail").value);
    const password = sanitizeSpaces(document.getElementById("loginPassword").value);

    if( email != '' && password != ''){

      if(validateEmail(email)){
        fba.signInWithEmailAndPassword(email, password)
        .then(function(user){
          auth = user;
          $('#logM').modal('hide');
        })
        .catch(function(error){
          showMessage("Could not login using given credentials.") 
        });
      }else{
       showMessage("Invalid Email Address.") 
     }


   } else {

     $('#messageModalLabel').html('Please Fill Both Fields')
     $('#messageModal').modal('show');
   }


 })


  // attaching the click listener to
  // signup button and checking for null fields, validated email 
  // before proceed
  btnSignup.addEventListener('click', e => {
    const email = sanitizeSpaces(document.getElementById("registerEmail").value);
    const password = sanitizeSpaces(document.getElementById("registerPassword").value);

    if( email != '' && password != ''){

      if(validateEmail(email)){
       fba.createUserWithEmailAndPassword(email, password)
       .then(function(user){
        auth = user;
        $('#regM').modal('hide');
      })
       .catch(function(error){
        if(error.code == "auth/email-already-in-use"){
          showMessage("Email Already Registered") 

        }else if(error.code == "auth/weak-password") {
          showMessage("Password is too short")  
        }else {
         showMessage(error.code)  
       }
     });
     }else{
       showMessage("Invalid Email Address.") 
     }

   } else {

     $('#messageModalLabel').html('Please Fill Both Fields')
     $('#messageModal').modal('show');
   }

 });



// after login
// controlling the flow
// to show/hide respective items
// 
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    auth = user;
    $('body').removeClass('auth-false').addClass('auth-true');

  } else {
      // No user is signed in.
      $('body').removeClass('auth-true').addClass('auth-false');

      $('#contacts').html('');
      auth = null;
    }
  });
});



//logout the firebase auth
//destorying session by button click
$('#logout').on('click', function(e) {
  e.preventDefault();
  firebase.auth().signOut()
});

