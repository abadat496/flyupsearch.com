import React from "react";
import Head from "next/head";
import Breadcrumb from "./components/shared/Breadcrumb";
import LazyImage from "./components/ui/LazyImage";

const About = () => {
  return (
    <>
      <Head>
        <title>{"About Us"}</title>
      </Head>
      <Breadcrumb title={"About Us"} />

      <div className="container-xl inner-page">
        <div className="col-12 mt-5">
          <section>
            <p>
              <strong>Mission </strong>- Our mission is to rejuvenate travel
              booking experience. As life is getting busier, we all want to
              avoid the fuss of comparing the rate of the airlines. We are
              offering a seamless platform that empowers travellers to
              effortlessly discover the best deals and options. We believe that
              every dream must be fulfilled and we try that the dream will not
              be lost in planning the journey. We aim to offer tireless browsing
              over our platform and allow you to access the best insider deals
              and offers. Our website is intricately designed to cater our
              audience. We want people to dream for their travel destination and
              live the fullest of their lives.
            </p>
          </section>

          <section>
            <p>
              <strong>Vision </strong>- Our vision is to lead the travel
              industry and make our platform one of the most prestigious travel
              booking organisations. We want to share the dream of every
              traveller by making the journey beautiful and full of comfort. We
              want you to paint the memories on the canvas of life. We clout on
              advanced technology to continually enhance our offerings. We are
              ensuring amazing curated travel experiences and surpass the
              customer expectations.
            </p>
          </section>

          <section>
            <h5>Why Choose Us- </h5>
            <p>
              Why Choose Flyupsearch? Because we know that travelling is not
              just a chore, it&lsquo;s a passion for some and a hobby for
              others. People do self-contemplation while travelling to the
              places they always wanted to explore. So discover unmatched
              convenience with us. We have a wide range of flight search and
              travel booking services. Flyupsearch is the trusted travel partner
              who will help you travel the world. We are benefitting our
              customers with competitive prices, specialised booking tools, and
              personalised assistance. We are promising you an unstressed and
              tailored as per your needs. Come join the chain with thousands of
              satisfied travellers who rely on us for their travel adventures
              worldwide.
            </p>
          </section>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default About;
