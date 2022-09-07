import React from "react";
import { Grid, IconButton, Typography, LinearProgress } from "@mui/material";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaAws,
  FaNpm,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiMaterialui,
  SiPostman,
  SiJasmine,
} from "react-icons/si";
import { DiMysql, DiHeroku } from "react-icons/di";
import {
  StyledBlueEffect,
  StyledDesc,
  StyledSkillCard,
  StyledSkillText,
} from "../../styles/styles";
import { Stack } from "@mui/system";

const skills = [
  <FaHtml5 style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <FaCss3 style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <SiJavascript style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <FaReact style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <SiMaterialui style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <FaNodeJs style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <SiMongodb style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <DiMysql style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <DiHeroku style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <SiNetlify style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <FaGithub style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <FaBootstrap style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <FaAws style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <FaNpm style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <SiPostman style={{ fontSize: "3rem", color: "#f99f38" }} />,
  <SiJasmine style={{ fontSize: "3rem", color: "#f99f38" }} />,
];

const proficiency = [
  90, 80, 90, 80, 80, 80, 70, 70, 80, 80, 70, 80, 50, 50, 70, 70,
];

const names = [
  "HTML",
  "Css",
  "JavaScript",
  "React",
  "Material-Ui",
  "Node Js",
  "MongoDb",
  "MySql",
  "Heroku",
  "Netlify",
  "Github",
  "Bootstrap",
  "Aws",
  "Npm",
  "Postman",
  "Jasmine",
];

const Skills = () => {
  return (
    <>
      <StyledSkillText variant="h4" my={3}>
        Skills
      </StyledSkillText>

      <Grid
        container
        spacing={5}
        sx={{ justifyContent: "center", position: "relative" }}
        p={2}
      >
        <StyledBlueEffect
          style={{ background: "#edd0ff", top: "-8%", left: "-10%" }}
        />
        <StyledBlueEffect
          sx={{ background: "#c1f5ff", top: "25rem", left: "86%" }}
        />
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <StyledSkillCard elevation={5}>
              <IconButton sx={{ marginTop: "2rem" }}>{skill}</IconButton>
              <Typography fontWeight="bold" my={2}>
                {names[index]}
              </Typography>
              <Stack sx={{ width: "90%", marginBottom: 2 }} direction="column">
                <StyledDesc sx={{ fontSize: "14px", textAlign: "center" }}>
                  {proficiency[index]}%
                </StyledDesc>
                <LinearProgress
                  variant="determinate"
                  value={proficiency[index]}
                  color="secondary"
                />
              </Stack>
            </StyledSkillCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Skills;
