import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FaUniversity, FaSearchLocation } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { GiTicket } from "react-icons/gi";
import { SiCodeproject } from "react-icons/si";
import { Stack } from "@mui/system";
import {
  aboutProject,
  projectNames,
  projectNamesLinks,
  otherProjects,
  otherProjectsLinks,
} from "../../data/Data";
import {
  StyledBlueEffect,
  StyledButton,
  StyledSkillCard,
  StyledSkillText,
} from "../../styles/styles";

const projects = [
  <MdOutlineInventory2 style={{ fontSize: "10rem", color: "#f99f38" }} />,
  <FaSearchLocation style={{ fontSize: "10rem", color: "#f99f38" }} />,
  <FaUniversity style={{ fontSize: "10rem", color: "#f99f38" }} />,
  <GiTicket style={{ fontSize: "10rem", color: "#f99f38" }} />,
];

const Projects = () => {
  return (
    <>
      <StyledSkillText variant="h4" my={3} sx={{ marginBottom: "2rem" }}>
        My work
      </StyledSkillText>
      <Grid
        container
        spacing={5}
        sx={{ justifyContent: "center", position: "relative" }}
      >
        <StyledBlueEffect
          style={{ background: "#edd0ff", top: "-8%", left: "-10%" }}
        />
        <StyledBlueEffect
          sx={{ background: "#c1f5ff", top: "25rem", left: "86%" }}
        />
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <StyledSkillCard elevation={5} sx={{ gap: 3 }}>
              <StyledSkillText sx={{ fontSize: "1.5rem", marginTop: "1rem" }}>
                {projectNames[index]}
              </StyledSkillText>
              <Box>{project}</Box>
              <Typography>{aboutProject[index]}</Typography>
              <a
                href={projectNamesLinks[index]}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <StyledButton
                  sx={{ marginBottom: "2rem", width: "7rem", height: "2.5rem" }}
                >
                  Visit
                </StyledButton>
              </a>
            </StyledSkillCard>
          </Grid>
        ))}
      </Grid>
      <StyledSkillText variant="h4" sx={{ marginTop: 7 }}>
        My Other works
      </StyledSkillText>
      <Marquee
        pauseOnHover
        speed={100}
        style={{ marginBottom: "3rem", height: "15rem" }}
      >
        <Stack direction="row" sx={{ gap: 2 }}>
          {otherProjects.map((otherProject, index) => (
            <StyledSkillCard
              elevation={5}
              sx={{ width: "25rem", height: "10rem" }}
              key={index}
            >
              <StyledSkillText
                sx={{ fontSize: "3rem", marginTop: "1rem", padding: "0 1rem" }}
              >
                <SiCodeproject />
              </StyledSkillText>
              <StyledSkillText sx={{ fontSize: "1.2rem" }}>
                {otherProject}
              </StyledSkillText>
              <a
                href={otherProjectsLinks[index]}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <StyledButton
                  sx={{ marginBottom: "2rem", width: "15rem", height: "2rem" }}
                >
                  Visit
                </StyledButton>
              </a>
            </StyledSkillCard>
          ))}
        </Stack>
      </Marquee>
    </>
  );
};

export default Projects;
