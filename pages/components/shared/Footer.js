import React from "react";
import Link from "next/link";
import { quickLinks, topAirlines } from "@/constant/commonConstants";
import { callIcon, phoneNumber } from "@/constant/headerConstant";
import LazyImage from "../ui/LazyImage";

const Footer = ({ langData }) => {
  return (
    <>
 


      <div className="container-fluid footer-bg pt-5 pb-4">
        <div className="container-lg">
          <div className="row">
           


            <div className="col-12 col-sm-6 col-lg-3 col-xl-3 top-margin">
              <h6>Quick Links</h6>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}> 
                    <Link href={`${link.path}`}> <i class="fa-regular fa-square-check"></i> {link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="col-12 col-sm-6 col-lg-3 col-xl-3 top-margin">
              <h6>Top Airlines</h6>
              <ul>
                {topAirlines.map((airline, index) => (
                  <li key={index}>
                    <Link href={`${airline.path}`}><i className="fa-solid fa-arrow-right"></i> {airline.label}</Link>
                  </li>
                ))}
              </ul>
            </div> */}
            <div className="col-12 col-sm-6 col-lg-4 col-xl-4 top-margin">
              <h6>Contact Info</h6>
              <ul>
                <li>
                  <Link href="#">
                  <i class="fa-solid fa-location-dot"></i>
                  <strong>Faresoracle Enterprises</strong><br></br>
                  448A, Udyog Vihar Phase V Rd, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana 122022
                  </Link>
                </li>

                 
                
                <li>
                  <Link href="mailto:info@flyupsearch.com">
                    {" "}
                    <i class="fa-regular fa-envelope"></i>  info@flyupsearch.com
                  </Link>
                </li>
                <li>
                  <Link href={`tel:${langData?.phoneNumber}`}><i class="fa-solid fa-phone-volume"></i> {langData?.phoneNumber}</Link>
                </li>
              </ul>
            
            </div>

            <div className="col-12 col-sm-12 col-lg-5 col-xl-5 mb-5 top-margin">
            <h6>Secure Payment System</h6>
            <div className="payment_icon"><ul >
              <li><LazyImage 
                src="/icons-p10.png"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              /></li>
              <li><LazyImage 
                src="/icons-p7.png"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              /></li>

              <li><LazyImage 
                src="/icons-p11.png"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              /></li>


                <li><LazyImage 
                src="/icons-p12.png"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              /></li>


                <li><LazyImage 
                src="/icons-p9.png"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              /></li>


                <li><LazyImage 
                src="/icons-p8.png"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              /></li>
              
              </ul>
              </div>
            </div>


            <div className="col-12 col-sm-12 col-lg-12 col-xl-12 top-margin">
              <p><strong>Disclaimer : </strong>We toil to deliver accurate and updated information to our users. All the travel information, including flight schedules, prices, and availability of the services is subjected to change without notice. We make efforts to book your service with full accuracy and reliability. Any false information provided by you does not guarantee the service. We do not take warrant or guarantee for fulfilling any services While we make every effort to ensure the accuracy of the information presented on our website and mobile applications, we do not warrant or guarantee the completeness, reliability, or timeliness of any information provided. Complete itineraries and the prices for any service displayed on the platform is sourced by the airlines.We act solely as an intermediary in facilitating bookings between you and these third-party providers. Any bookings made through us are subject to the terms and conditions, including cancellation policies and refund policies, of the respective travel suppliers.
              <br></br><br></br>
                 
              We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services, including but not limited to errors, inaccuracies, or omissions in the information provided, disruptions in travel plans, or changes in prices or availability of travel services. We recommend that you verify all travel details directly with the respective travel supplier before making any bookings. By using our website you agree that we shall not be responsible for any loss, injury, or inconvenience caused by reliance on any information provided on our platform. We encourage you to review the terms and conditions, privacy policies, and cancellation policies of the travel suppliers before making any bookings.

              </p>
              
              
            </div>

          </div>
        </div>
      </div>
      <div className="container-fluid footer-bottom">
        <div className="container-lg footer-border">
          <div className="row">
            <div className="col-12 col-lg-8">
              <p>Copyright &copy; 2024 flyupsearch.com. All Rights Reserved. ( Parent Company : Faresoracle Enterprises )</p>
            </div>

            

          </div>

        </div>
      </div>
      <div className="fixed-bottom call-bg d-block d-md-block d-lg-none">
      <Link href={`tel:${langData?.phoneNumber}`}>
         {/* <p>Speical Discounted Deals On Phone Call Only</p> */}
          <h4><LazyImage 
                src="/helpdesk.gif"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              />  {langData?.phoneNumber}</h4>
        </Link>
      </div>

      {/* <div className="fixed-top call-bg d-block d-md-block d-lg-none">
        <Link href={`tel:${langData?.phoneNumber}`}>
          <h4 className="blink">{langData?.phoneNumber}</h4>
        </Link>
      </div> */}


    </>
  );
};

export default Footer;
