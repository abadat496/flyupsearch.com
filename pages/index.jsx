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

      <div className="container-fluid secure">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="features-item">
                <div className="features-icon">
                  <LazyImage
                    src="/airplane-ticket.png"
                    alt="..."
                    height={60}
                    width={60}
                  />
                </div>
                <div className="features-content">
                  <h6 className="title">Air Tickets</h6>
                  <p>Enjoy hassle-free experience</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="features-item">
                <div className="features-icon">
                  <LazyImage src="/cruise.png" height={60} width={60} />
                </div>
                <div className="features-content">
                  <h6 className="title">Voyages & Cruises</h6>
                  <p>Sail with premium luxury</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="features-item">
                <div className="features-icon">
                  <LazyImage
                    src="/building.png"
                    height={60}
                    width={60}
                    alt="..."
                  />
                </div>
                <div className="features-content">
                  <h6 className="title"> Hotel Bookings</h6>
                  <p>Accommodate at prime locations </p>
                </div>
              </div>
            </div>


            <div className="col-md-3 mb-4">
              <div className="features-item">
                <div className="features-icon">
                  <LazyImage
                    src="/tourism.png"
                    height={60}
                    width={60}
                    alt="..."
                  />
                </div>
                <div className="features-content">
                  <h6 className="title"> Summer Tours</h6>
                  <p>Unseal the best summer tours</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>



      <div className="hotelmain pt-5 pb-5">
       <div className="container">
        <div className="row explore-main">
        <div className="col-sm-12">
         <h2>International Holiday Packages</h2>
        </div>

        <div className="col-12 col-sm-3 mb-2 p-1">
          <div className="hotel">
          <LazyImage
            src={"/01.jpg"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <span className="hotelbg">
            <h3>Budapest</h3>
            <p>398 Packages</p>
            </span>
            </div>
          </div>

          <div className="col-12 col-sm-3 mb-2 p-1">
          <div className="hotel">
          <LazyImage
            src={"/02.jpg"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <span className="hotelbg">
            <h3>Rome</h3>
            <p>267 Packages</p>
            </span>
            </div>
          </div>

          <div className="col-12 col-sm-3 mb-2 p-1">
          <div className="hotel">
          <LazyImage
            src={"/03.jpg"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <span className="hotelbg">
            <h3>Venice</h3>
            <p>346 Packages</p>
            </span>
            </div>
          </div>


          <div className="col-12 col-sm-3 mb-2 p-1">
          <div className="hotel">
          <LazyImage
            src={"/04.jpg"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <span className="hotelbg">
            <h3>Europe</h3>
            <p>578 Packages</p>
            </span>
            </div>
          </div>

          <div className="col-12 col-sm-3 mb-2 p-1">
          <div className="hotel">
          <LazyImage
            src={"/05.jpg"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <span className="hotelbg">
            <h3>Alaska</h3>
            <p>578 Packages</p>
            </span>
            </div>
          </div>

          <div className="col-12 col-sm-3 mb-2 p-1">
          <div className="hotel">
          <LazyImage
            src={"/06.jpg"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <span className="hotelbg">
            <h3>Puerto Rico</h3>
            <p>186 Packages</p>
            </span>
            </div>
          </div>


          <div className="col-12 col-sm-3 mb-2 p-1">
          <div className="hotel">
          <LazyImage
            src={"/07.jpg"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <span className="hotelbg">
            <h3>Hawaii</h3>
            <p>345 Packages</p>
            </span>
            </div>
          </div>



          <div className="col-12 col-sm-3 mb-2 p-1">
          <div className="hotel">
          <LazyImage
            src={"/08.jpg"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <span className="hotelbg">
            <h3>Switzerland</h3>
            <p>804 Packages</p>
            </span>
            </div>
          </div>
 
          </div>
          </div>
          </div>



        <div className="container-xl">
        <div className="row explore-main mt-5 mb-5">
         <div className="col-12 col-sm-8 mb-2 p-2">
        <div className="hotel">
          <h2>About - unityfare.com</h2>
          <p>Unityfare is the epitome in the travel domain. Let’s take a deep dive in the world of adventure and thrill. We are the platform where every journey begins with a promise of discovery. We are thrilled to invite you to come along and explore the world with our Alluring services.  </p>

          <p><strong>Who We Are : </strong> 
          Our team is full of  passionate travellers who will assist you, plan on behalf of you.  We are curators of your journey. We are a dedicated and skilled travel company, dealing in a variety of services. 
          </p>

          <p><strong>What We Do : </strong> 
          Are you ready to start a journey with us? We are amalgamating adventure with utmost facilities. We are dealing in several verticals related to travel. We are continuously enhancing our services and booking the best for you. 
 </p>

          </div>
          </div>

          <div className="col-12 col-sm-4 mb-2 p-2">
            <div className="hotel">
          <LazyImage
            src={"/about-img.png"} 
            className="card-LazyImage"
            layout="responsive"
            />
            </div>
          </div>

      

        </div>
      </div>


<div className="whyus">
      <div className="container">
        <div className="row explore-main mt-2">
          <div className="col-sm-12 text-center">
            <h2>Why Choose Us?</h2>
            <p className="mb-4">Choosing unityfare.com means choosing reliability, convenience, and personalized service:</p>
          </div>

          <div className="col-12 col-sm-3 mb-2 text-center htlwhy">
            <div className="hotel">
             <LazyImage
            src={"/login.png"} 
            className="card-LazyImage"
            layout="responsive"
            />
            
            <p><strong>User-Friendly Platform </strong><br></br> Our website and mobile app offers the best and effortless booking experience.
            </p>
             
            </div>
          </div>


          <div className="col-12 col-sm-3 mb-2 text-center htlwhy">
            <div className="hotel">
             <LazyImage
            src={"/reward.png"} 
            className="card-LazyImage"
            layout="responsive"
            />
            
            <p><strong>Competitive Pricing </strong><br></br> Competitive prices and exclusive deals on flights, hotels, and packages will surprise you.
            </p>
             
            </div>
          </div>


          <div className="col-12 col-sm-3 mb-2 text-center htlwhy">
            <div className="hotel">
             <LazyImage
            src={"/help-desk.png"} 
            className="card-LazyImage"
            layout="responsive"
            />
         
            <p><strong>24/7 Customer Support </strong> <br></br>Dedicated customer support team is available by 24*7 to help you in your travel  journey.
            </p>
            
            </div>
          </div>


          <div className="col-12 col-sm-3 mb-2 text-center htlwhy">
            <div className="hotel">
             <LazyImage
            src={"/credit-card.png"} 
            className="card-LazyImage"
            layout="responsive"
            />
            
            <p><strong>Secure Booking </strong><br></br> Be assured regarding your safety and security. </p>
             
            </div>
          </div>

        </div>
      </div>
      </div>



     



    </>
  );
};

export default Home;
