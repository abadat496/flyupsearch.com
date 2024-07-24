import { useEffect } from "react";
import Head from "next/head";

const GoogleTag = () => {
  useEffect(() => {
    const script = document.createElement("script");
    // script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16454223905";
    // script.src = "https://www.googletagmanager.com/gtag/js?id=G-GRENC064QH";
    script.async = true;

    // Load the scripts after the initial rendering
    document.body.appendChild(script);

    script.onload = () => {
      // Execute your scripts here after the scripts are loaded
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments); 
      }
      gtag("js", new Date());

      // gtag("config", "G-GRENC064QH");
      // gtag("config", "AW-16454223905");

      // gtag('config', 'AW-16454223905/bfVMCMDd1pAZEKGQ_qU9', {
      //   'phone_conversion_number': '(877) 306-3221'
      // });
    };

    // Clean up the script element when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleTag;
