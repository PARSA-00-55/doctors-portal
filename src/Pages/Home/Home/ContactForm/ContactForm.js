import React from "react";
import appointment from "../../../../assets/images/appointment.png";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";

const ContactForm = () => {
  return (
    <section
      className="mt-[10rem] md:p-12 p-5"
      style={{ background: `url(${appointment})` }}
    >
      <div>
        <div className="text-center mb-12">
          <h4 className="text-xl font-bold text-primary">Contact Us</h4>
          <h1 className="text-3xl font-bold text-white">
            Stay connected with us
          </h1>
        </div>
        <div className="flex flex-col w-4/5 md:w-2/5 mx-auto items-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <br />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <br />
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Bio"
          ></textarea>
          <br />
          <div className="">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
