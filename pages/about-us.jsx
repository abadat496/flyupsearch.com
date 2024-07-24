import React from "react";
import Head from "next/head";
import Breadcrumb from "./components/shared/Breadcrumb";
import LazyImage from "./components/ui/LazyImage";

const About = () => {
  return (
    <>
      <Head>
        <title>{"About Us"}</title>
      </Head>
      <Breadcrumb title={"About Us"} />

     

      <div className="container-xl inner-page">
        <div className="col-12 mt-5">
          
           
          <section>
        
        <p>Unityfare is the epitome in the travel domain. Let’s take a deep dive in the world of adventure and thrill. We are the platform where every journey begins with a promise of discovery. We are thrilled to invite you to come along and explore the world with our Alluring services. 
        </p>
    </section>
 
    <section>
        <h5>Who We Are</h5>
        <p>Our team is full of  passionate travellers who will assist you, plan on behalf of you.  We are curators of your journey. We are a dedicated and skilled travel company, dealing in a variety of services. 
        </p>
    </section>

    <section>
        <h5>What We Do</h5>
        <p>Are you ready to start a journey with us? We are amalgamating adventure with utmost facilities. We are dealing in several verticals related to travel. We are continuously enhancing our services and booking the best for you. </p>
         
    </section><br></br>

  

    

        </div>
      </div>

 

    </>
  );
};

export default About;
