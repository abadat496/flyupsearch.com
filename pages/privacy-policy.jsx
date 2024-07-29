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
          <p>
            Privacy policy is the set of guidelines which has been provided in
            the public domain to keep the transparency awakened. We are
            committed to protecting your privacy and assure you with the top
            security. This Privacy Policy takes you to the information about how
            we collect, use, disclose, and safeguard your information when you
            visit our website. By using our website, you consent to each
            guideline and practices mentioned in this policy.{" "}
          </p>
          <br></br>

          <h5>Information We Collect</h5>
          <h6>Personal Information</h6>
          <p>
            To book tickets on your behalf, we collect personal information such
            as your name, email address, phone number, billing address, and
            payment information. This information is necessary for processing
            bookings, managing your account, and providing customer support.
          </p>
          <br></br>

          <h6>Non-Personal Information</h6>
          <p>
            We also collect non-personal information for marketing and
            analytical purposes. This includes data like your IP address,
            browser type, device type, operating system, and browsing behavior.
            This information helps us analyze trends, improve website
            functionality, and enhance user experience.
          </p>
          <br></br>

          <h5>Use of Information</h5>
          <h6>Processing Bookings</h6>
          <p>
            Your personal information is used to process and fulfill flight
            reservations and other travel services. It also helps us inform you
            about travel updates if necessary.
          </p>
          <br></br>

          <h6>Improving User Experience</h6>
          <p>
            We use non-personal information to understand website analytics,
            diagnose technical issues, monitor user metrics, and enhance our
            services.
          </p>
          <br></br>

          <h6>Marketing and Personalization</h6>
          <p>
            With your consent, we use your information for personalization and
            to send promotional offers. We may offer customized ads and deals
            based on your preferences and interests.
          </p>
          <br></br>

          <h5>Data Sharing and Disclosure</h5>
          <p>
            We do not sell or share your data with unknown parties. We may share
            information with third-party service providers for technological
            support or website operation. These providers access your personal
            information only to perform specific tasks and are obligated to keep
            your data secure. We may also disclose information in response to
            lawful requests by public authorities for national security
            purposes.
          </p>
          <br></br>

          <h5>Data Security</h5>
          <p>
            We implement advanced security measures, exceeding industry
            standards, to protect your personal information from unauthorized
            access, use, disclosure, alteration, or destruction. This includes
            access control, encryption, and regular security assessments. We
            conduct audits to ensure the security of our systems.
          </p>
          <br></br>

          <h5>Your Rights and Choices</h5>
          <p>
            You have the right to access, correct, or update your personal
            information. You can manage your preferences for marketing
            communications and opt out of promotional emails at any time.
          </p>
          <br></br>

          <h5>Updates to This Privacy Policy</h5>
          <p>
            We may update this Privacy Policy periodically. Updated policies
            will be posted on our website. We encourage you to review the
            privacy policy before booking with us. Significant changes will be
            communicated through appropriate channels.
          </p>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Privacy;
