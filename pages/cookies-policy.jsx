import Head from "next/head";
import React from "react";
import Breadcrumb from "./components/shared/Breadcrumb";

const Refund = () => {
  return (
    <>
      <Head>
        <title>Cookies Policy</title>
      </Head>
      <div>
        <Breadcrumb title={"Cookies Policy"} />
        <div className="container-xl pt-5 inner-page">
          <div className="cul-sm-12">
            <h2>Cookies Policy</h2>

            <p>
              Your safety is important to us. For this we use cookies and
              related technologies to enhance your browsing experience and offer
              you the personalised content These cookies also analyse traffic
              and your footprint on our platform. This Cookies Policy explains
              how we use cookies on our website and mobile applications.
            </p>

            <h5>What are Cookies? </h5>
            <p>
              Cookies are small text files that are stored from the server on
              your device such as computer, mobile, and tablet when you visit a
              website. The cookies are multipotential, serve various purposes,
              such as remembering your preferences, enhancing website
              functionality, and providing personalised content.
            </p>
            <br></br>

            <h5>Types of Cookies We Use</h5>
            <p>
              <strong>Essential Cookies </strong> The very basic essential
              cookies to cater the function of the website. These cookies are
              necessary for the operation of our website. They enable core
              functionalities such as navigation, processing bookings, and
              secure access to your account. By disabling these cookies it is
              possible that you may not be able to function.{" "}
            </p>
            <br></br>

            <h5>Consent to Use of Cookies </h5>
            <p>
              By using our portal, you consent to the use of cookies as
              described in this policy. You can manage your cookie preferences
              through your browser settings or by disabling the specific.{" "}
            </p>
            <br></br>

            <h5>Your Choices Regarding Cookies </h5>
            <p>
              The control of the cookie on your device is in your hand. You can
              manage and control the cookies by disabling them, blocking them ,
              or partially agreeing with some of them. Please note that this has
              some limitations. By disabling essential or basic cookies, you
              might not get to serve the website. As this could hamper the basic
              functionality of the website.{" "}
            </p>
            <br></br>

            <h5>Managing Cookies </h5>
            <p>
              It&lsquo;s completely the freedom of the users to manage the
              cookies as per their choice. You can control and manage cookies in
              various ways-{" "}
            </p>

            <p>
              <strong>Browser Settings </strong> Most of the web browsers allow
              you to control cookies through their settings. You can typically
              block or delete cookies from your browser settings. BUt always
              remember disabling the important cookies may block your usage of
              the website.
            </p>
            <br></br>

            <p>
              <strong>Cookie Consent Tool</strong> We provide a cookie consent
              management tool that allows you to customise your cookie
              preferences for our website.<br></br>
              We request the users to know the importance of the specific
              cookies before disabling one. Blocking or deleting certain cookies
              may affect the functionality of our website and your user
              experience. Changes to your cookie preferences may require you to
              refresh your browser for the changes to take effect.
            </p>
            <br></br>

            <h5>Updates to Our Cookies Policy</h5>
            <p>
              As a travel company, we hold the right to change or customise any
              of the content or policy. We may update this Cookies Policy from
              time to time to reflect changes in our use of cookies or legal
              requirements. We will notify you of any material changes by
              posting the updated policy on our website or through other
              appropriate means. Else by visiting and reading the policy before
              booking is the best way to avoid hassle.{" "}
            </p>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refund;
