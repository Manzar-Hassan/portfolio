import React from "react";
import { Grid, Stack } from "@mui/material";
import gmail from "../../assets/gmail.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import programming from "../../assets/programming.png";
import {
  StyledButton,
  StyledHello,
  StyledName,
  StyledDesc,
  StyledSocialLinks,
  StyledBlueEffect,
} from "../../styles/styles";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} mt={10}>
      <Grid item xs={12} md={6} sx={{ position: "relative" }}>
        <StyledHello>Hello! I Am</StyledHello>
        <StyledName>Manzar Hassan</StyledName>
        <StyledDesc>
          Full-stack web Developer, I love making pages come to life.
        </StyledDesc>
        <StyledButton
          sx={{ marginTop: 5, width: "6rem", height: "2rem" }}
          onClick={() => navigate("/contact")}
        >
          Hire me
        </StyledButton>
        <Stack direction="row" sx={{ gap: 3, marginTop: "5rem" }}>
          <StyledSocialLinks src={linkedin} alt="linkedin" />
          <StyledSocialLinks src={github} alt="github" />
          <StyledSocialLinks src={gmail} alt="gmail" />
        </Stack>
        <StyledBlueEffect
          sx={{ background: "#c1f5ff", top: "17rem", left: "56%" }}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ position: "relative" }}>
        <StyledBlueEffect
          sx={{ background: "#edd0ff", top: "-18%", left: "56%" }}
        />
        <img src={programming} alt="programming" />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
