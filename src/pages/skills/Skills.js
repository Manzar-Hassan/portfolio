import React from "react";
import {
  Grid,
  IconButton,
  Typography,
  LinearProgress,
  Stack,
} from "@mui/material";
import { names, skills, proficiency } from "../../data/Data";
import {
  StyledBlueEffect,
  StyledDesc,
  StyledSkillCard,
  StyledSkillText,
} from "../../styles/styles";
import { motion } from "framer-motion";

const Skills = () => {
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
                <Stack
                  sx={{ width: "90%", marginBottom: 2 }}
                  direction="column"
                >
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
      </motion.div>
    </>
  );
};

export default Skills;
