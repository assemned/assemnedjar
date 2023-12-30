"use client";
import React, { useState } from "react";
import axios from "axios";

const form = () => {
  const [question, setQuestion] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [needsWebsite, setNeedsWebsite] = useState(false);
  const [needsLandingPage, setNeedsLandingPage] = useState(false);
  const [needsEcommerceStore, setNeedsEcommerceStore] = useState(false);
  const [other, setOther] = useState("");
  const [budget, setbudget] = useState("");
  const [time, settime] = useState("");
  const [details, setdetails] = useState("");
  const [error1, seterror1] = useState("");

  const handleSubmit1 = () => {
    if (!name || !email || !company) {
      seterror1(true);
    } else {
      setQuestion(2);
      seterror1(false);
    }
  };

  const handleSubmit2 = () => {
    if (needsWebsite || needsLandingPage || needsEcommerceStore || other) {
      setQuestion(3);
    }
  };

  const handleSubmit3 = () => {
    if (budget && time) {
      setQuestion(4);
    }
  };

  const handleBack = () => {
    if (question > 1) {
      setQuestion(question - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = {
        name,
        email,
        company,
        needsWebsite,
        needsLandingPage,
        needsEcommerceStore,
        other,
        budget,
        time,
        details,
      };
      const response = await axios.post(
        "http://localhost:4000/api/form",
        formData
      );

      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className=" w-screen h-screen flex justify-center items-center p-5">
      <div className=" max-w-2xl w-full bg-white flex justify-start items-start flex-col p-8 rounded-md max-sm:p-5">
        <div className=" flex justify-between items-center flex-row w-full border-b-2 pb-3 border-black">
          <h4 className=" text-xl font-bold font-Montserrat inline-block cursor-default">
            ASSEM
          </h4>
          <p className=" text-sm font-Montserrat">
            <span className=" font-bold">{question}</span> / 4
          </p>
        </div>

        {question === 1 && (
          <div className=" py-5 w-full flex justify-start items-start flex-col gap-8">
            <h6 className=" font-Montserrat text-3xl font-bold">
              Hello. We’ve been expecting you.
            </h6>
            <div className=" w-full flex justify-start items-start flex-col gap-1">
              <label>What's your name?</label>
              <input
                className={` w-full border-[1px] border-black p-2 rounded-sm mb-2 ${
                  error1 && " bg-pink-200"
                }`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>E-mail address</label>
              <input
                className={` w-full border-[1px] border-black p-2 rounded-sm mb-2 ${
                  error1 && " bg-pink-200"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>What's your business name?</label>
              <input
                className={` w-full border-[1px] border-black p-2 rounded-sm mb-2 ${
                  error1 && " bg-pink-200"
                }`}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <button
              onClick={handleSubmit1}
              className="mt-2 self-end px-10 py-2 rounded-full bg-blue-600 hover:bg-black duration-300 text-white">
              Continue
            </button>
          </div>
        )}

        {question === 2 && (
          <div className=" py-5 w-full flex justify-start items-start flex-col gap-8">
            <h6 className=" font-Montserrat text-3xl font-bold">
              What can we help you with?
            </h6>
            <div className=" w-full flex justify-start items-start flex-col gap-5">
              <label>
                <input
                  type="checkbox"
                  checked={needsWebsite}
                  onChange={() => setNeedsWebsite(!needsWebsite)}
                />{" "}
                I need a Website
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={needsLandingPage}
                  onChange={() => setNeedsLandingPage(!needsLandingPage)}
                />{" "}
                I need a Landing Page
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={needsEcommerceStore}
                  onChange={() => setNeedsEcommerceStore(!needsEcommerceStore)}
                />{" "}
                I need an Ecommerce Store
              </label>
              <label className=" w-full mt-2">
                Other
                <input
                  className=" w-full border-[1px] border-black p-2 rounded-sm mt-1"
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                />
              </label>
            </div>
            <div className=" flex justify-between items-center w-full">
              <button onClick={handleBack} className=" text-gray-600">
                Back
              </button>
              <button
                onClick={handleSubmit2}
                className="mt-2 self-end px-10 py-2 rounded-full bg-blue-600 hover:bg-black duration-300 text-white">
                Continue
              </button>
            </div>
          </div>
        )}

        {question === 3 && (
          <div className=" py-5 w-full flex justify-start items-start flex-col gap-8">
            <h6 className=" font-Montserrat text-3xl font-bold">
              Tell us about your budget and timeline
            </h6>
            <div className=" w-full flex justify-start items-start flex-col gap-1">
              <label>Approximate Budget</label>
              <input
                className=" border-[1px] border-black px-1 rounded-sm mb-2"
                value={budget}
                onChange={(e) => setbudget(e.target.value)}
              />
              <label>Estimated Timeline</label>
              <input
                className=" border-[1px] border-black px-1 rounded-sm mb-2"
                value={time}
                onChange={(e) => settime(e.target.value)}
              />
            </div>
            <div className=" flex justify-between items-center w-full">
              <button onClick={handleBack} className=" text-gray-600">
                Back
              </button>
              <button
                onClick={handleSubmit3}
                className="mt-2 self-end px-10 py-2 rounded-full bg-blue-600 hover:bg-black duration-300 text-white">
                Continue
              </button>
            </div>
          </div>
        )}

        {question === 4 && (
          <div className=" py-5 w-full flex justify-start items-start flex-col gap-8">
            <h6 className=" font-Montserrat text-3xl font-bold">
              Tell us more about your project
            </h6>
            <div className=" w-full flex justify-start items-start flex-col gap-1">
              <textarea
                className=" w-full h-[30vh] border-[1px] border-black p-2 rounded-sm mb-2 resize-none"
                value={details}
                onChange={(e) => setdetails(e.target.value)}
              />
            </div>
            <div className=" flex justify-between items-center w-full">
              <button onClick={handleBack} className=" text-gray-600">
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="mt-2 self-end px-10 py-2 rounded-full bg-blue-600 hover:bg-black duration-300 text-white">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default form;
