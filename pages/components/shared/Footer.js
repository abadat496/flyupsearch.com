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
              <p><strong>Disclaimer : </strong>We Unityfare is a travel booking website. Before using our services, please read this disclaimer carefully. By accessing and using our website, you agree to be bound by the policy and terms and conditions.<br></br><br></br>

              Travel-related information such as prices, availability, and schedules are subject to change without notWe act as an intermediary between you and various third-party travel providers such as airlines, hotels, car rental agencies. We do not control the services provided by these providers and cannot guarantee their availability, quality, or accuracy of information.<br></br><br></br>
                 
              It is your responsibility to review for accuracy and avoid delays. We are not liable for any discrepancies or changes made by the travel provider after booking confirmation. Payments made through our website are processed securely. Unityfare may contain links to external websites or resources provided by third parties. These links are provided for your convenience only. We reserve the right to modify or update this disclaimer at any time without prior notice. 


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
