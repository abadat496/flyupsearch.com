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
          <h2>Terms and Conditions</h2>
          <p>
            Hello travellers! These Terms and Conditions govern your use of our
            website, mobile applications, and services provided by Flyupsearch.
            By accessing or using our website, you agree to comply with these
            Terms. Please read them carefully before using our services.
          </p>

          <h5>Scope of Services</h5>
          <p>
            Flyupsearch provides an online platform where users can search for
            and book flights, hotels, car rentals, and other travel-related
            services. We act as an intermediary between you and travel suppliers
            to facilitate bookings. Our role is limited to facilitating
            communication and transactions between you and the travel suppliers.
          </p>

          <h5>Booking and Payments</h5>
          <p>
            <strong>Booking:</strong> When you make a booking through
            Flyupsearch, you agree to the terms and conditions of the respective
            travel supplier, including cancellation policies, refund policies,
            and any additional terms specific to the service booked.
          </p>
          <p>
            <strong>Payments:</strong> Payment processing for bookings made
            through us is handled by secure third-party payment processors. By
            providing payment information, you authorize us to facilitate the
            transaction and charge your account accordingly.
          </p>

          <h5>User Responsibilities</h5>
          <p>
            You are responsible for providing accurate and complete information
            when making bookings through us. You agree to comply with all
            applicable laws, regulations, and travel requirements when using our
            services, including visa, passport, and health requirements.
          </p>

          <h5>Modifications and Cancellations</h5>
          <p>
            Changes to bookings, including dates, destinations, or passenger
            details, may be subject to fees or restrictions imposed by travel
            suppliers. We will assist with modifications to the extent possible.
            Cancellation policies vary by travel supplier and booking. You agree
            to review and adhere to the cancellation policy applicable to your
            booking.
          </p>

          <h5>Intellectual Property</h5>
          <p>
            The content and intellectual property on Flyupsearch, including
            logos, trademarks, text, images, and software, are owned or licensed
            by us. You agree not to use, reproduce, distribute, or modify any
            content from our website without our prior written consent.
          </p>

          <h5>Limitation of Liability</h5>
          <p>
            We are not liable for any direct, indirect, incidental,
            consequential, or punitive damages arising from your use of our
            services, including but not limited to booking errors, travel
            disruptions, or delays. We are not liable for acts, errors,
            representations, warranties, breaches, or negligence of travel
            suppliers.
          </p>

          <h5>Privacy</h5>
          <p>
            Your privacy is important to us. Please review our Privacy Policy to
            understand how we collect, use, disclose, and protect your personal
            information when you use our website.
          </p>

          <h5>Changes to Terms</h5>
          <p>
            We may update these Terms from time to time without prior notice.
            The updated Terms will be effective upon posting on Flyupsearch.
            Your continued use of our services after the updated Terms are
            posted constitutes your acceptance of the changes.
          </p>

          <br></br>
        </div>
      </div>
    </>
  );
};

export default Term;
