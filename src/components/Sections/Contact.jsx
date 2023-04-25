import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
// Assets
import ContactImg1 from "../../assets/img-charity/2.jpg";
import ContactImg2 from "../../assets/img-charity/10.jpg";
import ContactImg3 from "../../assets/img-charity/20.jpg";
import emailjs from "@emailjs/browser";
import SuccessMessage from "./SuccessMessage";

const initial_state = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [state, setState] = useState(initial_state);
  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      status: "Contact Page",
      name: state.name,
      email: state.email,
      subject: state.subject,
      message: state.message,
      // notes: 'Check this out!'
    };
    return emailjs
      .send(
        "service_7jw99kd",
        "contact_form_charity",
        templateParams,
        "J7G1lNfDggeMJoWmB"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setState({ name: "", email: "", subject: "", message: "" });
          setModal(true);
          setErrorMessage(
            `Message has been successfully sent we will get back to you on ${state.email} shortly`
          );
        },
        (err) => {
          console.log("FAILED...", err);
          setModal(true);
          setErrorMessage(
            `Sorry Message has not been sent this could be because of slow Internet connection.`
          );
        }
      );
  };

  const handleCloseModal = () => {
    setModal(false);
    setErrorMessage("");
  };
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              We would love to hear from you Send us a Message
              <br />
              We will get back to you
            </p>
          </HeaderInfo>
          {modal && (
            <SuccessMessage
              handleCloseModal={handleCloseModal}
              errorMessage={errorMessage}
            />
          )}
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form onSubmit={handleSubmit}>
                <label className="font13">Full name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  className="font20 extraBold"
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  className="font20 extraBold"
                />
                <label className="font13">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={state.subject}
                  onChange={handleChange}
                  className="font20 extraBold"
                />
                <label className="font13">Message:</label>
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  value={state.message}
                  onChange={handleChange}
                  className="font20 extraBold"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ width: "50%" }}
                >
                  Send Message
                </Button>
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div
                style={{ width: "50%" }}
                className="flexNullCenter flexColumn"
              >
                <ContactImgBox>
                  <img
                    src={ContactImg1}
                    alt="office"
                    className="radius6"
                    style={{ width: "220px" }}
                  />
                </ContactImgBox>
                <ContactImgBox>
                  <img
                    src={ContactImg2}
                    alt="office"
                    className="radius6"
                    style={{ width: "180px" }}
                  />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img
                    src={ContactImg3}
                    alt="office"
                    className="radius6"
                    style={{ width: "190px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
