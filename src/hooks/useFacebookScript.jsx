import { useEffect } from "react";

const useFacebookScript = () => {
  useEffect(() => {
    // Immediately invoked function expression (IIFE) to load the Facebook SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0]; // Get the first <script> tag
      if (d.getElementById(id)) return; // If the SDK script is already in the document, don't load it again
      js = d.createElement(s); js.id = id; // Create a new <script> tag with the given id
      js.src = "https://connect.facebook.net/en_US/sdk.js"; // Facebook SDK script URL
      fjs.parentNode.insertBefore(js, fjs); // Insert the script before the first <script> tag
    }(document, 'script', 'facebook-jssdk')); // Invoke the function immediately

    // Initialize the Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: import.meta.env.VITE_FACEBOOK_APP_ID, // Replace with your Facebook App ID
        cookie: true,
        xfbml: true, // Enable XFBML if you're using Facebook's widgets (like the login button)
        version: "v15.0", // Use the latest version of the SDK
      });

      window.FB.AppEvents.logPageView(); // Log page view event
      window.FB.isReady = true; // Mark the SDK as ready
    };
  }, []); // Empty dependency array ensures this runs only once, when the component is mounted
};

export default useFacebookScript;
