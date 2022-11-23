import React from "react";
import Banner from "../Banner/Banner";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";
import ContactForm from "./ContactForm/ContactForm";
import DntalTerms from "./DentalTerms/DntalTerms";
import InfoCards from "./InfoCards/InfoCards";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <DntalTerms></DntalTerms>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
