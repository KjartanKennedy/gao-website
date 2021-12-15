import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
// import * as styles from './EmailListForm.module.scss';

const EmailForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data) => {
        if (data.result == "success") {
          document.querySelectorAll("#email-form").forEach((element) => {
            element.style.display = "none";
          });
          document.querySelectorAll("#success").forEach((element) => {
            element.textContent = data.msg;
            element.style.display = "inline-block";
          });
        } else {
          document.querySelectorAll("#error").forEach((element) => {
            element.textContent = "Error: " + data.msg;
            element.style.display = "inline-block";
          });
        }
      })
      .catch((e) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="email-form">
        <div class="email-form">
          <input
            placeholder="Email address"
            name="email"
            type="email"
            onChange={handleEmailChange}
            class="email"
          />
          <button type="submit">Subscribe</button>
          <p id="error" style={{ display: "none" }}>
            Error
          </p>
        </div>
      </form>
      <div id="success" style={{ display: "none" }}>
        <p>Thanks for subscribing!</p>
      </div>
    </>
  );
};

export default EmailForm;
