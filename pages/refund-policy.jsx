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

            <h5>Refund Policy</h5>
            <p>
              Simultaneously, we are expanding our services so as to meet the
              travel needs of the travellers. We adhere to honesty and
              transparency in the refund policy. We work diligently to
              facilitate refund as per the policies set by the airlines. Refund
              eligibility and the amount refunded depends on various factors
              like fare type, route, and specific guidelines. When a
              cancellation request is made, we process refunds after the
              approval from the airlines. The refunded amount will be accredited
              to the source. Please note that some fares, such as non-refundable
              tickets, may not be eligible for a refund. Cancellation fees are
              determined by the airlines and will be deducted from the total
              refund amount. We encourage customers to review the cancellation
              and refund policies associated with their booking before
              finalising{" "}
            </p>
            <br></br>

            <h5>Cancellation Policy</h5>
            <p>
              Desires bring continuous changes to our lives. So we understand
              the need of the hour as a traveller. That throbbing heart is on
              making desirable plans any time. As to avoid delays, we offer
              cancellation to our users under policy norms and rules. Our
              cancellation policy may vary in different airlines and fare may
              also vary depending upon the fare type. Though we offer zero
              charges cancellation if done within 24 hours. When you make a
              flight reservation through us, you agree to comply with the
              cancellation policy of the respective airline.
            </p>
            <br></br>

            <p>
              <strong>Cancellation Process -</strong> To cancel your flight
              booking, please contact our customer support team. Cancellation
              will be done over the call. We will assist you with the
              cancellation policy of the airline by which you have booked your
              reservation. Each and every airline has its own cancellation
              policy, which may include penalties and charges. But that depends
              on several factors such as fare type, route, and time of
              cancellation.
            </p>
            <br></br>

            <p>
              <strong>Cancellation Fees -</strong> The cancellation fee or
              charges may vary, that is solely on the airline cancellation
              guidelines and fare related policy. This fee is typically deducted
              from the total amount paid for the booking. In cases of
              non-refundable tickets, one can not claim for the refund upon the
              cancellation.{" "}
            </p>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refund;
