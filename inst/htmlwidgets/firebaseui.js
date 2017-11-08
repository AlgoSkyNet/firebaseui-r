HTMLWidgets.widget({

  name: 'firebaseui',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        //el.innerText = x.message;
        //console.log(el);

        var gStaticScript = document.createElement('script');
        //gStaticScript.type = 'text/javascript';
        gStaticScript.src = 'https://www.gstatic.com/firebasejs/4.6.1/firebase.js';

        document.getElementsByTagName('head')[0].appendChild(gStaticScript);

        var firDiv = document.createElement('div');
        firDiv.id = "firebaseui-auth-container";
        document.body.appendChild(firDiv);


        var config = {
            apiKey: "AIzaSyAFA6pgx3YT0Bh3myVEk2NHHxbgmOD_BCk",
            authDomain: "fir-ui-r.firebaseapp.com",
            databaseURL: "https://fir-ui-r.firebaseio.com",
            projectId: "fir-ui-r",
            storageBucket: "",
            messagingSenderId: "170770909575"
          };

        firebase.initializeApp(config);

        var uiConfig = {
          signInSuccessUrl: "http://www.symbolix.com.au",
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
          tosUrl: "http://www.symbolix.com.au"
        };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
      ui.start("#firebaseui-auth-container", uiConfig);

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
