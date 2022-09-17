import React, { useState } from "react";
import { Backdrop, Grid, Stack } from "@mui/material";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  StyledButton,
  StyledHello,
  StyledName,
  StyledBlueEffect,
  StyledTextField,
  StyledTextArea,
} from "../../styles/styles";
import Loader from "../../components/loader/Loader";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      contactInfo.name === "" ||
      contactInfo.email === "" ||
      contactInfo.message === ""
    ) {
      alert("Please enter the valid inputs in form!!");
      return;
    }

    setLoading(true);
    await emailjs
      .send(
        "service_qn2x7o9",
        "template_k2ffiax",
        contactInfo,
        "UGBnyH5nl-Y_7UO2N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setContactInfo({
      name: "",
      email: "",
      message: "",
    });
    setLoading(false);
  };

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.4,
          },
        }}
        exit={{ x: "-100%", transition: { ease: "easeOut" } }}
      >
        <Grid container spacing={2} mt={10}>
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <StyledHello>Get in touch,</StyledHello>
            <StyledName>Contact me</StyledName>
            <StyledBlueEffect
              sx={{ background: "#c1f5ff", top: "17rem", left: "56%" }}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <StyledBlueEffect
              sx={{ background: "#edd0ff", top: "-18%", left: "56%" }}
            />
            <Stack sx={{ justifyContent: "center", gap: 3 }}>
              <StyledTextField
                name="name"
                value={contactInfo.name}
                placeholder="Name"
                onChange={handleChange}
              />
              <StyledTextField
                name="email"
                value={contactInfo.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <StyledTextArea
                name="message"
                value={contactInfo.message}
                placeholder="Message"
                onChange={handleChange}
              />
              <StyledButton sx={{ width: "7rem" }} onClick={sendEmail}>
                Submit
              </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </motion.div>
      <div>
        <Backdrop
          sx={{
            color: "#fff",
            backdropFilter: "blur(5px)",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={loading}
        >
          <Loader />
        </Backdrop>
      </div>
    </>
  );
};

export default Contact;
