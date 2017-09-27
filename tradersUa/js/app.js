console.log('msg');
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10&appId=1920488714856591";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));


// function myFacebookLogin() {
//   FB.login(function(){}, {scope: 'publish_actions'});
// }
window.fbAsyncInit = function() {
    FB.init({
      appId            : '1920488714856591',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });
    FB.AppEvents.logPageView();
    console.log(FB);
  
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      console.log('Logged in.');
      //codingeverybody/permalink/1802935303080331/?
    /* make the API call */
    FB.api(
        "1920488714856591",
        function (response) {
          console.log(response);
          if (response && !response.error) {
            console.log(response);
          }
        }
    );
    }
    else {
      FB.login();
    }
  });
  };
  // (function(d, s, id) {
  //   var js, fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) return;
  //   js = d.createElement(s); js.id = id;
  //   js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10&appId=1920488714856591";
  //   fjs.parentNode.insertBefore(js, fjs);
  // }(document, 'script', 'facebook-jssdk'));

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     // js.src = "//connect.facebook.net/en_US/sdk.js";
     // js.src = "https://connect.facebook.net/en_US/sdk.js";
     js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10&appId=1920488714856591";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



//# sourceMappingURL=maps/app.js.map
