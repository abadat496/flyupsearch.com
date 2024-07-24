import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { phoneNumber } from "@/constant/headerConstant";
import { flights } from "@/constant/flight";
import LazyImage from "../ui/LazyImage";

const MobileSection = ({langData}) => {
  const router = useRouter();
  const [airlineDetail, setAirlineDetail] = useState(null);
  const { query } = router;
  useEffect(() => {
    if (query && query?.airline) {
      const airline = flights.find((a) => a.rout === query?.airline);
      setAirlineDetail(airline);
      
    } 
  }, [query]);

  return (
    <div className="mob_section">
      <div className="air_spacial_phone_view">
        <Link href={`tel:${langData?.phoneNumber}`}>
          <div className="air_spacial_main">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="air_logo_area">
                    <h4>
                      <LazyImage src={`/logo-logo.png`} layout="responsive"/>
                    </h4>
                    <h5>Airline Reservations!!</h5>
                    <h6>Un-Published Fares</h6>
                  </div>
                  <div className="air_spacial_middle">
                    <h4>Saved For Our Callers</h4>
                    <span className="air_spacial_middle3">
                      <h5>{airlineDetail?.businessName}</h5>
                    </span>
                    <h6>{airlineDetail?.businessName}</h6>
                    <h6>Reservations </h6>
                  </div>
                  <div className="air_spacial_middle2">
                    <p>
                      New Reservations, Changes, Cancellations &amp; Customer
                      Service
                    </p>
                    <h4>No Hold Time</h4>
                    <h5>
                    <i className="fa-solid fa-phone"></i> Call Now
                    </h5>
                    <h6>Agent Available</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="air_spacial_fix_bottom">
              <h4>
              <i className="fa-solid fa-phone"></i> {langData?.phoneNumber}{" "}
              </h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileSection;
