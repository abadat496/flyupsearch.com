import Head from "next/head";
import React from "react";
import Breadcrumb from "./components/shared/Breadcrumb";

const Refund = () => {
  return (
    <>
      <Head>
        <title>Refund And Cancellation Policy</title>
      </Head>
      <div>
      <Breadcrumb title={"Refund And Cancellation Policy"} />
        <div className="container-xl pt-5 inner-page">
          <div className="cul-sm-12">
            <h2>Refund And Cancellation Policy</h2>
             
            <p>This policy details the conditions under which refunds are issued for bookings that precisely includes the policy of the Airlines and other service providers. </p>

            <h5>General Principles</h5>
            <p><strong>Booking Confirmation- </strong> The bookings made from our platform are subjected to the confirmation  of the related service providers. Upon confirmation, you will receive a booking confirmation email outlining the details of your reservation, including cancellation and refund policies.
            </p>
            <br></br>


             <p><strong>Refund Eligibility- </strong> Refunds are subject to the terms and conditions of the travel provider and the type of booking made such as flight, train, cruise, rental car. Each travel provider has its own refund policy, which may differ on  various factors such as fare type, route, and timing of cancellation.
            </p>
            <br></br>



            <h5>Cancellation and Refund Process</h5>
            <p><strong>Cancellation Policy-</strong> It is suggested to review and understand the cancellation policy applicable at your particular booking. Cancellation policies can vary widely and may include penalties  for cancellations made after a certain date or time depending upon the guidelines.</p>
            <br></br>


            
            <p><strong>Requesting a Refund-</strong> In any undesirable condition, if you want to cancel the booking  please go through the policy or manual provided by the service operator. If you can initiate the refund request by mailing the provider. This involves a request along with all the details to prevail the refund.</p>
            <br></br>



            <h5></h5>
            <p><strong>Processing Time-</strong> Refunds are processed by the travel provider and may take some business days. Payment done by credit card may take two billing cycles to reflect the amount. We request you in all cases to wait and communicate with the provider.</p>
            <br></br>




            <h5>Non-Refundable Bookings </h5>
            <p>In case of the non-refundable bookings there will be no refund allowed. These measures have already been acknowledged in the start. Please read before you book.
            </p>
            <br></br>




            <h5>Circumstances Beyond Control </h5>
            <p>In cases of unforeseen circumstances which are beyond our control like any political unrest or natural disaster, refunds may be waived by the service provider but it is not guaranteed. We will try our best to serve in such situations.
            </p>
            <br></br>




            <h5>Refunds for Services Not Rendered</h5>
            <p>That unused portion of services due to any reason, will not be refunded. And this is subject to the providers policy. 
            </p>
            <br></br>



            <h5>Changes to the Refund Policy</h5>
            <p>We reserve the right to modify this Refund Policy at any time to reflect changes in our services, legal requirements, or feedback from customers. Any updates will be posted on our website with a new effective date.
            </p>
             


 
        
        


          </div>
        </div>
      </div>
    </>
  );
};

export default Refund;
