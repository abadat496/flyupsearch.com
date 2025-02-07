import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Fab from "@mui/material/Fab";
import { styled } from '@mui/material/styles';
import Drawer from "@mui/material/Drawer";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterResults from "./FilterResults";
import { useData } from "@/utils/DataContext";

import {
  carrierWithName,
  formatFullDate,
  formatTime,
  updatedAirlinetData,
} from "@/utils/utils";
import LazyImage from "../ui/LazyImage";

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    height: '100%',
  },
}));
const FlightBox = ({ searches = null }) => {
  const router = useRouter();

  const [airlinesData, setAirlinesData] = useState([]);
  const [normalizedAirlines, setNormalizedAirlines] = useState([]);
  const [normalizedAirOrig, setNormalizedAirOrig] = useState([]);
  const [careers, setCareers] = useState([]);
  const [filterKeys, setFilterKeys] = useState({ stops: [], airlines: [] });
  const [width, setWidth] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  

  const { updateSelectedAirline, updatePlainData } = useData();

  useEffect(() => {
    if (normalizedAirlines) {
      updatePlainData(normalizedAirlines);
    }
  }, [normalizedAirlines]);

  useEffect(() => {
    if (airlinesData.length && careers.length) {
      const ua = updatedAirlinetData(airlinesData, careers);
      setNormalizedAirlines(ua);
      setNormalizedAirOrig(ua);
    }
  }, [airlinesData, careers]);

  useEffect(() => {
    if (
      airlinesData.length &&
      searches &&
      searches.dictionaries &&
      searches.dictionaries.carriers
    ) {
      const cc = carrierWithName(searches.dictionaries.carriers);
      setCareers(cc);
    }
  }, [searches, airlinesData]);

  useEffect(() => {
    if (searches && searches.data) {
      setAirlinesData(searches.data);
    } else {
      setAirlinesData([]);
    }
  }, [searches]);

  const toggleFlightDetails = (data) => {
    setNormalizedAirlines((prevAirlines) =>
      prevAirlines.map((prevData) =>
        prevData === data
          ? { ...prevData, showFlightDetails: !prevData.showFlightDetails }
          : prevData
      )
    );
  };

  const filterSearch = (event, type, value) => {
    let filteredDetail = normalizedAirOrig;
    let updatedFilterKeys = { ...filterKeys };

    if (event.target.checked) {
      if (type === "stop") {
        updatedFilterKeys.stops.push(value);
      } else if (type === "airline") {
        updatedFilterKeys.airlines.push(value);
      }
    } else {
      if (type === "stop") {
        updatedFilterKeys.stops = updatedFilterKeys.stops.filter(
          (item) => item !== value
        );
      } else if (type === "airline") {
        updatedFilterKeys.airlines = updatedFilterKeys.airlines.filter(
          (item) => item !== value
        );
      }
    }

    if (updatedFilterKeys.airlines.length || updatedFilterKeys.stops.length) {
      filteredDetail = normalizedAirlines.filter((flight) => {
        if (
          updatedFilterKeys.airlines.length &&
          updatedFilterKeys.stops.length
        ) {
          return (
            flight.carrierCodes.every((elem) =>
              updatedFilterKeys.airlines.includes(elem)
            ) &&
            flight.stops.every((elem) =>
              updatedFilterKeys.stops.includes(String(elem))
            )
          );
        } else if (updatedFilterKeys.airlines.length) {
          return flight.carrierCodes.every((elem) =>
            updatedFilterKeys.airlines.includes(String(elem))
          );
        } else if (updatedFilterKeys.stops.length) {
          return flight.stops.every((elem) =>
            updatedFilterKeys.stops.includes(String(elem))
          );
        }
        return true;
      });
    }

    setNormalizedAirlines(filteredDetail);
    setFilterKeys(updatedFilterKeys);
  };

  const goToBooking = (data) => {
    if (data) {
      updateSelectedAirline(data);
      router.push("/booking");
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
   

  return (
    <>
      {width < 768 && (
        <>
          <Fab
            color="primary"
            aria-label="filter"
            style={{ position: "fixed", bottom: 16, right: 16, marginBottom: 65 }}
            onClick={handleDrawer}
            sx={{ zIndex: 9999999999 }}
          >
            <FilterListIcon />
          </Fab>
          <CustomDrawer anchor="bottom" open={drawerOpen} onClose={handleDrawer}>
            <div
              style={{ width: "100%", padding: 16, boxSizing: "border-box" }}
            >
              <FilterResults
                searches={normalizedAirlines}
                careers={careers}
                filterSearch={filterSearch}
              />
            </div>
          </CustomDrawer>
        </>
      )}

      <div className="row">
      {(width > 767) && (
        <FilterResults
          searches={normalizedAirlines}
          careers={careers}
          filterSearch={(event, type, value) =>
            filterSearch(event, type, value)
          }
        />
      )}

      <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9 pt-4 pb-4 box-center">

        {normalizedAirlines.map((data, i) => (
          <div key={i} className="col-12 mt-3 flight-box">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 p-4">
                {data?.itineraries &&
                  data?.itineraries.map((it, j) => (
                    <div className="row mb-4" key={j}>
                      {it.segments &&
                        it.segments.map((s, k) => (
                          <React.Fragment key={k}>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <h6>{j === 0 ? 'Departure': 'Return'}</h6>
                              <div className="form-check">
                                <label className="form-check-label" htmlFor="">
                                  <span className="float-start">
                                    <LazyImage
                                      src={`/${s.carrierName}.png`}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </span>
                                  <span className="float-end">
                                    {s.carrierName}
                                    
                                    {" "}Airlines
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8"> 
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-end">
                                  <div className="flight-time">
                                    {formatTime(s?.departure?.at)}
                                  </div>
                                  <div className="airport-name">
                                    {s?.departure?.iataCode}
                                  </div>
                                </div>
                                <div className="col-4 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center">
                                  <div className="trip-duration">
                                    {s?.duration?.replace("PT", "")}
                                  </div>
                                  <hr />
                                  {s?.stops && s?.stops?.length && (
                                    <div className="trip-duration">
                                      {s.stops.map((stop, l) => (
                                        <span key={l}>
                                          {stop.iataCode} -{" "}
                                          {stop.duration.replace("PT", "")}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                  <div className="trip-duration">
                                    {s.numberOfStops
                                      ? s.numberOfStops + " Stop"
                                      : " Non stop"}
                                  </div>
                                </div>
                                <div className="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-start">
                                  <div className="flight-time">
                                    {formatTime(s?.arrival?.at)}
                                  </div>
                                  <div className="airport-name">
                                    {s?.arrival?.iataCode}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                    </div>
                  ))}
                {data?.itineraries &&
                  data?.itineraries.map((it, i) => (
                    <React.Fragment key={i}>
                      {data?.showFlightDetails && (
                        <div className="more">
                          <div className="row expend mb-4">
                            <hr className="mb-3" />
                            <div className="col-12">
                              {i === 0 && <h6></h6>}
                              <p>
                                {i === 0 && (
                                  <span>
                                    <strong>
                                      <span className="float-start mt-2">
                                        <LazyImage
                                          src="/departures.png"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </span>
                                      &nbsp;&nbsp;Depart&nbsp;&nbsp;
                                    </strong>
                                  </span>
                                )}

                                {i === 1 && (
                                  <span>
                                    <strong>
                                      <span className="float-start">
                                        <LazyImage
                                          src="/arrivals.png"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </span>
                                      &nbsp;&nbsp;Return&nbsp;&nbsp;
                                    </strong>
                                  </span>
                                )}
                                <span>
                                  {formatFullDate(
                                    it?.segments?.[0]?.departure?.at
                                  )}
                                </span>
                                <span className="float-end">
                                  <strong> Total Trip Duration: </strong>
                                  <i className="far fa-clock"></i>
                                  <strong>
                                    {it.duration.replace("PT", "")}
                                  </strong>
                                </span>
                              </p>
                            </div>
                            {it &&
                              it.segments.map((s, j) => (
                                <React.Fragment key={j}>
                                  <div className="col-12 col-sm-12 col-md-4 col-lg-6 col-xl-6">
                                    <span className="float-start">
                                      <LazyImage
                                        src={`/${s?.carrierName}.png`}
                                        className="img-fluid"
                                        alt={s?.carrierName}
                                      />
                                    </span>
                                    <span className="float-start">
                                      {s?.carrierName}
                                       
                                     {" "} Airlines{" "}
                                      
                                      {s?.carrierCode}-{s?.number}
                                    </span>
                                    
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
                                    <div className="row">
                                      <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-start">
                                        <div className="airport-name">
                                          {formatFullDate(s?.departure?.at)}
                                        </div>
                                      </div>
                                      <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-start">
                                        <div className="flight-time">
                                          {formatTime(s?.departure?.at)}
                                        </div>
                                        <div className="trip-duration">
                                          {s?.departure?.iataCode}
                                        </div>
                                      </div>
                                      <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-start">
                                        <div className="flight-time">
                                          {formatTime(s?.arrival?.at)}
                                        </div>
                                        <div className="trip-duration">
                                          {s?.arrival?.iataCode}
                                        </div>
                                      </div>
                                      <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-end">
                                        <div className="airport-name">
                                          {formatFullDate(s?.arrival?.at)}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </React.Fragment>
                              ))}
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 flight-right text-end">
                <h4>
                  $ {data?.price?.grandTotal?.split(".")[0] || 0}.
                  <sup>{data?.price?.grandTotal?.split(".")[1]}</sup>
                </h4>
                <p>Price per person (incl. taxes & fees)</p>
                <div className="d-grid gap-2">
               
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => goToBooking(data)}
                  >
                    Select{" "}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </button>
                  <div
                    className="deta-but"
                    onClick={() => toggleFlightDetails(data)}
                  >
                    Flight Details
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>   
       </div>
      
    </>
  );
};

export default FlightBox;
