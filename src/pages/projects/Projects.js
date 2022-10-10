import React from "react";
import { Box, Grid, Typography, Stack, Divider } from "@mui/material";
import Marquee from "react-fast-marquee";
import { SiCodeproject } from "react-icons/si";
import { motion } from "framer-motion";
import {
  aboutProject,
  projectNames,
  projectNamesLinks,
  otherProjects,
  otherProjectsLinks,
  projects,
} from "../../data/Data";
import {
  StyledBlueEffect,
  StyledButton,
  StyledSkillCard,
  StyledSkillText,
} from "../../styles/styles";

const Projects = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Divider>
          <StyledSkillText variant="h4" my={3} sx={{ marginBottom: "2rem" }}>
            My work
          </StyledSkillText>
        </Divider>
        <Grid
          container
          spacing={5}
          sx={{ justifyContent: "center", position: "relative" }}
        >
          <StyledBlueEffect
            style={{ background: "#edd0ff", top: 0, left: 0 }}
          />
          <StyledBlueEffect
            sx={{ background: "#c1f5ff", top: "25rem", right: 0 }}
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
                    sx={{
                      marginBottom: "2rem",
                      width: "7rem",
                      height: "2.5rem",
                    }}
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
                  sx={{
                    fontSize: "3rem",
                    marginTop: "1rem",
                    padding: "0 1rem",
                  }}
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
                    sx={{
                      marginBottom: "2rem",
                      width: "15rem",
                      height: "2rem",
                    }}
                  >
                    Visit
                  </StyledButton>
                </a>
              </StyledSkillCard>
            ))}
          </Stack>
        </Marquee>
      </motion.div>
    </>
  );
};

export default Projects;
