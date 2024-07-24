import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import moment from "moment";
import {
  smtp_type,
  smtp_usename,
  smtp_password,
  from_Name,
  from_email,
  recievers,
} from "@/constant/apiConstant";

import { phoneNumber, contactEmail } from "@/constant/headerConstant"; 

export default async function sendMailHandler(req, res) {
  let emailData = req.body;

  const transporter = nodemailer.createTransport({
    service: smtp_type,
    auth: {
      user: smtp_usename,
      pass: smtp_password,
    },
  });

  const mailOptions = {
    from: {
      name: from_Name,
      address: from_email,
    },
  };

  if (emailData.type == "flight-confirmation") {
    mailOptions.to = [...recievers, emailData.travellerInformation.email];
    mailOptions.subject = "Flight Booking Confirmation";

    emailData.flightDetails.itineraries.forEach((itinerary) => {
      itinerary.segments.forEach((segment) => {
        segment.departure["date"] = moment(segment.departure.at).format(
          "dddd, MMMM Do YYYY"
        );
        segment.departure["time"] = moment(segment.departure.at).format(
          "hh:mm a"
        );
        segment.arrival["date"] = moment(segment.arrival.at).format(
          "dddd, MMMM Do YYYY"
        );
        segment.arrival["time"] = moment(segment.arrival.at).format("hh:mm a");
      });
    });

    emailData.travellerPriceObject.adults["totalBasePrice"] =
      emailData.travellerPriceObject.adults["count"] *
      emailData.travellerPriceObject.adults["basePrice"];
    emailData.travellerPriceObject.adults["totalTaxAndFeesPrice"] =
      emailData.travellerPriceObject.adults["count"] *
      emailData.travellerPriceObject.adults["taxAndfees"];
    emailData.travellerPriceObject.children["totalBasePrice"] =
      emailData.travellerPriceObject.children["count"] *
      emailData.travellerPriceObject.children["basePrice"];
    emailData.travellerPriceObject.children["totalTaxAndFeesPrice"] =
      emailData.travellerPriceObject.children["count"] *
      emailData.travellerPriceObject.children["taxAndfees"];
    emailData.travellerPriceObject.infants["totalBasePrice"] =
      emailData.travellerPriceObject.infants["count"] *
      emailData.travellerPriceObject.infants["basePrice"];
    emailData.travellerPriceObject.infants["totalTaxAndFeesPrice"] =
      emailData.travellerPriceObject.infants["count"] *
      emailData.travellerPriceObject.infants["taxAndfees"];

    emailData.bookingDate = moment(emailData.bookingDate).format(
      "dddd, MMMM Do YYYY"
    );

    getEjsTemplatAndSendMail(
      path.resolve(process.cwd(), "templates", "flight_confirmation.ejs"),
      emailData,
      mailOptions,
      transporter,
      res
    );
  }
  if (emailData.type == "contact") {
    mailOptions.to = recievers;
    mailOptions.subject = "Contact Us";
    getEjsTemplatAndSendMail(
      path.resolve(process.cwd(), "templates", "contact-us.ejs"),
      emailData,
      mailOptions,
      transporter,
      res
    );
  }

  res.send("Message sent");
}

function getEjsTemplatAndSendMail(
  filePath,
  emailData,
  mailOptions,
  transporter,
  res
) {
  ejs.renderFile(filePath, { flightDetails: emailData, phoneNumber, contactEmail }, (err, html) => {
    if (err) {
      console.error("Error rendering EJS template:", err);
    } else {
      mailOptions.html = html;

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error in sending email: ", error);
        } else {
          res.status(200).send({
            message: "Successfully submitted the form and sent the email.",
          });
          console.log("Email sent successfully.");
        }
      });
    }
  });
}
