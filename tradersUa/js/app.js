// console.log('msg');
// // (function(d, s, id) {
// //   var js, fjs = d.getElementsByTagName(s)[0];
// //   if (d.getElementById(id)) return;
// //   js = d.createElement(s); js.id = id;
// //   js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10&appId=1920488714856591";
// //   fjs.parentNode.insertBefore(js, fjs);
// // }(document, 'script', 'facebook-jssdk'));


// // function myFacebookLogin() {
// //   FB.login(function(){}, {scope: 'publish_actions'});
// // }
// // window.fbAsyncInit = function() {
// //     FB.init({
// //       appId            : '145291699399937',
// //       autoLogAppEvents : true,
// //       xfbml            : true,
// //       version          : 'v2.10'
// //     });
// //     FB.AppEvents.logPageView();
// //     console.log(FB);
  
// //   FB.getLoginStatus(function(response) {
// //     if (response.status === 'connected') {
// //       console.log('Logged in.');
// //       //codingeverybody/permalink/1802935303080331/?
// //     /* make the API call */
// //     FB.api(
// //         "/1802935303080331",
// //         function (response) {
// //           console.log(response);
// //           if (response && !response.error) {
// //             console.log(response);
// //           }
// //         }
// //     );
// //     }
// //     else {
// //       FB.login();
// //     }
// //   });
    
    
// //   };
  
// //   (function(d, s, id){
// //      var js, fjs = d.getElementsByTagName(s)[0];
// //      if (d.getElementById(id)) {return;}
// //      js = d.createElement(s); js.id = id;
// //      js.src = "//connect.facebook.net/en_US/sdk.js";
// //      fjs.parentNode.insertBefore(js, fjs);
// //    }(document, 'script', 'facebook-jssdk'));
    


// // This is called with the results from from FB.getLoginStatus().
// function statusChangeCallback(response) {
//   console.log('statusChangeCallback');
//   console.log(response);
//   // The response object is returned with a status field that lets the
//   // app know the current login status of the person.
//   // Full docs on the response object can be found in the documentation
//   // for FB.getLoginStatus().
//   if (response.status === 'connected') {
//     // Logged into your app and Facebook.
//     testAPI();
//   } else {
//     // The person is not logged into your app or we are unable to tell.
//     document.getElementById('status').innerHTML = 'Please log ' +
//       'into this app.';
//   }
// }

// // This function is called when someone finishes with the Login
// // Button.  See the onlogin handler attached to it in the sample
// // code below.
// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }

// window.fbAsyncInit = function() {
// FB.init({
//   appId      : '{your-app-id}',
//   cookie     : true,  // enable cookies to allow the server to access 
//                       // the session
//   xfbml      : true,  // parse social plugins on this page
//   version    : 'v2.8' // use graph api version 2.8
// });

// // Now that we've initialized the JavaScript SDK, we call 
// // FB.getLoginStatus().  This function gets the state of the
// // person visiting this page and can return one of three states to
// // the callback you provide.  They can be:
// //
// // 1. Logged into your app ('connected')
// // 2. Logged into Facebook, but not your app ('not_authorized')
// // 3. Not logged into Facebook and can't tell if they are logged into
// //    your app or not.
// //
// // These three cases are handled in the callback function.

// // FB.getLoginStatus(function(response) {
// //   statusChangeCallback(response);
// // });

// // };

// // // Load the SDK asynchronously
// // (function(d, s, id) {
// //   var js, fjs = d.getElementsByTagName(s)[0];
// //   if (d.getElementById(id)) return;
// //   js = d.createElement(s); js.id = id;
// //   js.src = "//connect.facebook.net/en_US/sdk.js";
// //   fjs.parentNode.insertBefore(js, fjs);
// // }(document, 'script', 'facebook-jssdk'));

// // // Here we run a very simple test of the Graph API after login is
// // // successful.  See statusChangeCallback() for when this call is made.
// // function testAPI() {
// //   console.log('Welcome!  Fetching your information.... ');
// //   FB.api('/me', function(response) {
// //     console.log('Successful login for: ' + response.name);
// //     document.getElementById('status').innerHTML =
// //       'Thanks for logging in, ' + response.name + '!';
// //   });
// // }

// // This is called with the results from from FB.getLoginStatus().
// function statusChangeCallback(response) {
//   console.log('statusChangeCallback');
//   console.log(response);
//   // The response object is returned with a status field that lets the
//   // app know the current login status of the person.
//   // Full docs on the response object can be found in the documentation
//   // for FB.getLoginStatus().
//   if (response.status === 'connected') {
//     // Logged into your app and Facebook.
//     testAPI();
//   } else {
//     // The person is not logged into your app or we are unable to tell.
//     document.getElementById('status').innerHTML = 'Please log ' +
//       'into this app.';
//   }
// }

// // This function is called when someone finishes with the Login
// // Button.  See the onlogin handler attached to it in the sample
// // code below.
// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }

// window.fbAsyncInit = function() {
// FB.init({
//   appId      : '{1920488714856591}',
//   cookie     : true,  // enable cookies to allow the server to access 
//                       // the session
//   xfbml      : true,  // parse social plugins on this page
//   version    : 'v2.8' // use graph api version 2.8
// });

// // Now that we've initialized the JavaScript SDK, we call 
// // FB.getLoginStatus().  This function gets the state of the
// // person visiting this page and can return one of three states to
// // the callback you provide.  They can be:
// //
// // 1. Logged into your app ('connected')
// // 2. Logged into Facebook, but not your app ('not_authorized')
// // 3. Not logged into Facebook and can't tell if they are logged into
// //    your app or not.
// //
// // These three cases are handled in the callback function.

// FB.getLoginStatus(function(response) {
//   statusChangeCallback(response);
// });

// };

// // Load the SDK asynchronously
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

// // Here we run a very simple test of the Graph API after login is
// // successful.  See statusChangeCallback() for when this call is made.
// function testAPI() {
//   console.log('Welcome!  Fetching your information.... ');
//   FB.api('/me', function(response) {
//     console.log('Successful login for: ' + response.name);
//     document.getElementById('status').innerHTML =
//       'Thanks for logging in, ' + response.name + '!';
//   });
// }




// // App ID
// // 1920488714856591

// // App Secret
// // df62e2b4a618e5743f48d61d3eed5739Reset

// // Display Name
// // tradersua app







// This is called with the results from from FB.getLoginStatus().
 function statusChangeCallback(response) {
   console.log('statusChangeCallback');
   console.log(response);
   // The response object is returned with a status field that lets the
   // app know the current login status of the person.
   // Full docs on the response object can be found in the documentation
   // for FB.getLoginStatus().
   if (response.status === 'connected') {
     // Logged into your app and Facebook.
     testAPI();
   } else {
     // The person is not logged into your app or we are unable to tell.
     document.getElementById('status').innerHTML = 'Please log ' +
       'into this app.';
   }
 }

 // This function is called when someone finishes with the Login
 // Button.  See the onlogin handler attached to it in the sample
 // code below.
 function checkLoginState() {
   FB.getLoginStatus(function(response) {
     statusChangeCallback(response);
   });
 }

 window.fbAsyncInit = function() {
 FB.init({
   appId      : '{1920488714856591}',
   cookie     : true,  // enable cookies to allow the server to access 
                       // the session
   xfbml      : true,  // parse social plugins on this page
   version    : 'v2.8' // use graph api version 2.8
 });

 // Now that we've initialized the JavaScript SDK, we call 
 // FB.getLoginStatus().  This function gets the state of the
 // person visiting this page and can return one of three states to
 // the callback you provide.  They can be:
 //
 // 1. Logged into your app ('connected')
 // 2. Logged into Facebook, but not your app ('not_authorized')
 // 3. Not logged into Facebook and can't tell if they are logged into
 //    your app or not.
 //
 // These three cases are handled in the callback function.

 FB.getLoginStatus(function(response) {
   statusChangeCallback(response);
 });

 };

 // Load the SDK asynchronously
 (function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) return;
   js = d.createElement(s); js.id = id;
   // js.src = "//connect.facebook.net/en_US/sdk.js";
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 // Here we run a very simple test of the Graph API after login is
 // successful.  See statusChangeCallback() for when this call is made.
 function testAPI() {
   console.log('Welcome!  Fetching your information.... ');
   FB.api('/me', function(response) {
     console.log('Successful login for: ' + response.name);
     document.getElementById('status').innerHTML =
       'Thanks for logging in, ' + response.name + '!';
   });
 }
//# sourceMappingURL=maps/app.js.map
