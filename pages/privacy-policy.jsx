import Head from "next/head";
import React from "react";
import Breadcrumb from "./components/shared/Breadcrumb";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Breadcrumb title={"Privacy Policy"} />
      <div className="container-xl pt-5 inner-page">
        <div className="cul-sm-12">
          <h2>Privacy Policy</h2>
           <p>Your privacy is critically important to us. We are updating and amending our policies to guard the data and improving the interface. You are welcome to review our policies from time to time and give us feedback related to it.  This privacy policy is on the lines of what information a travel booking platform collects from you. And also what measures are they taking to protect this information.
              </p>

              
              <h5>Information We Collect</h5>
              <p className="mb-0">
                <strong>Information You Provide to Us</strong>
              </p>
              <p>There is some information which you provide us in order to book the services. This information is for identification purposes only.

              </p>

              <p className="mb-0">
                <strong>Personal Information-</strong>
              </p>
              <p>While booking our services like flight, rental cars, trains, and cruises, you give us information like your name, address, email address, contact details, and travel preferences. We precisely take this information  to book the tickets on your behalf and intimate you if there is any update and changes related to travel.

              </p>

              <p className="mb-0">
                <strong>Travel Companion Information</strong>
              </p>
              <p>n any scenario you are booking on the behalf of your friend and family, we always request you to provide information related to that person. By filling their information you can pay on your side.

              </p>

              <p className="mb-0">
                <strong>Information We Collect Automatically</strong>
              </p>
              <p>Information that might be collected automatically by the system and then be used for marketing and advertising purposes that does not contain any of your personal data. 
              </p>

              <p className="mb-0">
                <strong>Usage Data</strong>
              </p>
              <p>Such information is merely analytics purposes which could create an interaction  between us. We collect the information regarding your visits on our websites, which includes the information such as your browser types, page visited, time spent on the website, and IP address.
              </p>


              <p className="mb-0">
                <strong>Information from Third Parties</strong>
              </p>
              <p>We collect the information from the travel partners that is completely related to services and booking. 
              </p>

              <p className="mb-0">
                <strong>Travel Partners</strong>
              </p>
              <p>The information which we collect from third parties mostly comprise of the data related to their booking services and preferences.
              </p>


              <p className="mb-0">
                <strong>How We Use Your Information </strong>
              </p>
              <p>Whatever the information we are collecting from you, is precisely for booking and reservation purposes. The information is entirely being used in managing the booking service request. Furthermore, we often used such information for making a marketing footprint and analysing the user pattern on ourwebsite.  We believe communication is the key and we communicate about our offers and deals to you. To give you personalised experience and improve our services simultaneously, we are using your information.
              </p>

              <h5>Data Security Measures</h5>
              <p>We are implementing the top category guidelines in terms of protecting the data. The top- level organisational measures are to protect your information from unauthorised access, disclosure, and use. We assure you that there is no leakage of any data while transmission to our travel partners such as train,flight, and rental cars operator. We are adherent to our authenticity and credibility standards. </p>

              <h5>Third-Party Disclaimer</h5>
              <p>Information we share with third parties is to fulfil your booking requirements. Such information is only given to the service providers who assist us in delivering. These partners are bound with law to keep the data secured with them.
              </p>

              <h5>Your Rights</h5>
              <p>You have certain rights related to your personal information under data protection laws. As you have the right to access, rectify, or request for the deletion of any personal data.</p>

              <h5>Data Retention</h5>
              <p>The retention of the data is only till all your service requests  have been fulfilled.  As mentioned in the above privacy policy we will keep some information to update you with our new deals and offers.</p>


              <h5>Children&lsquo;s Privacy</h5>
              <p>Our services are strictly not directed to children below age 13. We do not collect any personal information knowingly.  If in any case you get to know that the information is provided by the children to us , you can contact us. We will remove that information from our database.  
              </p>

              <h5>Changes to This Privacy Policy</h5>
              <p>For future improvement, We may update our policy from time to time. We will definitely try to communicate any changes regarding policy change but we encourage our customers to review our policy before booking. </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
