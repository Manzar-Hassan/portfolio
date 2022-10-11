import React from "react";
import { Box, Grid, Typography, Stack, Divider } from "@mui/material";
import Marquee from "react-fast-marquee";
import { AiOutlineProject } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  aboutProject,
  projectNames,
  projectNamesLinks,
  otherProjects,
  otherProjectsLinks,
  projects,
  otherProjectsGithubLinks,
  githubProjectLinks,
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
                <StyledSkillText
                  sx={{ fontSize: "1.5rem", marginTop: "1rem" }}
                  component="div"
                >
                  {projectNames[index]}
                  <br />
                  <Typography component="div">
                    (A MERN Stack Project)
                  </Typography>
                </StyledSkillText>
                <Box>{project}</Box>
                <Typography component="div">{aboutProject[index]}</Typography>
                <div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <StyledButton
                      sx={{
                        marginBottom: "2rem",
                        width: "7rem",
                        height: "2.5rem",
                      }}
                      href={projectNamesLinks[index]}
                      target="_blank"
                    >
                      Visit
                    </StyledButton>

                    <StyledButton
                      sx={{
                        marginBottom: "2rem",
                        width: "7rem",
                        height: "2.5rem",
                      }}
                      href={githubProjectLinks[index]}
                      target="_blank"
                    >
                      Github
                    </StyledButton>
                  </div>
                </div>
              </StyledSkillCard>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ marginTop: 7 }}>
          <StyledSkillText variant="h4">My Other works</StyledSkillText>
        </Divider>
        <Marquee
          pauseOnHover
          speed={100}
          style={{ marginBottom: "3rem", height: "15rem" }}
        >
          <Stack direction="row" sx={{ gap: 2 }}>
            {otherProjects.map((otherProject, index) => (
              <StyledSkillCard
                elevation={5}
                sx={{ width: "20rem", height: "10rem" }}
                key={index}
              >
                <StyledSkillText
                  sx={{
                    fontSize: "3rem",
                    marginTop: "1rem",
                    padding: "0 1rem",
                  }}
                >
                  <AiOutlineProject />
                </StyledSkillText>
                <StyledSkillText sx={{ fontSize: "1rem" }}>
                  {otherProject}
                </StyledSkillText>
                <Box sx={{display:"flex",gap:"1rem"}}>
                  <StyledButton
                    sx={{
                      marginBottom: "2rem",
                      height: "2rem",
                    }}
                    href={otherProjectsLinks[index]}
                    target="_blank"
                  >
                    Visit
                  </StyledButton>

                  <StyledButton
                    sx={{
                      marginBottom: "2rem",
                      height: "2rem",
                    }}
                    href={otherProjectsGithubLinks[index]}
                    target="_blank"
                  >
                    Github
                  </StyledButton>
                </Box>
              </StyledSkillCard>
            ))}
          </Stack>
        </Marquee>
      </motion.div>
    </>
  );
};

export default Projects;
