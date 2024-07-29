import React from "react";
import Head from "next/head";
import SearchForm from "./components/shared/Searchform";
import LazyImage from "./components/ui/LazyImage";
import { phoneNumber, website } from "@/constant/headerConstant";

const Home = () => {
  return (
    <>
      <Head>
        <title>{website}</title>
      </Head>
      <SearchForm reset={true} backGroundImage={"/slider.jpg"} />

      <div className="container-xl">
        <div className="row explore-main mt-5 mb-5">
          <div className="col-12 col-sm-8 mb-2 p-2">
            <div className="">
              <h2>
                DISCOVER THE <span>WORLD</span>
                <br></br> WITH OUR GUIDE - FLYUPSEARCH.COM
              </h2>
              <section>
                <p>
                  <strong>Mission </strong>- Our mission is to rejuvenate travel
                  booking experience. As life is getting busier, we all want to
                  avoid the fuss of comparing the rate of the airlines. We are
                  offering a seamless platform that empowers travellers to
                  effortlessly discover the best deals and options. We believe
                  that every dream must be fulfilled and we try that the dream
                  will not be lost in planning the journey. We aim to offer
                  tireless browsing over our platform and allow you to access
                  the best insider deals and offers. Our website is intricately
                  designed to cater our audience. We want people to dream for
                  their travel destination and live the fullest of their lives.
                </p>
              </section>

              <section>
                <p>
                  <strong>Vision </strong>- Our vision is to lead the travel
                  industry and make our platform one of the most prestigious
                  travel booking organisations. We want to share the dream of
                  every traveller by making the journey beautiful and full of
                  comfort. We want you to paint the memories on the canvas of
                  life. We clout on advanced technology to continually enhance
                  our offerings. We are ensuring amazing curated travel
                  experiences and surpass the customer expectations.
                </p>
              </section>
            </div>
          </div>

          <div className="col-12 col-sm-4 mb-2 p-2">
            <div className="hotel">
              <LazyImage
                src={"/about-us.png"}
                className="card-LazyImage"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid secure">
        <div className="container"></div>
      </div>

      <div className="hotelmain pt-5 pb-5">
        <div className="container">
          <div className="row explore-main">
            <div className="col-sm-12">
              <h2>International Holiday Packages</h2>
            </div>

            <div className="col-12 col-sm-8 mb-2 p-1">
              <div className="hotel">
                <LazyImage
                  src={"/01.jpg"}
                  className="card-LazyImage"
                  layout="responsive"
                />
                <span className="hotelbg">
                  <h3>Budapest</h3>
                  <p>398 Packages</p>
                  <p>
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i> (70694 Reviews)
                  </p>
                </span>
              </div>
            </div>

            <div className="col-12 col-sm-4 mb-2 p-1">
              <div className="hotel">
                <LazyImage
                  src={"/02.jpg"}
                  className="card-LazyImage"
                  layout="responsive"
                />
                <span className="hotelbg">
                  <h3>Rome</h3>
                  <p>267 Packages</p>
                  <p>
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i> (674 Reviews)
                  </p>
                </span>
              </div>
            </div>

            <div className="col-12 col-sm-4 mb-2 p-1">
              <div className="hotel">
                <LazyImage
                  src={"/03.jpg"}
                  className="card-LazyImage"
                  layout="responsive"
                />
                <span className="hotelbg">
                  <h3>Venice</h3>
                  <p>346 Packages</p>
                  <p>
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-regular fa-star"></i> (567 Reviews)
                  </p>
                </span>
              </div>
            </div>

            <div className="col-12 col-sm-4 mb-2 p-1">
              <div className="hotel">
                <LazyImage
                  src={"/04.jpg"}
                  className="card-LazyImage"
                  layout="responsive"
                />
                <span className="hotelbg">
                  <h3>Europe</h3>
                  <p>578 Packages</p>
                  <p>
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i> (8932 Reviews)
                  </p>
                </span>
              </div>
            </div>

            <div className="col-12 col-sm-4 mb-2 p-1">
              <div className="hotel">
                <LazyImage
                  src={"/05.jpg"}
                  className="card-LazyImage"
                  layout="responsive"
                />
                <span className="hotelbg">
                  <h3>Alaska</h3>
                  <p>578 Packages</p>
                  <p>
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-regular fa-star"></i> (3461 Reviews)
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="SpecialOffers pt-5">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-6 col-sm-12 mb-5">
              <div className="specialCard">
                <div className="specialCard__image">
                  <LazyImage src="/offer_bg_2.jpg" layout="responsive" />
                </div>
                <div className="specialCard__content">
                  <p className="text-light mb-1">Enjoy Upto</p>
                  <h3 className="text-light mb-1">10 % OFF </h3>
                  <p className="text-light">on Your Flight Booking</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-5">
              <div className="specialCard">
                <div className="specialCard__image">
                  <LazyImage src="/offer_bg_1.jpg" layout="responsive" />
                </div>
                <div className="specialCard__content">
                  <p className="text-light mb-1">Enjoy Upto</p>
                  <h3 className="text-light mb-1">15 % OFF </h3>
                  <p className="text-light">on Your Hotel Booking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
