import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_AaqNCijykvr43DOSXUC7f");

export default function ContactUs() {
  function sendEmail(props) {
    const { name, email, message } = props;
    const templateVars = {
      from_name: name,
      user_email: email,
      user_message: message,
    };

    setEmail({ email: "", name: "", message: "" });

    emailjs.send("service_p0dcsbm", "template_ckst29o", templateVars).then(
      (result) => {
        setConfirmation("Message Sent!");
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  const [email, setEmail] = useState({ email: "", name: "", message: "" });
  const [confirmation, setConfirmation] = useState("Want to work with us?");

  return (
    <div className="flex justify-center mt-10" id="contact-us">
      <div className="w-full lg:w-6/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">{confirmation}</h4>
            <p className="leading-relaxed mt-1 mb-4 text-gray-600">
              Complete this form and we will get back to you in 24 hours.
            </p>
            <div className="relative w-full mb-3 mt-8">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="full-name"
                name="from_name"
              >
                Full Name
              </label>
              <input
                type="text"
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Full Name"
                style={{ transition: "all .15s ease" }}
                onChange={(e) => setEmail({ ...email, name: e.target.value })}
                value={email.name}
              />
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
                name="user_email"
              >
                Email
              </label>
              <input
                type="email"
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Email"
                style={{ transition: "all .15s ease" }}
                onChange={(e) => setEmail({ ...email, email: e.target.value })}
                value={email.email}
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
                name="user_message"
              >
                Message
              </label>
              <textarea
                rows="4"
                cols="80"
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Type a message..."
                onChange={(e) =>
                  setEmail({ ...email, message: e.target.value })
                }
                value={email.message}
              />
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => sendEmail(email)}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
