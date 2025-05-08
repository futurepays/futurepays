import { useEffect } from "react";

const useFacebookScript = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1015607187330513", // Replace with your App ID
        cookie: true,
        xfbml: false,
        version: "v12.0",
      });

      window.FB.AppEvents.logPageView();
    };

    if (!document.getElementById("facebook-jssdk")) {
      const js = document.createElement("script");
      js.id = "facebook-jssdk";
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      document.body.appendChild(js);
    }
  }, []);
};

export default useFacebookScript;
