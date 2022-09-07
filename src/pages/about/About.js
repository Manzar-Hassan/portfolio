import React from "react";
import { Tooltip, Typography } from "@mui/material";
import Resume from "../../assets/Resume.pdf";
import {
  StyledAboutCard,
  StyledBlueEffect,
  StyledDownloadButton,
} from "../../styles/styles";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center" }} my={5}>
        About me
      </Typography>
      <StyledAboutCard>
        <Typography sx={{ fontSize: "1.2rem", textAlign: "center" }}>
          I'm a Passionate full-stack developer with 6 months+ of hands on
          experience in developing scalable websites/applications using a wide
          range of frontend and backend skills. I had participate in 3
          Hacakathons and I'm very happy with the result as well as the process
          of creating them, I learnt a lot. I've completed 4 projects and many
          small sub projects which includes technologies like HTML, Css,
          JavaScript, React, MongoDb, Material UI etc. Looking to further
          enhance both my frontend and backend skills as the further Full-stack
          developer.
        </Typography>
      </StyledAboutCard>
      <StyledBlueEffect
        sx={{ background: "#c1f5ff", top: "10rem", left: "26%" }}
      />
      <Tooltip
        title="Download Resume"
        sx={{
          position: "fixed",
          bottom: { xs: 70, sm: 20 },
          right: 30,
          transform: { xs: "scale(0.7)", sm: "scale(1)" },
        }}
      >
        <StyledDownloadButton>
          <a href={Resume} download="Resume" style={{color:"inherit"}}>
            <FaDownload />
          </a>
        </StyledDownloadButton>
      </Tooltip>
    </>
  );
};

export default About;
