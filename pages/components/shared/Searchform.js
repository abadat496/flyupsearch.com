import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AutoCompleteInput from "../ui/Autocomplete";
import ClassSelection from "../ui/ClassSelection";
import { useData } from "@/utils/DataContext";
import { getFlightDetails } from "@/service/api";
import { phoneNumber } from "@/constant/headerConstant";
import LazyImage from "../ui/LazyImage";
import { TextFields } from "@mui/icons-material";

const SearchForm = ({
  reset,
  title,
  airlineDetail,
  backGroundImage,
  onlyForm
}) => {
  const router = useRouter();

  const {
    updateFormData,
    formValues,
    updateSearchResult,
    setLoading,
    resetFormData,
  } = useData();

  const [formData, setFormData] = useState(formValues);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setIsValid(true);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value,
    }));
  };

  const handleSelect = (value, name) => {
    setIsValid(true);
    if (dayjs.isDayjs(value)) {
      const dateString = value.format('YYYY-MM-DD');
      setFormData((prevData) => ({
        ...prevData,
        [name]: dateString,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = async () => {
    updateFormData(formData);

    try {
      const {
        origin,
        destination,
        departDate,
        returnDate,
        adults,
        children,
        infants,
        tripType,
      } = formData;

      if (
        !origin ||
        !destination ||
        !departDate ||
        (tripType === "roundTrip" && (!returnDate || returnDate < departDate))
      ) {
        setIsValid(false);
        return;
      }

      setLoading(true);

      const flightDetailsParams = {
        origin: origin?.split("~")?.[0]?.trim() || null,
        destination: destination?.split("~")?.[0]?.trim() || null,
        departDate: departDate ? encodeURIComponent(departDate) : null,
        adults,
        children,
        infants,
        returnDate:
          returnDate && tripType === "roundTrip"
            ? encodeURIComponent(returnDate)
            : null,
      };

      const airline = airlineDetail;

      const response = await getFlightDetails(flightDetailsParams, airline);
       updateSearchResult(response);
    } catch (error) {
      updateSearchResult([]);
    }
    router.push("/search-result");
    setLoading(false);
  };

  useEffect(() => {
    if (reset) {
      resetFormData();
    }
  }, [reset]);

  useEffect(() => {
    if (formValues) {
      setFormData(formValues);
    }
  }, [formValues]);

  return (
    <>
      <div
        className="container-fluid banner-bg p-0"
        style={{ backgroundImage: `url(${backGroundImage})` }}
      >
        <div className="container searh-engain">
          <div className="row">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
            {!onlyForm && <div className="marg-top">
              <h1>
                {title ||
                  "Book now, go wow!"}
              </h1>
             
             <h5>From quaint villages to vibrant cities, explore the way you want.  </h5>
             
            </div>}
            </div>
            <div className="col-12 col-sm-12 col-lg-12 col-xl-12 p-0">
            <div
              className="tab-content"
              style={{
                display: `block`
              }}
             >
              <div
                className="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="form-check form-check-inline mb-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tripType"
                    value="roundTrip"
                    checked={formData.tripType === "roundTrip"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="roundTrip">
                    Round Trip
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tripType"
                    value="oneWay"
                    checked={formData.tripType === "oneWay"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="oneWay">
                    One Way
                  </label>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6 col-lg-2 col-xl-2 p-1">
                    <label>From Airport</label>
                    <div className="input-group">
                      <div className="icon3">
                      <i class="fa-solid fa-plane-departure"></i>
                      </div>
                      <AutoCompleteInput
                        name="origin"
                        placeholder="Flying From"
                        value={formValues.origin}
                        onSelect={(val) => handleSelect(val, "origin")}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-2 col-xl-2 p-1">
                    <label>To Airport</label>
                    <div className="input-group">
                      <div className="icon3">
                      <i class="fa-solid fa-plane-arrival"></i>
                      </div>
                      <AutoCompleteInput
                        name="destination"
                        value={formValues.destination}
                        placeholder="Flying To"
                        onSelect={(val) => handleSelect(val, "destination")}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-2 col-xl-2 p-1">
                    <label>Departure Date</label>
                    <div className="input-group">
                      <div className="icon3">
                      <i class="fa-solid fa-calendar-check"></i>
                      </div>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                        defaultValue={dayjs(formData.departDate? formData.departDate: null)}
                         minDate={dayjs(new Date())}
                          onChange={(newValue) => handleSelect(newValue, "departDate")}
                          renderInput={(params) => <TextFields {...params} fullWidth />}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>
                  {formData.tripType === "roundTrip" && (
                  <div className="col-6 col-sm-6 col-lg-2 col-xl-2 p-1">
                    <label>Return Date</label>
                    <div className="input-group">
                      <div className="icon3">
                      <i class="fa-solid fa-calendar-check"></i>
                      </div>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={dayjs(formData.returnDate)}
                          minDate={dayjs(formData.departDate)}
                          onChange={(newValue) => handleSelect(newValue, "returnDate")}
                          renderInput={(params) => <TextFields {...params} fullWidth />}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>
                )}
                  <div className="col-12 col-sm-6 col-lg-2 col-xl-2 p-1">
                    <label>Add Travelers</label>
                    <div className="dropdown">
                      <div className="icon3">
                      <i class="fa-solid fa-users"></i>
                      </div>
                      <ClassSelection
                        onSelectClass={(key, val) => handleSelect(val, key)}
                        onChangePassengers={(key, val) =>
                          handleSelect(val, key)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-2 col-xl-2 d-grid gap-2 p-1">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Search Flights  
                    </button>
                  </div>
                </div>
                {!isValid && (
                  <div className="text-danger">
                    Kindly complete all the required fields.
                  </div>
                )}
              </div>
            </div></div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
