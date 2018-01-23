HTMLWidgets.widget({

  name: 'firebaseui',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        //el.innerText = x.message;

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

          console.log("creating firebaseui-auth-container div");
          var firDiv = document.createElement('div');
          firDiv.id = "firebaseui-auth-container";
          document.body.appendChild(firDiv);
          console.log("it has been created")

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
