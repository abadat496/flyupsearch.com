import React, { useEffect, useState } from "react";
import { phoneNumber } from "@/constant/headerConstant";
import Link from "next/link";
import { useRouter } from 'next/router';

const Undercuttingbanner = () => {
const [showUndercutting, setShowUndercutting] = useState(false);
const router = useRouter();
  const closePopup = () => {
    setShowUndercutting(false);
  };

  
useEffect(() => {
  const handleRouteChange = () => {

    setShowUndercutting(false);

    setTimeout(() => {
      setShowUndercutting(true);
    }, 5000);
  };

  router.events.on('routeChangeComplete', handleRouteChange);

  return () => {
    router.events.off('routeChangeComplete', handleRouteChange);
  };
}, [router.events]);


  useEffect(() => {
    setTimeout(() => {setShowUndercutting(true);}, 2000)
  }, [])

  return (
    <div
    className="modal fade show custompopup"
    style={{ display: showUndercutting ? "block" : "none" }}
  >
    <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content pt-0">
          <div className="modal-footer border-0">
            <button type="button " className="btn btn-secondary btnModal" onClick={closePopup} data-bs-dismiss="modal"><i className="fa fa-close " aria-hidden="true"></i></button>
          </div>
          <div className="bannerPopup ">
            <div className="row">
              
              <div className="col-md-12 text-center">
                <h4 className="mb-0 popuptext blink">&quot;Save 25% On First Booking. Call Now To Avail Offer&quot;</h4>
                <p className="my-2  paratextPopup">Talk to a travel expert and Save 25% </p>
                <div className="booking-mobile">
                  <h3><Link href={`tel:${phoneNumber}`}><i className="fa-solid fa-headset"></i> {phoneNumber}</Link></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bool text-center my-3">
            <h2 className="wHeding">Expert Guidance On Call</h2>
          </div>
          <div className="row contentCallus">
            <div className="col-xl-6 col-md-6 popupContent mb-3 align-items-center">
            <i className="fa-solid fa-headset"></i>
              <h3>Expert guide from us <strong> experts </strong></h3>
            </div>
            <div className="col-xl-6 col-md-6 popupContent mb-3 align-items-center">
            <i className="fa-solid fa-envelope-open-text"></i>
              <h3>Immediate reservation <strong>confirmation</strong></h3>
            </div>
          </div>
          <div className="row contentCallus">
            <div className="col-xl-6 col-md-6 popupContent align-items-center mb-3">
            <i className="fa-solid fa-phone-slash"></i>
              <h3>24x7 hours <strong>cancellation</strong></h3>
            </div>
            <div className="col-xl-6 col-md-6 popupContent align-items-start mb-3">
            <i className="fa-solid fa-file-shield"></i>
              <h3>Flexible payment<strong> plans</strong></h3>
            </div>
          </div>
        </div>
    </div>
  </div>
  );
};

export default Undercuttingbanner;
