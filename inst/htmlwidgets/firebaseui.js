HTMLWidgets.widget({

  name: 'firebaseui',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        //el.innerText = x.message;

        if (HTMLWidgets.shinyMode) {
            // use setInterval to check if the map can be loaded
            // the map is dependant on the Google Maps JS resource
            // - usually implemented via callback
            var checkExists = setInterval(function(){

              if (firebase !== undefined) {
                console.log("exists");
                clearInterval(checkExists);
                initialise_firebase(x);

              }else{
                console.log("does not exist!");
              }
            }, 100);
        }
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});

function initialise_firebase(x) {

  var config = {
    apiKey: x.api_key,
    authDomain: x.auth_domain,
    databaseURL: x.database_url,
    projectId: x.project_id,
    storageBucket: x.storage_bucket,
    messagingSenderId: x.messaging_sender_id
  };
  firebase.initializeApp(config);

  var uiConfig = {
    signInSuccessUrl: 'https://www.symbolix.com.au',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'https://www.symbolix.com.au'
  };

  var firDiv = document.createElement('div');
  firDiv.id = "firebaseui-auth-container";
  document.body.appendChild(firDiv);

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start("#firebaseui-auth-container", uiConfig);
}
