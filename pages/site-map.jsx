import React from "react";
import Head from "next/head";
import Link from "next/link";
import { quickLinks, sitemap } from "@/constant/commonConstants";

const Sitemap = () => {
  return (
    <>
      <Head>
        <title>Site Map</title>
      </Head>
      <div>
        <div className="container-xl pt-5 inner-page">
          <div className="row">
            <div className="col-12">
              <h2>Site Map</h2>
              <hr />
              <p>
              We offer the latest flight fares to major destinations worldwide. Below is a full list of these destinations with quick links to access our website.
              </p>
            </div>

            <div className="col-12 col-sm-6 col-lg-12 col-xl-12 top-margin mb-5 sitemap">
              <h6>Quick Links</h6>
              <hr />
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}><i class="fa-regular fa-square-check"></i> 
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* <h6>Top Airlines</h6>
            <hr />
            <div className="col-12 col-sm-6 col-lg-12 col-xl-12 top-margin sitemap">
              <ul>
                {sitemap.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
