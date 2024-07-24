import Head from "next/head";
import React from "react";
import Breadcrumb from "./components/shared/Breadcrumb";

const Term = () => {
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions</title>
      </Head>
      <Breadcrumb title={"Terms and  Conditions"} />
      <div className="container-xl pt-5 inner-page">
        <div className="cul-sm-12">
          <h2>Terms &amp; Conditions</h2>
          <p>
            By using our website, you comply with all our terms and conditions.{" "}
          </p>

          <h5>Booking Process </h5>
          <p>
            <strong>Accuracy of Information-</strong> We request you to provide
            accurate and complete information while booking. We clearly state
            that we don&apos;t take responsibility incase of errors and
            inaccuracies.{" "}
          </p>
          <br></br>

          <p>
            <strong>Booking Confirmation-</strong> The bookings related to any
            services like flights, trains, rental cars, and cars are subject to
            availability and also on the confirmation by the respective service
            provider. Once it is confirmed, you will get the notification by the
            email containing all the details of your reservation.
          </p>
          <br></br>

          <p>
            <strong>Payment - </strong> Payment must be made in full at a time
            there is no procedure of paying it later. Prices are specified and
            include taxes and fees.
          </p>
          <br></br>

          <h5>Cancellation and Changes</h5>
          <p>
            The cancellation policy completely depends on the type of the
            booking and the policy of the service provider. It is the
            responsibility of the customer to review and read our policy
            minutely to avoid delays. Any changes related to date, time, and
            passenger details may be subjected to fees and also the availability
            to the booking. We don&apos;t promise the changes facility but we
            assure you the best assistance from us.{" "}
          </p>
          <br></br>

          <h5>Travel Documents and Insurance </h5>
          <p>
            It is your responsibility to have the necessary documents like
            passport, visa etc required for your journey. By providing
            inadequate documents to officials resulting in any consequences; we
            take no responsibility. We recommend purchasing travel insurance
            from the service providers. This will protect you from unforeseen
            circumstances like any medical emergencies, or any other problem.
          </p>
          <br></br>

          <h5>Limitation of Liability </h5>
          <p>
            We are the bridge between you and the service providers. We always
            thrive to provide a smooth booking experience, we do not guarantee
            the availability and the quality from the travel provider. It is not
            our liability in the matter of damage and losses.
          </p>
          <br></br>

          <h5>User Responsibilities </h5>
          <p>
            While visiting our website you agree with all the applicable laws,
            regulations, and policies. It is the user&apos;s responsibility to
            adhere with the truthfulness and provide accurate on time
            information. Please keep your contact details up to date to maintain
            the communication between us.
          </p>
          <br></br>

          <h5>Intellectual Property </h5>
          <p>
            All content and materials on our website, including text, graphics,
            logos, and images, are the intellectual property of flyupsearch.com.
            It is protected by copyright and other intellectual property laws.
            You can not sell, republish, or make multiple copies of any of the
            content of our website. Any unauthorised access to the intellectual
            property of the website may violate the law and may result in legal
            consideration.
          </p>
          <br></br>

          <h5>Amendments and Updates </h5>
          <p>
            Any changes related to any policy will be effective immediately, we
            will notify you of the changes. But in any scenario you will not be
            notified it is your responsibility to assess and review before
            booking any services
          </p>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Term;
