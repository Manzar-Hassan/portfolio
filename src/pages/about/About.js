import React from "react";
import { Tooltip, Typography } from "@mui/material";
import {
  StyledAboutCard,
  StyledBlueEffect,
  StyledDownloadButton,
} from "../../styles/styles";
import { BsList } from "react-icons/bs";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }} my={5}>
          About me
        </Typography>
        <StyledAboutCard>
          <Typography sx={{ fontSize: "1.2rem", textAlign: "center" }}>
            I'm a Passionate full-stack developer with 3+ years of hands on
            experience in developing scalable websites/applications using a wide
            range of frontend and backend skills. I had participate in 3
            Hacakathons and I'm very happy with the result as well as the
            process of creating them, I learnt a lot. I've completed 4 projects
            and many small sub projects which includes technologies like HTML,
            Css, JavaScript, React, MongoDb, Material UI etc. Looking to further
            enhance both my frontend and backend skills as the further
            Full-stack developer.
          </Typography>
        </StyledAboutCard>
        <StyledBlueEffect
          sx={{ background: "#c1f5ff", top: "10rem", left: "26%" }}
        />
      </motion.div>
      <Tooltip
        title="Download Resume"
        sx={{
          position: "absolute",
          bottom: { xs: 70, sm: 20 },
          right: 30,
          transform: { xs: "scale(0.7)", sm: "scale(1)" },
        }}
      >
        <StyledDownloadButton>
          <a
            href="https://drive.google.com/file/d/1FRCYkZhGUa_be--t3kkbffF9V23u_pfZ/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            <BsList style={{ height: "1.2rem", width: "1.2rem" }} />
          </a>
        </StyledDownloadButton>
      </Tooltip>
    </>
  );
};

export default About;
