import React, { useState } from "react";
import Head from "next/head";
import { phoneNumber, contactEmail } from "@/constant/headerConstant";
import { sendMail } from "@/service/api";
import Breadcrumb from "./components/shared/Breadcrumb";
import LazyImage from "./components/ui/LazyImage";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setMessage("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setMessage("Name is required.");
      setIsError(true);
      return;
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      setMessage("Invalid email address.");
      setIsError(true);
      return;
    }

    try {
      const mailBody = {
        contactForm: formData,
        type: "contact",
      };
      const response = await sendMail(mailBody);
      if (!response?.status) {
        setMessage("Failed to send message. Please try again.");
        setIsError(true);
        return;
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setMessage(
        "Thank you for reaching out. We will be in touch with you shortly."
      );
      setIsError(false);
    } catch (error) {
      setMessage("Failed to send message. Please try again.");
      setIsError(true);
    }
  };

  return (
    <>
      <Head>
        <title>{"Contact Us"}</title>
      </Head>
      <Breadcrumb title={"Contact Us"} />
      <div className="container-xl pt-5 inner-page">
        <div className="col-sm-12">
          <h2>Contact Us</h2>
          
          <div className="row mt-4 pb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 cont-left">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.665340186445!2d-75.55256462356594!3d39.74716767155514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd3ff6591c49%3A0x33e3770057b3e565!2s1000%20N%20West%20St%20suite%201200%20building%2C%20Wilmington%2C%20DE%2019801%2C%20USA!5e0!3m2!1sen!2sin!4v1718887835813!5m2!1sen!2sin"  style={{width:'100%', height:'350px'}}></iframe>
            </div>


          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 cont-left">
              <h5>Contact Us</h5>
              <form className="row g-3 mt-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                  Send message
                  </button>
                </div>
                <div
                  className={`col-12 text-${isError ? "danger" : "success"}`}
                >
                  {message}
                </div>
              </form>
            </div>

             
            <div className="container-fluid secure">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="features-item">
                <div className="features-icon">
                  <LazyImage
                    src="/customer-service.png"
                    alt="..."
                    height={60}
                    width={60}
                  />
                </div>
                <div className="features-content">
                  <h6 className="title">Contact Number</h6>
                  <p className="mb-0">
                      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                    </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="features-item">
                <div className="features-icon">
                  <LazyImage src="/message.png" height={60} width={60} />
                </div>
                <div className="features-content">
                  <h6 className="title">Email Id</h6>
                  <p className="mb-0">
                      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                    </p>
                </div>
              </div>
            </div>

            


            <div className="col-md-6 mb-4">
              <div className="features-item">
                <div className="features-icon">
                  <LazyImage
                    src="/smartphone.png"
                    height={60}
                    width={60}
                    alt="..."
                  />
                </div>
                <div className="features-content">
                  <h6 className="title"> Company Location</h6>
                  <p>448A, Udyog Vihar Phase V Rd, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana 122022</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
